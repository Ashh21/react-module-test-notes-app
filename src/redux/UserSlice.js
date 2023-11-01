import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        selectedUserIndex: -1,
    },
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload)
        },

        setSelectedUserIndex: (state, action) => {
            state.selectedUserIndex = action.payload.index
        }
    }

})

export const { addUser, setSelectedUserIndex } = userSlice.actions;

export default userSlice.reducer