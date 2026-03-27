'use client'
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import {
    BookOpen,
    Users,
    Trophy,
    Layers,
    GraduationCap
} from 'lucide-react';

import '@/components/feature/campus/catalog/catalog.css';
import CatalogHeader from '@/components/feature/campus/catalog/CatalogHeader';
import CatalogTabs from '@/components/feature/campus/catalog/CatalogTabs';
import CatalogFooter from '@/components/feature/campus/catalog/CatalogFooter';
import ResourcecomponentView from '@/components/feature/campus/catalog/Resourcecomponent';

// Component mapping for dynamic components specified in JSON
import Resourcemain from '@/components/feature/resoruces/resourcemain';
import Connection from '@/components/feature/connection/connection';
import Colx from '@/components/feature/colx/colx';
import Leaderboard from '@/components/feature/leaderboard/leaderboard';

// Campus internal data store
import { campusData } from '@/lib/campusData';

const ICON_MAP = {
    BookOpen,
    Users,
    Trophy,
    Layers,
    GraduationCap
};

const COMPONENT_MAP = {
    Resourcemain,
    Connection,
    Colx,
    Leaderboard
};

export default function DynamicCatalog() {
    const params = useParams();
    // Catch-all route slug is an array: [campus, resource]
    const slug = params?.slug || [];
    const campusName = slug[0];

    const [selectedResource, setSelectedResource] = useState(null);

    // Fetch campus configuration based on slug[0] (campus identifier)
    const currentCampusDetails = campusData[campusName];

    // Effect to set the selected component based on slug[1] (resource identifier)
    useEffect(() => {
        if (currentCampusDetails && slug[1]) {
            // Find the item matching the ID or the custom link path
            const matchingItem = currentCampusDetails.catalogItems.find(
                item => item.id === slug[1] || (item.link && item.link.includes(slug[1]))
            );
            if (matchingItem) {
                setSelectedResource(matchingItem);
            }
        } else if (currentCampusDetails && !slug[1]) {
            // Default: clear selection if no resource slug is present
            setSelectedResource(null);
        }
    }, [slug, currentCampusDetails]);

    if (!currentCampusDetails) {
        return (
            <div className="catalog-container module-view">
                <h1>Campus Not Found</h1>
                <p>Sorry, the campus "{campusName}" doesn't exist in our catalog.</p>
            </div>
        );
    }

    const { name, badge, description, footerText, catalogItems } = currentCampusDetails;

    // Renders the specific component based on selection and COMPONENT_MAP
    const renderContent = () => {
        if (!selectedResource) return null;

        const Component = COMPONENT_MAP[selectedResource.componentName];
        if (Component) {
            return <Component {...(selectedResource.props || {})} />;
        }

        // Final fallback for missing mapped components
        return <ResourcecomponentView selectedItem={selectedResource} />;
    };

    return (
        <div className="catalog-container module-view">
            <CatalogHeader
                name={name}
                badge={badge}
                description={description}
            />

            <CatalogTabs
                items={catalogItems}
                selectedId={selectedResource?.id}
                onSelect={setSelectedResource}
                iconMap={ICON_MAP}
                slug={campusName}
            />

            <div className="university-info">
                {renderContent()}
            </div>

            <CatalogFooter footerText={footerText} />
        </div>
    );
}
