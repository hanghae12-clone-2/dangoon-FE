import { configureStore } from '@reduxjs/toolkit';
import messenger from '../modules/messenger';

const store = configureStore({
  reducer: {
    messenger,
  },
});

export default store;
