import React from 'react'
import { Link } from 'react-router-dom'

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

export default function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link to='/' style={{ color: 'white' }}> Home</Link> | <Link to='/about' style={{ color: 'white' }}>About </Link>
        </header>
    )
}
