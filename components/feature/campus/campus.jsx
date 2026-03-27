'use client';
import React from 'react'
import { useState } from 'react'
import './campus.css'
import Link from 'next/link'

export default function Campus() {
    const [searchTerm, setSearchTerm] = useState("");

    const colleges = [
        {
            name: "Poornima University Campus",
            city: "Jaipur",
            image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop",
            description: "A leading private university in Jaipur offering diverse academic programs and vibrant campus life.",
            link: "Poornima_University"
        },
        {
            name: "Poornima Institute of Engineering and Technology",
            city: "Jaipur",
            image: "https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?q=80&w=2070&auto=format&fit=crop",
            description: "A premier institute focused on research and technical excellence in engineering.",
            link: "#"
        },
        {
            name: "Poornima College of Engineering",
            city: "Jaipur",
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
            description: "Providing high-quality engineering education and fostering a spirit of innovation.",
            link: "#"
        },
        {
            name: "JECRC, Jaipur",
            city: "Jaipur",
            image: "https://images.unsplash.com/photo-1574092146914-9e9d6d39644b?q=80&w=1974&auto=format&fit=crop",
            description: "Known for its academic rigor and strong record in professional placements.",
            link: "#"
        },
        {
            name: "SKIT, Jaipur",
            city: "Jaipur",
            image: "https://images.unsplash.com/photo-1498243639311-f31558140f07?q=80&w=2070&auto=format&fit=crop",
            description: "Dedicated to excellence in technical education and research with modern facilities.",
            link: "#"
        },
        {
            name: "VGU, Jaipur",
            city: "Jaipur",
            image: "https://images.unsplash.com/photo-1592280771190-3e2e4d2d910d?q=80&w=1974&auto=format&fit=crop",
            description: "Global university focused on innovation, research, and holistic development.",
            link: "#"
        },
        {
            name: "Jaipur National University",
            city: "Jaipur",
            image: "https://images.unsplash.com/photo-1565034946487-077786996e27?q=80&w=2070&auto=format&fit=crop",
            description: "A multidisciplinary university offering quality education and professional growth.",
            link: "#"
        },
        {
            name: "Manipal University Jaipur",
            city: "Jaipur",
            image: "https://images.unsplash.com/photo-1527891751199-7225231a68dd?q=80&w=2070&auto=format&fit=crop",
            description: "Excellence in education with a focus on holistic student development and global exposure.",
            link: "#"
        },
        {
            name: "Amity University Jaipur",
            city: "Jaipur",
            image: "https://images.unsplash.com/photo-1607237138185-efd9571f9f90?q=80&w=2070&auto=format&fit=crop",
            description: "Modern campus with state-of-the-art infrastructure and diverse research opportunities.",
            link: "#"
        }
    ];

    const filteredColleges = colleges.filter(college =>
        college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        college.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        college.city.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const majorCities = [
        { name: "Jaipur", bg: "#FFD700" },
        { name: "Delhi", bg: "#FF6B6B" },
        { name: "Mumbai", bg: "#4ECDC4" },
        { name: "Pune", bg: "#45B7D1" },
        { name: "Bangalore", bg: "#96CEB4" }
    ];

    return (
        <div className='grandparent_campus'>
            <div className='parent_campus'>
                <div className='campus-container'>
                    <div className='campus_header'>
                        <h1>Exclusive Campuses</h1>
                        <div className="search-box">
                            <input
                                type="text"
                                placeholder="Search by name, city, or description..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <div className="quick-cities">
                                {majorCities.map((city, index) => (
                                    <button
                                        key={index}
                                        className="city-btn"
                                        style={{ backgroundColor: city.bg }}
                                        onClick={() => setSearchTerm(city.name)}
                                    >
                                        {city.name}
                                    </button>
                                ))}
                                <button
                                    className="city-btn reset-btn"
                                    onClick={() => setSearchTerm("")}
                                    style={{ backgroundColor: "#000", color: "#fff" }}
                                >
                                    All
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="campus-grid">
                        {filteredColleges.length > 0 ? (
                            filteredColleges.map((college, index) => (
                                <div className="college-card" key={index}>
                                    <div className="college-image">
                                        <img src={college.image} alt={college.name} />
                                        <div className="city-tag">{college.city}</div>
                                    </div>
                                    <div className="college-info">
                                        <h2>{college.name}</h2>
                                        <p>{college.description}</p>
                                        <Link href={`/campus/catalog/${college.link}`} className="explore-btn">Explore Campus</Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="no-results">
                                <p>No campuses found matching your search.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
