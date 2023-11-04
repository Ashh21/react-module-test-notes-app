import React, { useState } from 'react'
import { NotesList } from './NotesList'
import uuid from 'react-uuid'
import { UserCard } from './UserCard'
import { useDispatch, useSelector } from 'react-redux'
import { addNotes } from '../../redux/userSlice'
import { closePopUp } from '../../redux/popUpSlice'
import backsvg from '../notes/Vector.svg'
import { Link } from 'react-router-dom'

const MobileNotesSection = () => {
    const [textInput, setTextInput] = useState("")
    const dispatch = useDispatch()
    const { users, selectedUserIndex } = useSelector((store) => store.user)

    const sendNotes = () => {
        if (textInput.trim() !== '') {
            const currentTime = new Date().toLocaleString('en-us', { hour: 'numeric', minute: 'numeric', hour12: true })

            const date = new Date().toLocaleDateString('en-us', {
                day: 'numeric', month: 'long', year: "numeric"
            })

            const newNote = {
                textInput, currentTime, date, id: uuid(), userId: users?.[selectedUserIndex]?.id
            }
            dispatch(addNotes({ note: newNote }))
            setTextInput("")
        }
    }

    const handleSendNotes = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            sendNotes();
        }
    }


    return (
        <div className='notes-section' onClick={() => dispatch(closePopUp())}>
            <div >
                {selectedUserIndex !== -1 &&
                    <div className='notes-user-info'>
                        <Link to='/'>
                            <img
                                style={{
                                    width: ' 1rem',
                                    height: '11.15px',
                                    flexShrink: '0',
                                    fill: '#5C5C5C',
                                    background: 'transparent',
                                    padding: '0 0 0 1rem'
                                }}
                                src={backsvg}
                                alt='icon' />
                        </Link>
                        <UserCard user={users[selectedUserIndex]}
                        />
                    </div>
                }
            </div>

            <div className='notes-container'>
                <NotesList />
            </div>

            <div className='textarea-div'>
                <textarea
                    value={textInput}
                    onKeyUp={handleSendNotes}
                    onChange={(e) => setTextInput(e.target.value)}
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


export { MobileNotesSection }