import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import PostItem from '../PostItem';

export default function Post({ posts, path, imgRegular, children }) {
  console.log(posts);
  return (
    <>
      {children}
      <PostList>
        {posts.data.result.map(data => (
          <Li key={uuidv4()}>
            <Link to={`${path}/${data.postid}`}>
              <PostItem post={data} imgRegular={imgRegular} />
            </Link>
          </Li>
        ))}
      </PostList>
    </>
  );
}

const PostList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 1040px;
`;

const Li = styled.li`
  margin-bottom: 80px;
`;
