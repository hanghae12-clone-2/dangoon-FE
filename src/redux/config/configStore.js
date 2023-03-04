import { configureStore } from '@reduxjs/toolkit';
import getEx from '../modules/getEx';

const store = configureStore({
  reducer: {
    getEx,
  },
});

export default store;
