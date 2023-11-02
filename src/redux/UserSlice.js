import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        selectedUserIndex: -1,
        notes: [],
    },
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload)
        },

        setSelectedUserIndex: (state, action) => {
            state.selectedUserIndex = action.payload.index
        },

        addNotes: (state, action) => {
            state.notes.push(action.payload)
        }
    }

})

export const { addUser, setSelectedUserIndex, addNotes } = userSlice.actions;

export default userSlice.reducer