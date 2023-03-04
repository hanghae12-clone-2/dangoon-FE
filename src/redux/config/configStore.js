import { configureStore } from '@reduxjs/toolkit';
import getEx from '../modules/getEx';
import loginSlice from '../modules/loginSlice';

const store = configureStore({
  reducer: {
    getEx:getEx,
    login: loginSlice
  },
});

export default store;
