const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  getEx: [],
  isLoading: false,
  isError: false,
  error: null,
};

const getExSlice = createSlice({
  name: 'getEx',
  initialState,
  reducers: {
    setEx: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.getHome = action.payload;
    },
  },
});
export const { setEx } = getExSlice.actions;
export default getExSlice.reducer;
