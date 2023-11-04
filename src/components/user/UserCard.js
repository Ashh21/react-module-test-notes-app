import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedUserIndex } from '../../redux/userSlice'
import { useNavigate } from 'react-router-dom';

const UserCard = ({ user, index }) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const selected = useSelector((store) => store.user.selectedUserIndex)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const selectHandler = (index) => {
        if (screenWidth > 600) {
            dispatch(setSelectedUserIndex({ index }))
        } else {
            dispatch(setSelectedUserIndex({ index }))
            navigate('/noteSection')
        }
    }

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div style={{
            display: "flex",
            padding: "1rem",
        }} className={index === selected ? 'user-bg' : 'user-mob'}
            onClick={() => selectHandler(index)}
        >
            <div className='user-info'
                style={{ backgroundColor: user.selectColor, color: 'white' }}>
                <h1 style={{
                    fontSize: "1.6rem",
                    paddingTop: "0.66rem"
                }}> {user?.groupName?.slice(0, 2)}</h1>
            </div>
            <h1 style={{
                fontSize: "1.7rem",
                padding: "0.5rem"
            }}
            >{user?.groupName} </h1>
        </div>
    )
}

export { UserCard }