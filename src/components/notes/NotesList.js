import React from 'react'

const NotesList = ({ note }) => {
    return (
        <div className='notes-div'
        >
            <div className='notes-time'>
                <span>{note?.currentTime}</span>
                <span >{note?.date}</span>
            </div>

            <div className='notes-content'>
                {note?.textInput}
            </div>
        </div>
    )
}

export { NotesList }