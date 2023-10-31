import React from 'react'
import { useDispatch } from 'react-redux'
import { togglePopUp } from '../redux/PopUpSlice'
import { UserCard } from './UserCard'

const UserSection = () => {
    const dispatch = useDispatch()

    const toggleHandler = () => {
        dispatch(togglePopUp())
    }
    return (
        <div>
            <h1>Pocket Notes</h1>
            <div>
                <button onClick={toggleHandler}> + Create Notes group</button>
            </div>
            <UserCard />
        </div>
    )
}

export { UserSection }