import React from 'react'

const Notes = ({ showNotes }) => {

    return (
        < >
            {
                showNotes.map(note => (
                    <div className='notes-div'
                        key={note.id}
                        id={note.id}
                    >
                        <div className='notes-time'>
                            <span>{note.currentTime}</span>
                            <span>{note.date}</span>
                        </div>

                        <div className='notes-content'>
                            {note.textInput}
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export { Notes }