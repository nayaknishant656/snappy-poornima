import React from 'react'
import Link from 'next/link'
import './header.css'
export default function Header() {
  return (
    <div className="grandparent_header">
      <div className="parent_header">
        <div className="body-parent_header">

          <div className="navigation_header">
            <button className=" "><Link href="/">Home</Link></button>
            <button><Link href="/campus">Explore Campus</Link></button>
            <button className=""><Link href="/projects">Projects</Link></button>
            <button className=""><Link href="/events">Events</Link></button>
            <button className=''><Link href="">Tect-Fest</Link></button>
            <button className=''><Link href="">Rank Predictor</Link></button>
            <button className=''><Link href="/Auditorium">A-Booking</Link></button>
            <button className=''><Link href="/confession">Confession</Link></button>
          </div>
        </div>
      </div>
    </div>
  )
}
