import React from 'react'

export const Homepage = () => {
    return (
        <div style={{position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            border: '3px solid white',
            boxShadow: '5px 10px #888888',
            padding: '10px'
            }}>
            <h1 style={{marginTop:'5px'}}>Welcome to Expenso!</h1>
            <h2>The best way to track your expenses and settle your payments.</h2>
        </div>
      
    )
}