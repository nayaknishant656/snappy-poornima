'use client'
import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function CatalogHeader({ name, badge, description }) {
    return (
        <header className="catalog-university-header">
            <div className="hub-navigation-label">
                <h2>Campus Hub Navigation</h2>
                <div className="label-line"></div>
            </div>
            <div className="header-badge">
                <GraduationCap className="w-4 h-4 mr-2" />
                <span>{badge}</span>
            </div>
            <h1>{name}</h1>
            <p className="college-description">{description}</p>
        </header>
    );
}
