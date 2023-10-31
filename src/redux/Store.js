import { configureStore } from "@reduxjs/toolkit";
import PopUpSlice from "./PopUpSlice";
import UserSlice from "./UserSlice";

const store = configureStore({
    reducer: {
        app: PopUpSlice,
        user: UserSlice,
    }
})

export default store;