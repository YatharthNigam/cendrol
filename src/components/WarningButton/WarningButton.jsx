import React from 'react'
import { useState } from 'react';
import './WarningButton.css'

const WarningButton = () => {

    const [btnColor, setBtnColor] = useState(true);

    return (
        <button className="warningBtn" onClick={() => { setBtnColor(!btnColor) }} style={{ backgroundColor: btnColor ? "#70B5F9" : "#FA6B84" }}>
            Change Color
        </button>
    )
}

export default WarningButton