import React from 'react'
import { UserSection } from './user/UserSection'
import { CreateUserGroup } from './user/CreateUserGroup'
import { NotesSection } from './notes/NotesSection'

const Body = () => {

    return (
        <div className='body' >
            <UserSection />
            <NotesSection />
            <div className='pop-up'>
                <CreateUserGroup />
            </div>
        </div>
    )
}

export { Body }