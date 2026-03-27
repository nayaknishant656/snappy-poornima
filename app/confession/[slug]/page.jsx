'use client'
import React from 'react'
import { useParams } from 'next/navigation'

export default function ConfessionPage() {
    const { slug } = useParams();

    return (
        <div className="confession-container">
            <h1>Confessions: {slug}</h1>
            <p>Welcome to the confessions page for {slug}. Share your thoughts anonymously.</p>
        </div>
    )
}
