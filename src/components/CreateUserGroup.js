import React, { useState } from 'react'
import { SelectColor } from './SelectColor'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../redux/UserSlice'
import { closePopUp } from '../redux/PopUpSlice'

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
            dispatch(addUser({ groupName, selectColor }))
            dispatch(closePopUp())
            setGroupName("")
            // setSelectColor("")
        }

        else {
            setError(newErrors)
        }
    }

    return (
        <div>
            <div className='create-group-div'>
                <h1 style={{
                    padding: "0.5rem 1.5rem",
                    fontSize: "1.9rem",
                    fontWeight: "500"
                }} > Create New Notes group </h1>
                <form onSubmit={(e) => e.preventDefault()}
                    style={{
                        display: "flex",
                        padding: "1rem 0"
                    }}>
                    <label style={{
                        padding: "0.5rem 2.4rem",
                        fontSize: "1.9rem", fontWeight: "500",
                        textAlign: "center"
                    }}>Group Name</label>
                    <input className='create-group-input ' value={groupName} onChange={(e) => setGroupName(e.target.value)}
                        type='text' placeholder='Enter your group name....' />
                </form>
                <div style={{
                    display: "flex",
                    padding: "0.5rem 1.5rem",
                    alignItems: "center"
                }}>
                    <SelectColor onChangeColor={handleSelectColor} />
                </div>
                <span style={{ color: "black", padding: "0 1rem" }}>{error.groupName} {error.selectColor}
                </span>
                <div style={{ position: 'absolute', right: "1.5rem" }}>
                    <button className='create-btn'
                        onClick={createHandler}>Create</button>
                </div>
            </div>
        </div>
    )
}

export { CreateUserGroup }