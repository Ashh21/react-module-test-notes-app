import React from 'react'
import { useSelector } from 'react-redux'

const UserCard = () => {
    const userInfo = useSelector((store) => store.user.users)

    return (
        <div>
            {
                userInfo.map((user) => (
                    <div style={{
                        display: "flex",
                        padding: "1rem",
                    }}
                        key={user.id}
                        id={user.id}
                    // onClick={() => setSelected(user.id)}
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
                ))
            }
        </div>
    )
}

export { UserCard }