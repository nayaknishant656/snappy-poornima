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
            <button className=" "><Link href="/resources">Resources</Link></button>
            {/* <button className="border border-red-600 p-[3px]"><a href="#resources">Resources</a></button> */}
            <button className=" "><a href="/connection">Connections</a></button>
            <button className=""><a href="#exciting-projects">Exciting Projects</a></button>
          </div>
        </div>
      </div>
    </div>
  )
}
