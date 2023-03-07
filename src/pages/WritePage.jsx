import React, { useState,useRef } from 'react';
import Axios from '../utils/api/axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
// import { useMutation } from '@tanstack/react-query';
import { getCookie } from '../utils/cookie';
import QUERY from '../constants/query';
import {BsCameraFill} from 'react-icons/bs';
import {AiOutlineLeft} from 'react-icons/ai';
import { Link } from 'react-router-dom';


export default function WritePage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [price, setPrice] = useState('');
  // const [location, setLocation] = useState('');
  const ref =useRef();
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const axios = new Axios('http://13.209.11.12');
  const navigate=useNavigate();

  

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    
    const post = {
      title,
      content,
      price,
      location:ref.current.value
    };
    formData.append(
      'postRequestDto',
      new Blob([JSON.stringify(post)], { type: 'application/json' }),
      );
      formData.append('multipartFiles', image);
      console.log(image);


      try {
        const response = await axios.post('/api/posts', formData, {
           
        });
        console.log(response.data); 
        navigate('/');
      } catch (error) {
        console.error(error);
      }

    };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
    setPreview(URL.createObjectURL(event.target.files[0]));
    console.log(ref.current.value);
  };



  return (

    <Form onSubmit={handleSubmit}>
      <FormBorder>
<FormHeader>
        <FormTitle>
        <Link to="/">
          <AiOutlineLeft/>
          </Link>
        <FormTitleText>중고거래 글쓰기</FormTitleText>
        </FormTitle>
        <FormButton type="submit">완료 </FormButton>
       </FormHeader>
       <LableBorder>
        <Label htmlFor="file-upload"><CameraIcon />
  <Input id="file-upload" type="file" onChange={handleImageChange} />
</Label>
{preview && <img src={preview} alt="preview" />}
       </LableBorder>
      <InputText
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목"
      />
      <TextArea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="  내용"
      />
      <InputText
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="가격"
      />
      <InputLocation
        ref={ref}        
        as="select"
        // value={location}
        // onChange={(e) => setLocation(e.target.value)}
        // placeholder="거래 희망 장소"
      >
        <option value="">거래 희망 장소를 선택해주세요</option>
        <option value="강남구">강남구</option>
        <option value="강동구">강동구</option>
        <option value="강북구">강북구</option>
        <option value="강서구">강서구</option>
        <option value="관악구">관악구</option>
        <option value="광진구">광진구</option>
        <option value="구로구">구로구</option>
        <option value="금천구">금천구</option>
        <option value="노원구">노원구</option>
        <option value="도봉구">도봉구</option>
        <option value="동대문구">동대문구</option>
        <option value="동작구">동작구</option>
        <option value="마포구">마포구</option>
        <option value="서대문구">서대문구</option>
        <option value="서초구">서초구</option>
        <option value="성동구">성동구</option>
        <option value="성북구">성북구</option>
        <option value="송파구">송파구</option>
        <option value="양천구">양천구</option>
        <option value="영등포구">영등포구</option>
        <option value="용산구">용산구</option>
        <option value="은평구">은평구</option>
        <option value="종로구">종로구</option>
        <option value="중구">중구</option>
        <option value="중랑구">중랑구</option>
      </InputLocation>
      </FormBorder>   
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 130px;
  padding: 5px;
`;

const FormBorder=styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #dbdbdb;
  padding: 10px;
  border-radius: 5px;
`;

const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  margin-bottom: 10px;
  margin-top:20px;
  padding: 10px;
  background-color: #fafafa;
  border-radius: 5px;
`;

const LableBorder= styled.div`
  width: 500px;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: #fafafa;
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
  display: inline-block;
  padding: 10px;
  background-color: #fafafa;
  border-radius: 5px;
  color: black;
  cursor: pointer;
  margin-right: 200px;
  margin-bottom: 40px;
  font-size: 16px;
  position:relative;
`;

const CameraIcon = styled(BsCameraFill)`
  font-size: 20px;
`;

const Input=styled.input`
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
  width: 500px;
  height: 30px;
  margin-bottom: 10px;
  border: 1px solid #fafafa;
  background-color: #fafafa;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  ::placeholder {
    color: #ccc;
  }
`;

const TextArea = styled.textarea`
  width: 500px;
  height: 100px;
  margin-bottom: 10px;
  border: 1px solid #fafafa;
  background-color: #fafafa;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  resize:none;
  ::placeholder {
    color: #ccc;
  }
`;

const InputLocation=styled.input`
  width: 500px;
  height: 30px;
  margin-bottom: 10px;
  border: 1px solid #fafafa;
  background-color: #fafafa;
  padding: 8px;
  font-size: 10px;
  border-radius: 5px;
  /* ::placeholder {
    color:black
  } */
`;




