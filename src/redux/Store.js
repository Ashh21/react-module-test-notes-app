import { configureStore } from "@reduxjs/toolkit";
import PopUpSlice from "./popUpSlice";
import UserSlice from "./userSlice";

const store = configureStore({
    reducer: {
        app: PopUpSlice,
        user: UserSlice,
    }
})

export default store;