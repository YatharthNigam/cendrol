import React from 'react'
import B from '../B/B'
import { useState } from 'react'
import './styles.css'

const A = () => {
    const [cendrol, setCendrol] = useState(2)

    return (
        <div className='Adiv'>
            <B cendrol={cendrol} setCendrol={setCendrol}></B>
        </div>
    )
}

export default A