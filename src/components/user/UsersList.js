import React from 'react'
import { UserCard } from './UserCard'
import { useSelector } from 'react-redux'


const UsersList = () => {
    const userInfo = useSelector((store) => store.user.users)

    return (
        <div>
            {
                userInfo.map((user, index) => (
                    <UserCard key={user.id}
                        id={user.id} user={user} index={index} />
                ))
            }
        </div>
    )
}

export { UsersList }