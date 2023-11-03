import React from 'react'
import { UserSection } from './components/user/UserSection'
import { CreateUserGroup } from './components/user/CreateUserGroup'
import { NotesSection } from './components/notes/NotesSection'

const Body = () => {

    return (
        <div className='body'  >
            <UserSection />
            <NotesSection />
            <div className='pop-up'>
                <CreateUserGroup />
            </div>
        </div>
    )
}

export { Body }