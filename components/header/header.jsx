import React from 'react'
import './header.css'
export default function Header() {
  return (
    <div className="grandparent_header">
      <div className="parent_header">
        <div className="body-parent_header">
          <div className="logo_header border border-red-600 p-[3px]">
            <h1>Snappy</h1>
          </div>
          <div className="navigation_header border border-red-600 p-[3px]">
            <button className="border border-red-600 p-[3px]"><a href="#home">Home</a></button>
            <button className="border border-red-600 p-[3px]"><a href="#competitive">Competitive</a></button>
            <button className="border border-red-600 p-[3px]"><a href="#resources">Resources</a></button>
            <button className="border border-red-600 p-[3px]"><a href="#connections">Connections</a></button>
            <button className="border border-red-600 p-[3px]"><a href="#exciting-projects">Exciting Projects</a></button>
          </div>
        </div>
      </div>
    </div>
  )
}
