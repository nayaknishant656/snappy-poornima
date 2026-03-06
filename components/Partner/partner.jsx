import React from 'react'
import './partner.css'
import { Marquee } from "@/registry/magicui/marquee"

const partners = [
    "Google", "Microsoft", "Apple", "Amazon", "Meta", "Tesla", "NVIDIA", "Intel"
]

export default function Partner() {
    return (
        <div className="grandparent_partner py-4 flex flex-col justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:20s]">
                {partners.map((partner, index) => (
                    <span key={index} className="mx-8 text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors cursor-pointer">
                        {partner}
                    </span>
                ))}
            </Marquee>
        </div>
    )
}
