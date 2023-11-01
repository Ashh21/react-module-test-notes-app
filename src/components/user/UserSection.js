import React from 'react'
import { useDispatch } from 'react-redux'
import { togglePopUp } from '../../redux/popUpSlice'
import { UsersList } from './UsersList'

const UserSection = () => {
    const dispatch = useDispatch()

    const toggleHandler = () => {
        dispatch(togglePopUp())
    }

    return (
        <div className='user'>
            <h1>Pocket Notes</h1>
            <div className='user-div'>
                <button className='user-create-btn' onClick={toggleHandler}> + Create Notes group</button>
            </div>
            <div className='user-notes-div'>
                <UsersList />
            </div>
        </div>
    )
}

export { UserSection }