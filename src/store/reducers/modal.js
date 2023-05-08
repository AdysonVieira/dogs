import { createSlice } from "@reduxjs/toolkit";


const modal = createSlice({
  name: 'modal',
  initialState: {
    isOpened: false,
  },
  reducers: {
    openModal(state) {
      state.isOpened = true;
    },

    closeModal(state) {
      state.isOpened = false;
    },
  },
});

export const { openModal, closeModal } = modal.actions;

export default modal.reducer;