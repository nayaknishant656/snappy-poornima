import React from 'react'
import './leaderboard.css'

export default function leaderboard() {
    return (
        <div className='grandparent_leaderboard'>
            <div className='parent_leaderboard'>
                <div className='grandpparent_leaderboard_content'>
                    <div className='parent_leaderboard_content'>
                        <div className='leaderboard_header'>
                            <h1>THis is the LEADERBOARD</h1>
                        </div>
                        <div className='leaderboard_content_parent'>
                            {/* Leaderboard content goes here */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
