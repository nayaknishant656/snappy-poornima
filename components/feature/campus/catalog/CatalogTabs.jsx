'use client'
import React from 'react';
import Link from 'next/link';

export default function CatalogTabs({ items, selectedId, onSelect, iconMap, slug }) {
    return (
        <nav className="catalog-tabs">
            {items.map((item) => {
                const IconComponent = iconMap[item.iconName];
                const linkHref = `/campus/catalog/${slug}${item.link || '/' + item.id}`;

                return (
                    <Link
                        key={item.id}
                        href={linkHref}
                        onClick={() => onSelect(item)}
                        className={`nav-tab ${selectedId === item.id ? 'active-tab' : ''}`}
                        style={{ cursor: 'pointer', textDecoration: 'none' }}
                    >
                        <div className={`tab-icon bg-${item.color}`}>
                            {IconComponent && <IconComponent className="w-5 h-5" />}
                        </div>
                        <span className="tab-title">{item.title}</span>
                    </Link>
                );
            })}
        </nav>
    );
}
