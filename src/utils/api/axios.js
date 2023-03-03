import axios from 'axios';
import QUERY from '../../constants/query';
import { getCookie, setCookie } from '../cookie';
import jwt_decode from 'jwt-decode';
import Storage from '../localStorage';

export default class Axios {
  constructor(url) {
    this.instance = axios.create({
      baseURL: url,
    });

    this.instance.interceptors.response.use(
      response => {
        const token = response.headers.authorization;
        const refreshToken = response.headers.refreshtoken;

        if (token) {
          const [, parseToken] = token.split(' ');
          setCookie(QUERY.COOKIE.COOKIE_NAME, parseToken);

          const userName = jwt_decode(parseToken);
          Storage.setUserName(userName.sub);
        }

        if (refreshToken) {
          const [, parseToken] = token.split(' ');
          setCookie(QUERY.COOKIE.REFRESH_NAME, parseToken);
        }

        return response;
      },

      error => {
        const errorMessage = error.response.data.errorMessage;
        if (errorMessage === 'Token Error') {
        } else {
          alert(errorMessage);
        }

        return Promise.reject(error);
      }
    );
  }

  async get(path) {
    const cookie = getCookie();
    const option = {
      headers: {
        Authorization: `Bearer ${cookie ? cookie : ''}`,
      },
    };
    return this.instance.get(path, option);
  }

  async post(path, payload) {
    const cookie = getCookie();
    const option = {
      headers: {
        Authorization: `Bearer ${cookie ? cookie : ''}`,
      },
    };
    return this.instance.post(path, payload, option);
  }

  async delete(path) {
    const cookie = getCookie();
    const option = {
      headers: {
        Authorization: `Bearer ${cookie ? cookie : ''}`,
      },
    };
    return this.instance.delete(`${path}`, option);
  }

  async put(path, payload) {
    const cookie = getCookie();
    const option = {
      headers: {
        Authorization: `Bearer ${cookie ? cookie : ''}`,
      },
    };
    return this.instance.put(`${path}`, payload, option);
  }
}
