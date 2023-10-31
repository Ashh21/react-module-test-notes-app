import React from 'react'

const SelectColor = ({ onChangeColor }) => {
    const colors = ["#B38BFA", "#FF79F2", "#43E6FC", "#F19576", "#0047FF", "#6691FF"]

    const handleSelectColor = (color) => {
        onChangeColor(color)
    }

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            padding: "1rem"
        }}>
            <h2 style={{
                fontSize: "1rem",
                paddingRight: "1rem",
                fontWeight: "500"
            }}
            >Choose color</h2>
            {
                colors.map(color => (
                    <button className='color-select-btn'
                        style={{ backgroundColor: color }}
                        key={color}
                        onClick={() => handleSelectColor(color)}
                    ></button>
                ))
            }
        </div>
    )
}

export { SelectColor }