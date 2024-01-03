import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <header>
            <Link to={'/'}>About</Link>
            <Link to={'/instruction'}>Instruction</Link>
            <Link to={'/review'}>Review</Link>
        </header>
    )
}

export default Header