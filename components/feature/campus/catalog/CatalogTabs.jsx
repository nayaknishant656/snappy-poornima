'use client'
import React from 'react';
import Link from 'next/link';

export default function CatalogTabs({ items, selectedId, onSelect, iconMap, slug }) {
    return (
        <>
            <nav className="catalog-tabs">
                {items && items.map((item) => {
                    const IconComponent = iconMap[item.iconName];
                    const linkHref = `/campus/catalog/Poornima_University${item.link || '/' + item.id}`;

                    // ${slug}

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


            {/* {items && items.map((item) => {
                const IconComponent = iconMap[item.iconName];
                return (
                    <div key={item.id}>
                        <p>{item.title}</p>
                        <p>{item.iconName}</p>
                        <div className={`tab-icon bg-${item.color}`}>
                            {IconComponent && <IconComponent className="w-5 h-5" />}
                        </div>
                        <span className="tab-title">{item.title}</span>
                    </div>
                )
            })} */}

        </>
    );
}
