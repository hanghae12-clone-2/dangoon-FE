import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import { BsCameraFill } from 'react-icons/bs';
import { AiOutlineLeft } from 'react-icons/ai';
import { RiDeleteBack2Fill } from 'react-icons/ri';

import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import ROUTER from '../constants/router';
import Valid from '../validation/validation';

export default function WritePost({ children, axiosFn, detail }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [price, setPrice] = useState('');

  const [image, setImage] = useState([]);
  const [preview, setPreview] = useState([]);
  const locationRef = useRef();

  useEffect(() => {
    if (detail) {
      setTitle(detail.title);
      setContent(detail.content);
      setPrice(detail.price);
      locationRef.current.value = detail.location;
      setImage(detail.imageUrlList);
      setPreview(detail.imageUrlList);
    }
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    if (
      !Valid.emptyPostAddCheck(
        image,
        title,
        content,
        price,
        locationRef.current.value
      )
    )
      return;

    const formData = new FormData();
    let post = {};
    let imageData = [];
    let contentKey = '';
    const parsePrice = /[,]/g.test(price) ? price.replace(/[,]/g, '') : price;
    if (detail) {
      const parsePreviewData = preview.filter(v => v[0] === 'h');
      imageData = image.filter(v => v.name);
      contentKey = 'postUpdateRequestDto';
      post = {
        title,
        content,
        price: parsePrice,
        location: locationRef.current.value,
        remainingImagesUrlList: parsePreviewData,
      };
    } else {
      imageData = image;
      contentKey = 'postRequestDto';
      post = {
        title,
        content,
        price: parsePrice,
        location: locationRef.current.value,
      };
    }

    formData.append(
      contentKey,
      new Blob([JSON.stringify(post)], { type: 'application/json' })
    );

    imageData &&
      imageData.forEach(multipartFiles =>
        formData.append('multipartFiles', multipartFiles)
      );

    axiosFn(formData);
  };

  const handleImageChange = event => {
    const files = event.target.files;
    const urlList = [...files].map(url => URL.createObjectURL(url));
    setImage([...image].concat(...files));
    setPreview([...preview].concat(urlList));
  };

  const handleDeleteImg = index => {
    setImage([...image].filter((_, i) => i !== index));
    setPreview([...preview].filter((_, i) => i !== index));
  };

  const handlePrice = e => {
    let number = e.target.value;
    number = Number(number.replace(/[,]/g, ''));
    if (Number.isNaN(Number(number))) return;
    setPrice(number.toLocaleString('ko-KR'));
  };

  return (
    <Form onSubmit={handleSubmit} encType='multipart/form-data'>
      <FormBorder>
        <FormHeader>
          <FormTitle>
            <Link to={ROUTER.PATH.BACK}>
              <AiOutlineLeft />
            </Link>
            <FormTitleText>{children}</FormTitleText>
          </FormTitle>
          <FormButton type='submit'>완료 </FormButton>
        </FormHeader>
        <LableBorder preview={preview ? true : false}>
          {preview &&
            preview.map((url, index) => (
              <ImgConatiner key={uuidv4()}>
                <Delete onClick={() => handleDeleteImg(index)}>
                  <RiDeleteBack2Fill />
                </Delete>
                <Img srcImg={url} alt='preview' />
              </ImgConatiner>
            ))}
          <Label htmlFor='file-upload'>
            <CameraIcon>
              <BsCameraFill />
            </CameraIcon>
            <Input
              id='file-upload'
              type='file'
              accept='image/*'
              onChange={handleImageChange}
              multiple
            />
          </Label>
        </LableBorder>
        <InputText
          type='text'
          value={price}
          onChange={e => handlePrice(e)}
          placeholder='가격'
        />
        <InputLocation ref={locationRef} as='select'>
          <option value='서울특별시'>거래 희망 장소를 선택해주세요</option>
          <option value='강남구'>강남구</option>
          <option value='강동구'>강동구</option>
          <option value='강북구'>강북구</option>
          <option value='강서구'>강서구</option>
          <option value='관악구'>관악구</option>
          <option value='광진구'>광진구</option>
          <option value='구로구'>구로구</option>
          <option value='금천구'>금천구</option>
          <option value='노원구'>노원구</option>
          <option value='도봉구'>도봉구</option>
          <option value='동대문구'>동대문구</option>
          <option value='동작구'>동작구</option>
          <option value='마포구'>마포구</option>
          <option value='서대문구'>서대문구</option>
          <option value='서초구'>서초구</option>
          <option value='성동구'>성동구</option>
          <option value='성북구'>성북구</option>
          <option value='송파구'>송파구</option>
          <option value='양천구'>양천구</option>
          <option value='영등포구'>영등포구</option>
          <option value='용산구'>용산구</option>
          <option value='은평구'>은평구</option>
          <option value='종로구'>종로구</option>
          <option value='중구'>중구</option>
          <option value='중랑구'>중랑구</option>
        </InputLocation>
        <InputText
          type='text'
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder='제목'
        />
        <TextArea
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder='내용'
        />
      </FormBorder>
    </Form>
  );
}

const Form = styled.form`
  width: 40rem;
  height: 90%;
  margin: 0 auto;
  border: 1px solid #dbdbdb;
  border-radius: 1rem;
`;

const FormBorder = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 10px;
`;

const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
  margin-top: 20px;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 5px;
`;

const LableBorder = styled.div`
  display: flex;
  justify-content: ${props => (props.preview ? 'flex-start' : 'center')};
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  padding: 5rem 1rem;
  margin-bottom: 10px;
  background-color: #f5f5f5;
  gap: 1rem;
  overflow: scroll hidden;
`;

const ImgConatiner = styled.div`
  position: relative;
  width: 15rem;
`;

const Img = styled.div`
  height: 15rem;
  width: 15rem;
  padding-bottom: 100%;
  border-radius: 0.5rem;
  object-fit: cover;
  background-image: url(${props => props.srcImg});
  background-size: 100% 100%;
`;

const Delete = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 1.5rem;
  color: ${props => props.theme.color.carrot_orange};
  z-index: 1000;
  transition: all 300ms ease-in-out;
  :hover {
    transform: scale(1.1);
  }
`;

const FormTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  display: flex;
  align-items: center;
`;

const FormTitleText = styled.span`
  margin-left: 10px;
`;

const Label = styled.label`
  color: black;
  cursor: pointer;

  svg {
    font-size: 5rem;
  }
`;

const CameraIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15rem;
  height: 15rem;
  border: 1px solid black;
  border-radius: 1rem;
`;

const Input = styled.input`
  display: none;
`;

const FormButton = styled.button`
  width: 80px;
  height: 30px;
  font-size: 16px;
  border: none;
  background-color: transparent;
  color: orange;
  font-weight: bold;
`;

const InputText = styled.input`
  width: 100%;
  height: 3rem;
  margin-bottom: 10px;
  border: 1px solid #f5f5f5;
  background-color: #f5f5f5;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  ::placeholder {
    color: #ccc;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
  border: 1px solid #f5f5f5;
  background-color: #f5f5f5;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  resize: none;
  ::placeholder {
    color: #ccc;
  }
`;

const InputLocation = styled.input`
  width: 100%;
  height: 3rem;
  margin-bottom: 10px;
  border: 1px solid #f5f5f5;
  background-color: #f5f5f5;
  padding: 8px;
  font-size: 1rem;
  border-radius: 5px;
`;
