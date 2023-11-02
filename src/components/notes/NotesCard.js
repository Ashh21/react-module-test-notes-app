import React, { } from 'react'
import { useSelector } from 'react-redux'
import { NotesList } from './NotesList'

const NotesCard = () => {
    const notes = useSelector((store) => store?.user?.notes)

    return (
        < >
            {
                notes.map(note => (
                    <NotesList key={note?.id}
                        id={note?.id} note={note} />
                ))
            }
        </>
    )
}

export { NotesCard }