import WritePost from '../components/WritePost';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import Axios from '../api/axios';
import ROUTER from '../constants/router';

const axios = new Axios('http://13.209.11.12');

export default function Write() {
  const navigate = useNavigate();
  const query = useQueryClient();

  const handleAxiosCallback = formData => {
    axios.post('/api/posts', formData, {}).then(() => {
      query.invalidateQueries(['mypost']);
      navigate(ROUTER.PATH.MY);
    });
  };

  return <WritePost axiosFn={handleAxiosCallback}>중고거래 작성하기</WritePost>;
}
