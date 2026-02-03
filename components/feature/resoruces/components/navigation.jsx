import React from 'react'
import Link from 'next/link'
import './navigation.css'

export default function Navigation() {
  return (
    <div className="navigation_resources_grandparent">
      <div className="navigation_resources_parent">
        <div className="navigation_resources_parent_body">
          <Link href="/navigation">FET</Link>
          <Link href="/">FCSE</Link>
          <Link href="/">FPA</Link>
          <Link href="/">FDA</Link>
          <Link href="/">FMC</Link>
          <Link href="/">FSH</Link>
          <Link href="/">FPH</Link>
          <Link href="/">PIHM</Link>
          <Link href="/">ASRC</Link>
        </div>
      </div>
    </div>
  )
}
