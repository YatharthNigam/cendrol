import React from 'react'
import './styles.css'
import { useState } from 'react'

const B = (props) => {
    const [color, setColor] = useState("#FCC200")

    const handleClick = () => {
        let colors = ['red', 'green', 'blue', '#FCC200', 'pink', 'orange', 'purple'];
        let randomIndex = Math.floor(Math.random() * colors.length);
        let randomColor = colors[randomIndex];
        setColor(randomColor);
        props.setCendrol(props.cendrol + 10);
    }

    return (
        <div class="container">
            <div class="square">
                <div style={{ backgroundColor: color }} class="circle">
                    <h2>{props.cendrol}</h2>
                    <button className='btn' onClick={() => { handleClick() }}>Click to increase counter</button>
                </div>
            </div>
        </div>
    )
}

export default B