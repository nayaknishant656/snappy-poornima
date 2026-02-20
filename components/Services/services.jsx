import React from 'react'
import { Plug, Unplug } from 'lucide-react'
import './services.css'

export default function Services() {
    return (
        <div className="grandparent_services">
            <div className='parent_services'>
                <div className='parent_services_card'>
                    <div className='services_card'>
                        <div className='services_card_content'>
                            <div className="services_card_icon_group">
                                <div className="services_card_icon">
                                    <Plug size={24} color="#2563eb" />
                                </div>
                                <div className="services_card_icon icon_alt">
                                    <Unplug size={24} color="#6b7280" />
                                </div>
                            </div>
                            <h2 className='services_card_title'>Seamless Integration</h2>
                            <p className='services_card_description'>
                                Effortlessly connect or disconnect your services with our intuitive "Plug & Play" architecture designed for maximum flexibility.
                            </p>
                            <button className="services_card_button">Get Started</button>
                        </div>
                    </div>
                    <div className='services_card'>
                        <div className='services_card_content'>
                            <div className="services_card_icon_group">
                                <div className="services_card_icon">
                                    <Plug size={24} color="#2563eb" />
                                </div>
                                <div className="services_card_icon icon_alt">
                                    <Unplug size={24} color="#6b7280" />
                                </div>
                            </div>
                            <h2 className='services_card_title'>Seamless Integration</h2>
                            <p className='services_card_description'>
                                Effortlessly connect or disconnect your services with our intuitive "Plug & Play" architecture designed for maximum flexibility.
                            </p>
                            <button className="services_card_button">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
