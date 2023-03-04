const COOKIE = {
  COOKIE_NAME: 'myToken',
  REFRESH_NAME: 'myRefreshToken',
};

const AXIOS_PATH = {
  LOCAL: 'http://localhost:4000',
  SEVER: 'http://13.209.11.12',
  LOGIN: '/api/users/login',
  MAIN_POST: '/api/posts?page=1&size=8',
  HOT_POST(pageNum) {
    return `/api/posts?page=${pageNum}&size=16`;
  },
  DETAIL(postId) {
    return `/api/posts/${postId}`;
  },
  SERCH(pageNum, keyWord) {
    return `/api/search/posts?page=${pageNum}&size=10&sortBy=wishCount&keyword=${keyWord}`;
  },
};

const STALETIME = {
  FIVE_MIN: 5 * 60 * 1000,
};

const KEY = {
  POSTS: 'posts',
};

const QUERY = {
  AXIOS_PATH,
  COOKIE,
  STALETIME,
  KEY,
};

export default QUERY;
