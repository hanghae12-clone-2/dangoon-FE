import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import PostItem from '../PostItem';

export default function Post({ posts, path, imgSize, children }) {
  return (
    <>
      <PostTitle>{children}</PostTitle>
      <PostList>
        {posts.data.result.map(data => (
          <Li key={uuidv4()}>
            <Link to={`${path}/${data.postid}`}>
              <PostItem post={data} imgSize={imgSize} />
            </Link>
          </Li>
        ))}
      </PostList>
    </>
  );
}

const PostTitle = styled.h1`
  margin: 128px 0;
  font-size: ${props => props.theme.fontSize.large};
`;

const PostList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 1040px;
`;

const Li = styled.li`
  margin-bottom: 80px;
`;
