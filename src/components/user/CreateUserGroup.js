import React, { useState } from 'react'
import { SelectColor } from './SelectColor'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../../redux/userSlice'
import { closePopUp } from '../../redux/popUpSlice'
import uuid from 'react-uuid'


const CreateUserGroup = () => {
    const [selectColor, setSelectColor] = useState("")
    const [groupName, setGroupName] = useState("")
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const isOpen = useSelector((store) => store.app.isOpen)

    const handleSelectColor = (color) => {
        setSelectColor(color)
    }

    if (!isOpen) return null;

    const createHandler = () => {
        const newErrors = {}

        if (groupName.length === 0) {
            newErrors.groupName = "Please enter group name"
        }

        if (selectColor.length === 0) {
            newErrors.selectColor = "Please choose a color"
        }

        if (Object.keys(newErrors).length === 0) {
            dispatch(addUser({ groupName, selectColor, id: uuid() }))
            dispatch(closePopUp())
            setGroupName("")
            setError("")
        }

        else {
            setError(newErrors)
        }
    }

    return (
        <div className='create-group-div'>
            <h1 style={{
                padding: "1rem ",
                fontSize: "1.2rem",
                fontWeight: "500"
            }} > Create New Notes group </h1>
            <form onSubmit={(e) => e.preventDefault()}
                style={{
                    display: "flex",
                    padding: "0 1rem"
                }}>
                <label style={{
                    fontSize: "1rem",
                    fontWeight: "500",
                    textAlign: "center",
                    padding: "0.5rem 0.5rem 0 0"
                }}>Group Name</label>
                <input className='create-group-input ' value={groupName} onChange={(e) => setGroupName(e.target.value)}
                    type='text' placeholder='Enter your group name....' />
            </form>

            <SelectColor onChangeColor={handleSelectColor} />

            <div style={{
                display: "flex",
                flexDirection: "column"
            }}>
                <span style={{
                    color: "black",
                    padding: "0.2rem 1rem 0",
                    fontSize: "0.6rem"
                }}>{error.groupName}
                </span>

                <span style={{
                    color: "black",
                    padding: "0.2rem 1rem 0",
                    fontSize: "0.6rem"
                }}> {error.selectColor}
                </span>
            </div>

            <div className='create-btn-div'>
                <button className='create-btn'
                    onClick={createHandler}>Create</button>
            </div>
        </div>

    )
}

export { CreateUserGroup }