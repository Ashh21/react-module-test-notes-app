import React, { } from 'react'
import { useSelector } from 'react-redux'
import { NotesCard } from './NotesCard'

const NotesList = () => {
    const { users, notes, selectedUserIndex } = useSelector((store) => store?.user)

    function getUserNotes() {
        return notes.filter(note => note.userId === users?.[selectedUserIndex]?.id)
    }
    const userNotes = getUserNotes();
    return (
        < >
            {
                userNotes.map(note => (
                    <NotesCard key={note?.id}
                        id={note?.id} note={note} />
                ))
            }
        </>
    )
}

export { NotesList }