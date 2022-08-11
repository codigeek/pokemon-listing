import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    showingGeneralModal: false,
    messageGeneralModal: ''
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        modalShowingGeneralModal(state, action) {
            state.showingGeneralModal = action.payload;
        },
        modalChangeNewMessage(state, action) {
            state.messageGeneralModal = action.payload;
        },
    },
});
export const { modalShowingGeneralModal, modalChangeNewMessage } = modalSlice.actions;
const modalReducer = modalSlice.reducer;

export default modalReducer;
