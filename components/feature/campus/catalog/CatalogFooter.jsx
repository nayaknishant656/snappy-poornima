'use client'
import React from 'react';

export default function CatalogFooter({ footerText }) {
    return (
        <footer className="catalog-bottom">
            <p>{footerText}</p>
        </footer>
    );
}
