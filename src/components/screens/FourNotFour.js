import React from 'react'
import { Link } from 'react-router-dom'

function FourNotFour() {
    return (
        <div className='fournotfour'>
            <h1>404 Page Not found!!!</h1>
            <h2>Back to <Link to="/">Home</Link></h2>
        </div>
    )
}

export default FourNotFour