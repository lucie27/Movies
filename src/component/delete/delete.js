import React from 'react'

import delet from './delete.png'

import cssobj from './delete.css'

export default function Delete() {
    return (
        <div>
            <img src={delet} alt="delete" className="delete-img"/>
        </div>
    )
}