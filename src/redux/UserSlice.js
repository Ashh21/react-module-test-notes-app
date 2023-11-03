import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: JSON.parse(localStorage.getItem("users"))||[],
        selectedUserIndex: -1,
        notes: JSON.parse(localStorage.getItem("notes")) || [],
    },
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload.user)
            localStorage.setItem('users', JSON.stringify(state.users))

        },

        setSelectedUserIndex: (state, action) => {
            state.selectedUserIndex = action.payload.index
        },

        addNotes: (state, action) => {
            state.notes.push(action.payload.note)
            localStorage.setItem('notes', JSON.stringify(state.notes))
        }
    }

})

export const { addUser, setSelectedUserIndex, addNotes } = userSlice.actions;

export default userSlice.reducer