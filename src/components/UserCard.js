import React from 'react'
import { useSelector } from 'react-redux'

const UserCard = () => {
    const userInfo = useSelector((store) => store.user.users)
    console.log(userInfo)
    return (
        <div>
            {
                userInfo.map((u) => (
                    <div style={{
                        display: "flex",
                        padding: "1rem",
                    }}
                        key={u.id}
                    // id={u.id}
                    // onClick={() => setSelected(u.id)}
                    >
                        <div className='user-info' style={{ backgroundColor: u.selectColor }}>
                            <h1 style={{
                                fontSize: "1.5rem", paddingTop: "0.5rem"
                            }}> {u?.groupName?.slice(0,2)}</h1>
                        </div>
                        <h1 style={{
                            fontSize: "1.25rem",
                            padding: "0.5rem"
                        }}
                        >{u.groupName} </h1>
                    </div>
                ))
            }
        </div>
    )
}

export { UserCard }