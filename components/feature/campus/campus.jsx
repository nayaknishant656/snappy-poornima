'use client';
import React, { useState, useEffect } from 'react'
import './campus.css'
import Link from 'next/link'
import axios from 'axios'

export default function Campus() {
    const [searchTerm, setSearchTerm] = useState("");
    const [colleges, setColleges] = useState([]);

    async function fetchColleges() {
        try {
            const res = await axios.get("http://localhost:8000/api/ci");
            if (res.data && res.data.success && Array.isArray(res.data.data)) {
                setColleges(res.data.data);
                console.log("college", colleges);
            } else if (Array.isArray(res.data)) {
                setColleges(res.data);
            }
        } catch (error) {
            console.error("Error fetching colleges:", error);
        }
    }

    useEffect(() => {
        fetchColleges();
    }, []);

    const filteredColleges = colleges.filter(college => {
        const { name = "", city = "", description = "", Description = "" } = college;
        const searchTarget = searchTerm.toLowerCase();
        const displayDescription = description || Description;
        return (
            name.toLowerCase().includes(searchTarget) ||
            city.toLowerCase().includes(searchTarget) ||
            displayDescription.toLowerCase().includes(searchTarget)
        );
    });

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
                            filteredColleges.map((college, index) => {
                                const { name, city, image, description, Description, link, TotalConnected, Alumani } = college;
                                return (
                                    <div className="college-card" key={index}>
                                        <div className="college-image">
                                            <img src={image} alt={name} />
                                            <div className="city-tag">{city}</div>
                                        </div>
                                        <div className="college-info">
                                            <h2>{name}</h2>
                                            <p>{description || Description}</p>
                                            <p>{TotalConnected}</p>
                                            <p>{Alumani}</p>
                                            <Link href={`/campus/catalog/${link}`} className="explore-btn">Explore Campus</Link>
                                        </div>
                                    </div>
                                );
                            })
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

