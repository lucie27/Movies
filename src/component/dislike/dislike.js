import React from 'react'

import dislike from './dislike.png'

import cssobj from './dislike.css'

export default function Dislike() {
    return (
        <div>
            <img src={dislike} alt="dislike" className="dislike-img"/>
        </div>
    )
}