const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  messenger: [],
  isLoading: false,
  isError: false,
  error: null,
};

const messengerSlice = createSlice({
  name: 'messenger',
  initialState,
  reducers: {
    setEx: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.messenger = action.payload;
    },
  },
});
export const { setEx } = messengerSlice.actions;
export default messengerSlice.reducer;
