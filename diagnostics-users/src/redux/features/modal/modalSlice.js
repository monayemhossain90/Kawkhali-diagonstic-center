import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    bookingModalOpen: false,
}

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        SetBookingModalOpen:(state,action)=>{
            state.bookingModalOpen=action.payload
        },
    }

})


export const {SetBookingModalOpen} = modalSlice.actions;

const modalSliceReducer = modalSlice.reducer;
export default modalSliceReducer;