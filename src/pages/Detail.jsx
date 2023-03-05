import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Post from '../components/post/Post';
import PostDetailContent from '../components/PostDetailContent';
import PostDetailImg from '../components/PostDetailImg';
import QUERY from '../constants/query';
import ROUTER from '../constants/router';
import useGetQuery from '../hooks/useGetQuery';

const img = [
  'https://dnvefa72aowie.cloudfront.net/origin/article/202303/69cf19b2c2eb5e55fa5d041bf0f87fcb71c1c9763e8f6bcef92a71d5d96a6022.webp?q=95&s=1440x1440&t=inside',
  'https://dnvefa72aowie.cloudfront.net/origin/article/202303/913f839531b16c5dc455d96c3f3b686181fd30c589bc8b717331ded7f0a83b59.webp?q=95&s=1440x1440&t=inside',
  'https://dnvefa72aowie.cloudfront.net/origin/article/202303/00b1266453f6c8766a2d90b469e19b8578d98a7b1816c071bda01960f24b2b90.webp?q=95&s=1440x1440&t=inside',
  'https://dnvefa72aowie.cloudfront.net/origin/article/202303/913f839531b16c5dc455d96c3f3b686181fd30c589bc8b717331ded7f0a83b59.webp?q=95&s=1440x1440&t=inside',
];

export default function Detail() {
  const { postId } = useParams();

  const {
    isLoading,
    isError,
    data: postDetail,
  } = useGetQuery(
    [QUERY.KEY.POSTS, { postId }],
    QUERY.AXIOS_PATH.SEVER,
    QUERY.AXIOS_PATH.DETAIL(postId)
  );

  const {
    isLoading: isHotLoding,
    isError: isHotError,
    data: postHot,
  } = useGetQuery(
    [QUERY.KEY.POSTS],
    QUERY.AXIOS_PATH.SEVER,
    QUERY.AXIOS_PATH.MAIN_POST
  );

  return (
    <>
      {isLoading && isHotLoding && <p>로딩중</p>}
      {isError && isHotError && <p>에러</p>}
      {postDetail && postHot && (
        <DetailWrapper>
          <PostDetailImg img={img} />
          <PostDetailContent detail={postDetail.data.result} />
          <PostContainer>
            <Post posts={postHot} path={ROUTER.PATH.DETAIL} />
          </PostContainer>
          <Footer />
        </DetailWrapper>
      )}
    </>
  );
}

const DetailWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;

const PostContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
