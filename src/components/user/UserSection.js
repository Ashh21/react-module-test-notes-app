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
            <h1 style={{
                fontSize: "1.8rem",
                paddingLeft: "1rem",
            }}>Pocket Notes</h1>
            <div className='user-div'>
                <button className='user-create-btn' onClick={toggleHandler}> + Create Notes group</button>
            </div>
            <div className='user-notes-div'  >
                <UsersList />
            </div>
        </div >
    )
}

export { UserSection }