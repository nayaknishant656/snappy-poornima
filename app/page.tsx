import Header from '@/components/header/header'
import React from 'react'
import Resources from '@/components/feature/resoruces/resourcemain'
import './page.css'
import Link from 'next/link'
export default function Home() {
  return (
    <div className="grand-parent-container-main">
      <div className="parent-container-main">
        {/* <Header /> */}
        <h3>Welcome to Snappy!</h3>
        <p>Snappy is a platform for managing and sharing resources efficiently.</p>
        {/* <Resources /> */}
      </div>
    </div>
  );
}
