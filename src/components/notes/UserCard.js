import React from 'react'

const UserCard = ({ user }) => {

    return (
        <div style={{
            display: "flex",
            padding: "1rem",
        }}
        >
            <div className='user-info'
                style={{ backgroundColor: user.selectColor, color: 'white' }}>
                <h1 style={{
                    fontSize: "1.6rem",
                    paddingTop: "0.66rem"
                }}> {user?.groupName?.slice(0, 2)}</h1>
            </div>
            <h1 style={{
                fontSize: "1.7rem",
                padding: "0.5rem"
            }}
            >{user?.groupName} </h1>
        </div>
    )
}

export { UserCard }