import React from 'react';
import {Link} from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <h1 className='text'>Notes App</h1>
            <ul className="nav-menu">
                <Link to="/" className="nav-link">
                    <li>Home</li>
                </Link>
                <Link to="/login" className="nav-link">
                    <li>Login</li>
                </Link>
            </ul>
            <AccountCircleIcon fontSize='large' color='white'/>
        </div>
    )
}

export default Header