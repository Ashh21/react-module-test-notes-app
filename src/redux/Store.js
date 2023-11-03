import { configureStore } from "@reduxjs/toolkit";
import PopUpSlice from "./popUpSlice";
import UserSlice from "./userSlice";

const store = configureStore({
    reducer: {
        popUp: PopUpSlice,
        user: UserSlice,
    }
})

export default store;