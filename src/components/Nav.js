import React from 'react'
import {Link} from 'react-router-dom'
import './App.css'

export default function Nav() {
    return (
        <div className="header">
        <ul>
            <li>
            <Link to="/">Me</Link>
            </li>
            <li>
            <Link to="/hobbies">Hobbies</Link>
            </li>
            <li>
            <Link to="/contact">Contact</Link>
            </li>
        </ul>
        </div>
    )
}
