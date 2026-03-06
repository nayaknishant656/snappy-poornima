'use client'
import React from 'react';
import {
    BookOpen,
    Users,
    Trophy,
    Layers,
    GraduationCap
} from 'lucide-react';
import Link from 'next/link';
import './catalog.css';

export default function Catalog() {
    const catalogItems = [
        {
            id: 'resources',
            title: "Resources",
            icon: <BookOpen className="w-5 h-5" />,
            color: "blue",
            link: "/resources/resourcespage/poornima"
        },
        {
            id: 'connection',
            title: "Connections",
            icon: <Users className="w-5 h-5" />,
            color: "indigo",
            link: "/connection"
        },
        {
            id: 'leaderboard',
            title: "Leaderboard",
            icon: <Trophy className="w-5 h-5" />,
            color: "amber",
            link: "/leaderboard"
        },
        {
            id: 'colx',
            title: "ColX",
            icon: <Layers className="w-5 h-5" />,
            color: "rose",
            link: "/colx"
        }
    ];

    return (
        <div className="catalog-container module-view">
            <header className="catalog-university-header">
                <div className="hub-navigation-label">
                    <h2>Campus Hub Navigation</h2>
                    <div className="label-line"></div>
                </div>

                <nav className="catalog-tabs">
                    {catalogItems.map((item) => (
                        <Link
                            key={item.id}
                            href={item.link}
                            className="nav-tab"
                        >
                            <div className={`tab-icon bg-${item.color}`}>
                                {item.icon}
                            </div>
                            <span className="tab-title">{item.title}</span>
                        </Link>
                    ))}
                </nav>

                <div className="university-info">
                    <div className="header-badge">
                        <GraduationCap className="w-4 h-4 mr-2" />
                        <span>Poornima University Campus</span>
                    </div>
                    <h1>Poornima University</h1>
                    <p className="college-description">
                        An advanced technological and research university committed to excellence in education,
                        innovation, and empowering the next generation of industry leaders.
                    </p>

                    <div className="courses-section">
                        <h3>Programs Offered:</h3>
                        <div className="courses-grid">
                            <div className="course-card">
                                <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop" alt="CS" />
                                <div className="course-card-content">
                                    <h4>Computer Science</h4>
                                    <p>AI, ML, and Software Engineering.</p>
                                </div>
                            </div>
                            <div className="course-card">
                                <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop" alt="EE" />
                                <div className="course-card-content">
                                    <h4>Electrical Eng.</h4>
                                    <p>Power Systems and Robotics.</p>
                                </div>
                            </div>
                            <div className="course-card">
                                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" alt="Architecture" />
                                <div className="course-card-content">
                                    <h4>Architecture</h4>
                                    <p>Sustainable Design & Urban Planning.</p>
                                </div>
                            </div>
                            <div className="course-card">
                                <img src="https://images.unsplash.com/photo-1454165833762-0265129b0021?q=80&w=2070&auto=format&fit=crop" alt="Management" />
                                <div className="course-card-content">
                                    <h4>Management</h4>
                                    <p>Global Business & Leadership.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <footer className="catalog-bottom">
                <p>Unified Campus Experience • Poornima University Central Catalog</p>
            </footer>
        </div>
    );
}
