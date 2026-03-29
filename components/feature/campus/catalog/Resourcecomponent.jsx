'use client'
import React from 'react';
import './catalog.css';
import {
    BookOpen,
    Users,
    Trophy,
    Layers,
    GraduationCap,
    Briefcase,
    Calendar,
    Zap,
    Target,
    Ticket,
    MessageSquare
} from 'lucide-react';

const ICON_MAP = {
    BookOpen,
    Users,
    Trophy,
    Layers,
    GraduationCap,
    Briefcase,
    Calendar,
    Zap,
    Target,
    Ticket,
    MessageSquare
};

export default function ResourcecomponentView({ selectedItem }) {
    if (!selectedItem) return null;
    const IconComponent = ICON_MAP[selectedItem.iconName];

    return (
        <div className="resource-component-panel">
            <div className="resource-component-header">
                <div className={`resource-icon bg-${selectedItem.color}`}>
                    {IconComponent && <IconComponent className="w-8 h-8" />}
                </div>
                <h2>{selectedItem.title}</h2>
            </div>
            <div className="resource-component-body">
                <p>Explore resources, notes, and materials for <strong>{selectedItem.title}</strong>.</p>
                <div className="resource-component-grid">
                    <div className="resource-card">
                        <h4>📚 Study Materials</h4>
                        <p>Access notes, PDFs, and reference books for {selectedItem.title}.</p>
                    </div>
                    <div className="resource-card">
                        <h4>📝 Previous Year Papers</h4>
                        <p>Practice with past exam papers and solutions.</p>
                    </div>
                    <div className="resource-card">
                        <h4>🎥 Video Lectures</h4>
                        <p>Watch recorded lectures and tutorials.</p>
                    </div>
                    <div className="resource-card">
                        <h4>💬 Discussion Forum</h4>
                        <p>Connect with peers and faculty for {selectedItem.title}.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
