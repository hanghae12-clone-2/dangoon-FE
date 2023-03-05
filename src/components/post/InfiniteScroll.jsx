import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import PostItem from '../PostItem';
import PostScrollEnd from '../PostScrollEnd';

export default function InfiniteScroll({
  posts,
  path,
  Ref,
  isFetchingNextPage,
  hasNextPage,
  children,
}) {
  return (
    <>
      <PostTitle>{children}</PostTitle>
      <PostList>
        {posts?.pages.map(post =>
          post.data.result.map(data => (
            <Li key={uuidv4()}>
              <Link to={`${path}/${data.postid}`}>
                <PostItem post={data} />
              </Link>
            </Li>
          ))
        )}
      </PostList>
      {isFetchingNextPage && hasNextPage ? (
        ''
      ) : (
        <LastPage ref={Ref}>
          <PostScrollEnd />
        </LastPage>
      )}
    </>
  );
}

const PostTitle = styled.h1`
  margin: 8rem 0;
  font-size: ${props => props.theme.fontSize.large};
`;

const PostList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 65rem;
`;

const Li = styled.li`
  margin-bottom: 5rem;
`;

const LastPage = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;
