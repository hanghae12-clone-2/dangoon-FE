import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import ROUTER from '../constants/router';
import PostItem from './PostItem';

export default function PostDetailHot({ detailHot }) {
  console.log(detailHot);
  return (
    <PostList>
      {detailHot.map(data => (
        <Li key={uuidv4()}>
          <Link to={`${ROUTER.PATH.DETAIL}/${data.postid}`}>
            <PostItem post={data} />
          </Link>
        </Li>
      ))}
    </PostList>
  );
}

const PostList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 65rem;
`;

const Li = styled.li`
  margin-bottom: 5rem;
`;
