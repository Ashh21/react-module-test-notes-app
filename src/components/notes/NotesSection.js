import React, { useState } from 'react'
import { Notes } from './Notes'
import uuid from 'react-uuid'
import { UserCard } from '../user/UserCard'
import { useSelector } from 'react-redux'

const NotesSection = () => {
    const [textInput, setTextInput] = useState("")
    const [showNotes, setShowNotes] = useState([])
    const { users, selectedUserIndex } = useSelector((store) => store.user)

    const sendNotes = () => {
        if (textInput.trim() !== '') {
            const currentTime = new Date().toLocaleString('en-us', { hour: 'numeric', minute: 'numeric', hour12: true })

            const date = new Date().toLocaleString('en-us', {
                day: 'numeric', month: 'long', year: "numeric"
            })

            const newNotes = {
                textInput, currentTime, date, id: uuid()
            }
            setShowNotes([...showNotes, newNotes])
            setTextInput("")
        }
    }


    return (
        <div className='notes-section'>
            <div className='notes-user-info'>
                {selectedUserIndex !== -1 && <UserCard user={users[selectedUserIndex]} index={selectedUserIndex} />}
            </div>

            <div className='notes-container'>
                <Notes showNotes={showNotes} />
            </div>

            <div className='textarea-div'>
                <textarea value={textInput} onChange={(e) => setTextInput(e.target.value)}
                    className='notes-text-area'
                    type='text' placeholder='Enter your text here...........' />
                <button className='notes-btn'
                    onClick={sendNotes}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="29" viewBox="0 0 35 29" fill="none">
                        <path d="M0 29V18.125L14.5 14.5L0 10.875V0L34.4375 14.5L0 29Z" fill="#ABABAB" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export { NotesSection }