import React from 'react'
import './campus.css'
import Link from 'next/link'
export default function campus() {
    const colleges = [
        {
            name: "Poornima University Campus",
            image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop",
            description: "A leading private university in Jaipur offering diverse academic programs and vibrant campus life.",
            link: "/campus/catalog"
        },
        {
            name: "Poornima Institute of Engineering and Technology",
            image: "https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?q=80&w=2070&auto=format&fit=crop",
            description: "A premier institute focused on research and technical excellence in engineering.",
            link: "#"
        },
        {
            name: "Poornima College of Engineering",
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
            description: "Providing high-quality engineering education and fostering a spirit of innovation.",
            link: "#"
        },
        {
            name: "JECRC, Jaipur",
            image: "https://images.unsplash.com/photo-1574092146914-9e9d6d39644b?q=80&w=1974&auto=format&fit=crop",
            description: "Known for its academic rigor and strong record in professional placements.",
            link: "#"
        },
        {
            name: "SKIT, Jaipur",
            image: "https://images.unsplash.com/photo-1498243639311-f31558140f07?q=80&w=2070&auto=format&fit=crop",
            description: "Dedicated to excellence in technical education and research with modern facilities.",
            link: "#"
        },
        {
            name: "VGU, Jaipur",
            image: "https://images.unsplash.com/photo-1592280771190-3e2e4d2d910d?q=80&w=1974&auto=format&fit=crop",
            description: "Global university focused on innovation, research, and holistic development.",
            link: "#"
        },
        {
            name: "Jaipur National University",
            image: "https://images.unsplash.com/photo-1565034946487-077786996e27?q=80&w=2070&auto=format&fit=crop",
            description: "A multidisciplinary university offering quality education and professional growth.",
            link: "#"
        },
        {
            name: "Manipal University Jaipur",
            image: "https://images.unsplash.com/photo-1527891751199-7225231a68dd?q=80&w=2070&auto=format&fit=crop",
            description: "Excellence in education with a focus on holistic student development and global exposure.",
            link: "#"
        },
        {
            name: "Amity University Jaipur",
            image: "https://images.unsplash.com/photo-1607237138185-efd9571f9f90?q=80&w=2070&auto=format&fit=crop",
            description: "Modern campus with state-of-the-art infrastructure and diverse research opportunities.",
            link: "#"
        }
    ];

    return (
        <div className='grandparent_campus'>
            <div className='parent_campus'>
                <div className='campus-container'>
                    <div className='campus_header'>
                        <h1>Exclusive Campuses</h1>
                    </div>

                    <div className="campus-grid">
                        {colleges.map((college, index) => (
                            <div className="college-card" key={index}>
                                <div className="college-image">
                                    <img src={college.image} alt={college.name} />
                                </div>
                                <div className="college-info">
                                    <h2>{college.name}</h2>
                                    <p>{college.description}</p>
                                    <Link href={college.link} className="explore-btn">Explore Campus</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
