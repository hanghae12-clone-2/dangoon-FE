const COOKIE = {
  COOKIE_NAME: 'myToken',
  REFRESH_NAME: 'myRefreshToken',
};

const AXIOS_PATH = {
  LOCAL: 'http://localhost:4000',
  SEVER: 'http://13.209.11.12',
  MAIN_POST: '/api/posts?page=1&size=8',
  HOT_POST(pageNum) {
    return `/api/posts?page=${pageNum}&size=16`;
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
