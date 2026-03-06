import React, { Suspense } from 'react'
import Connection from "../../../components/feature/connection/connection"

export default async function page({ params }) {
    const { slug } = await params;
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Connection user={slug} />
        </Suspense>
    )
}
