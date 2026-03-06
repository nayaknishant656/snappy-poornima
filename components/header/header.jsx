import React from 'react'
import Link from 'next/link'
import './header.css'
export default function Header() {
  return (
    <div className="grandparent_header">
      <div className="parent_header">
        <div className="body-parent_header">
          <div className="logo_header ">
            <h1>Snappy</h1>
          </div>
          <div className="navigation_header">
            <button className=" "><Link href="/">Home</Link></button>
            <button><Link href="/campus">Explore Campus</Link></button>
            <button className=""><Link href="/projects">Projects</Link></button>
            <button className=""><Link href="/events">Events</Link></button>
            <button className=''><Link href="">Tect-Fest</Link></button>
          </div>
        </div>
      </div>
    </div>
  )
}
