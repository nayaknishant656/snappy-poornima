import React, { Suspense } from 'react'
import Resources from "../../../../components/feature/resoruces/resourcemain"

export default async function page({ params }) {
    const { slug } = await params;
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Resources user={slug} />
        </Suspense>
    )
}
