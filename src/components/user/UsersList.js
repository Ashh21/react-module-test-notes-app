import React from 'react'
import { UserCard } from './UserCard'
import { useSelector } from 'react-redux'


const UsersList = () => {
    const userInfo = useSelector((store) => store.user.users)

    // const style = { backgroundColor: selected === '0' && '#F7ECDC' }

    console.log(userInfo)
    return (
        < >
            {
                userInfo?.map((user, index) => (
                    <UserCard key={user.id} 
                        id={user.id} user={user} index={index} />
                ))
            }
        </>
    )
}

export { UsersList }