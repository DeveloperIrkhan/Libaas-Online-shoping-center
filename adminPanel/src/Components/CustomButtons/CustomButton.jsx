import React from 'react'

const CustomButton = ({ className, onClickFun, text }) => {
    return (
        <button
            onClick={onClickFun}
            className={`${className}`}>
            {text}
        </button>
    )
}

export default CustomButton