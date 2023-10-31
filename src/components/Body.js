import React from 'react'
import { UserSection } from './UserSection'
import { CreateUserGroup } from './CreateUserGroup'

const Body = () => {
    return (
        <div>
            <UserSection />
            <div className='pop-up'>
                <CreateUserGroup />
            </div>
        </div>
    )
}

export { Body }