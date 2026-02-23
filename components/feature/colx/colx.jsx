import React from 'react'
import './colx.css'

export default function Colx() {
    return (
        <div className='grandparent_colx'>
            <div className='parent_colx'>
                <div className='grandpparent_colx_content'>
                    <div className='parent_colx_content'>
                        <div className='colx_header'>
                            <h1>Colx</h1>
                        </div>
                        <div className='colx_content_parent'>
                            {/* Colx content will go here */}
                            <p>Premium collaboration experiences.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
