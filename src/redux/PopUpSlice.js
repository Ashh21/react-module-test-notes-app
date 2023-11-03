import { createSlice } from "@reduxjs/toolkit";


const popUpSlice = createSlice({
    name: 'popUp',
    initialState: {
        isOpen: false,
    },
    reducers: {
        togglePopUp: (state) => {
            state.isOpen = !state.isOpen;
        },
        closePopUp: (state) => {
            state.isOpen = false;
        }
    }
})

export const { togglePopUp, closePopUp } = popUpSlice.actions

export default popUpSlice.reducer;