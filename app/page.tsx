import Header from '@/components/header/header'
import React from 'react'
import Resources from '@/components/feature/resoruces/resourcemain'
import './page.css'
import Link from 'next/link'
export default function Home() {
  return (
    <div className="grand-parent-container-main">
      <div className="parent-container-main">
        <Header />
        <Resources />
        <Link href="/about">About</Link>
      </div>
    </div>
  );
}
