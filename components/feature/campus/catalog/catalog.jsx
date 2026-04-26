'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import './catalog.css';
import ResourcecomponentView from './Resourcecomponent';
import Resourcemain from '../../resoruces/resourcemain';
import Connection from '../../connection/connection';
import Colx from '../../colx/colx';
import Leaderboard from '../../leaderboard/leaderboard';

export default function Catalog() {
    const [selectedResource, setSelectedResource] = useState(null);
    const catalogItems = [
        {
            id: 'resources',
            title: "Resources",
            color: "blue",
            component: <Resourcemain user="Poornima" />
        },
        {
            id: 'connection',
            title: "Connections",
            color: "indigo",
            component: <Connection user="Poornima" />
        },
        {
            id: 'leaderboard',
            title: "Leaderboard",
            color: "amber",
            component: <Leaderboard />
        },
        {
            id: 'colx',
            title: "ColX",
            color: "rose",
            component: <Colx />
        },
        {
            id: "semester-overview",
            title: "Semester Overview",
            color: "rose",
            component: null
        }
    ];

    // Dynamic component renderer
    const renderSelectedComponent = () => {
        if (!selectedResource) return null;
        // If the item has a dedicated component, render it; otherwise fallback
        if (selectedResource.component) return selectedResource.component;
        return <ResourcecomponentView selectedItem={selectedResource} />;
    };

    return (
        <div className="catalog-container module-view">
            <header className="catalog-university-header">
                <div className="hub-navigation-label">
                    <h2>Campus Hub Navigation</h2>
                    <div className="label-line"></div>
                </div>
                <div className="header-badge">
                    <span>Poornima University Campus</span>
                </div>
                <h1>Poornima University</h1>
                <p className="college-description">
                    An advanced technological and research university committed to excellence in education,
                    innovation, and empowering the next generation of industry leaders.
                </p>
                <nav className="catalog-tabs">
                    {catalogItems.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => setSelectedResource(item)}
                            className={`nav-tab ${selectedResource?.id === item.id ? 'active-tab' : ''}`}
                            style={{ cursor: 'pointer' }}
                        >
                            <span className="tab-title">{item.title}</span>
                        </div>
                    ))}
                </nav>
            </header>

            <div className="university-info">
                {renderSelectedComponent()}
            </div>
            <footer className="catalog-bottom">
                <p>Unified Campus Experience • Poornima University Central Catalog</p>
            </footer>
        </div>
    );
}
