import React from 'react'
import "./connection.css"

export default function connection() {
    return (
        <div className='grandparent_connection'>
            <div className='parent_connection'>
                <div className='grandpparent_connection_content'>
                    <div className='parent_connection_content'>
                        <div className='connection_header'> <h1>Connect with Your Own People to Build for Global</h1></div>
                        <div className='connection_card_parent'>
                            <div className='card_connection'>
                                <div className='card_image'></div>
                                <div className='card_description'>
                                    <h2>Snappy</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, laboriosam?</p>
                                    <div className='card_connection_buttons'>
                                        <button>Connect with us</button>
                                        <button>Join us</button>
                                    </div>
                                </div>
                            </div>
                            <div className='card_connection'>
                                <div className='card_image'></div>
                                <div className='card_description'>
                                    <h2>Snappy</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, laboriosam?</p>
                                    <div className='card_connection_buttons'>
                                        <button>Connect with us</button>
                                        <button>Join us</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
