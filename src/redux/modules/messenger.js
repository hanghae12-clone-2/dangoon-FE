const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  messenger: [],
};

const messengerSlice = createSlice({
  name: 'messenger',
  initialState,
  reducers: {
    setMessenger: (state, action) => {
      state.messenger = action.payload;
    },
  },
});
export const { setMessenger } = messengerSlice.actions;
export default messengerSlice.reducer;
