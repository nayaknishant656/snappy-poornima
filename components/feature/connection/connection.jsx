import React from 'react'
import "./connection.css"
import Link from 'next/link'
export default function connection() {
    return (
        <div className='grandparent_connection'>
            <div className='parent_connection'>
                <div className='grandpparent_connection_content'>
                    <div className='parent_connection_content'>
                        <div className='connection_header'> <h1>Connect with Your Own People to Build for Global</h1></div>
                        <div className='connection_card_parent'>
                            {[
                                {
                                    slug: 'tech-innovators',
                                    title: 'Tech Innovators',
                                    img: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop',
                                    desc: 'Collaborate with top full-stack engineers and architecture experts.'
                                },
                                {
                                    slug: 'creative-minds',
                                    title: 'Creative Minds',
                                    img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop',
                                    desc: 'For digital designers, UI/UX masters, and multimedia enthusiasts.'
                                },
                                {
                                    slug: 'management-hubs',
                                    title: 'Management Hub',
                                    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
                                    desc: 'Network with product managers, strategy thinkers and MBA grads.'
                                }
                            ].map((card, index) => (
                                <div className='card_connection' key={index}>
                                    <div className='card_image'>
                                        <img src={card.img} alt={card.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <div className='card_description'>
                                        <h2>{card.title}</h2>
                                        <p>{card.desc}</p>
                                        <div className='card_connection_buttons'>
                                            <Link href={`/connection/connectionpage/${card.slug}`}>Connect with us</Link>
                                            <button>Join us</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
