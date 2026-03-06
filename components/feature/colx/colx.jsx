import React from 'react'
import './colx.css'

export default function Colx() {
    const items = [
        {
            id: 1,
            name: "Premium Mechanical Keyboard",
            image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=2070&auto=format&fit=crop",
            description: "Custom keycaps, aluminum frame, and tactile switches for the ultimate coding experience.",
            price: "$149.00",
            seller: "Nishant Nayak"
        },
        {
            id: 2,
            name: "Acoustic Noise-Canceling Headphones",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop",
            description: "Industry-leading noise cancellation for deep focus in any campus environment.",
            price: "$299.00",
            seller: "Priya Singh"
        },
        {
            id: 3,
            name: "Smart Desk Organizer",
            image: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?q=80&w=2070&auto=format&fit=crop",
            description: "Minimalist workspace solution to keep your tech and tools organized and accessible.",
            price: "$45.00",
            seller: "Rahul Sharma"
        }
    ];

    return (
        <div className='grandparent_colx'>
            <div className='parent_colx'>
                <div className='colx_container'>
                    <div className='colx_header'>
                        <h1>Colx Marketplace</h1>
                    </div>

                    <div className="colx_grid">
                        {items.map((item) => (
                            <div className="colx_item_card" key={item.id}>
                                <div className="colx_item_image">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="colx_item_info">
                                    <div className="colx_seller_tag">Sold by {item.seller}</div>
                                    <h2>{item.name}</h2>
                                    <p>{item.description}</p>
                                    <div className="colx_item_footer">
                                        <span className="colx_item_price">{item.price}</span>
                                        <button className="colx_buy_btn">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
