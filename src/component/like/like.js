import React from 'react'

import like from './like.png'

import cssobj from './like.css'

export default function Like() {
    return (
        <div>
            <img src={like} alt="like" className="like-img"/>
        </div>
    )
}