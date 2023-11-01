import React from 'react'
import { useDispatch } from 'react-redux'
import { setSelectedUserIndex } from '../../redux/userSlice'

const UserCard = ({ user, index }) => {
    const dispatch = useDispatch()

    const selectHandler = (index) => {
        dispatch(setSelectedUserIndex({ index }))
    }

    return (
        <div style={{
            display: "flex",
            padding: "1rem",
        }}
            key={user.id}
            id={user.id}
            onClick={() => selectHandler(index)}
        >
            <div className='user-info' style={{ backgroundColor: user.selectColor }}>
                <h1 style={{
                    fontSize: "1.5rem",
                    padding: "0.5rem"
                }}> {user?.groupName?.slice(0, 2)}</h1>
            </div>
            <h1 style={{
                fontSize: "1.25rem",
                padding: "0.5rem"
            }}
            >{user.groupName} </h1>
        </div>
    )
}

export { UserCard }