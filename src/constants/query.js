const COOKIE = {
  COOKIE_NAME: 'myToken',
  REFRESH_NAME: 'myRefreshToken',
};

const AXIOS_PATH = {
  LOCAL: 'http://localhost:4000',
  HOST: 'http://13.209.11.12',
  MAIN_POST: '/post?_page=1&_limit=8',
  HOT_POST: '/post',
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
