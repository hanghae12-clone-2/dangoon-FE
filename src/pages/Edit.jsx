import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import Axios from '../api/axios';
import ROUTER from '../constants/router';
import WritePost from '../components/WritePost';
import QUERY from '../constants/query';

const axios = new Axios('http://13.209.11.12');

export default function Edit() {
  const navigate = useNavigate();
  const query = useQueryClient();
  const {
    state: { detail },
  } = useLocation();

  const handleAxiosCallback = formData => {
    axios.put(QUERY.AXIOS_PATH.DETAIL(detail.postid), formData, {}).then(() => {
      query.invalidateQueries(['posts', { postId: detail.postid }]);
      navigate(ROUTER.PATH.BACK);
    });
  };

  return (
    <WritePost axiosFn={handleAxiosCallback} detail={detail}>
      내 게시글 작성하기
    </WritePost>
  );
}
