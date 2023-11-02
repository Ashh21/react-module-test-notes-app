import React from 'react'
import { UserSection } from './user/UserSection'
import { CreateUserGroup } from './user/CreateUserGroup'
import { NotesSection } from './notes/NotesSection'

// import { togglePopUp } from '../redux/popUpSlice'

const Body = () => {

    // const style = {
    //     backgroundColor: togglePopUp() && 'red'
    // }

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