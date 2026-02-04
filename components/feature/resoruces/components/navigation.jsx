import React from 'react'
import Link from 'next/link'
import './navigation.css'
import Resourceslist from "../ui/resourceslist"
export default function Navigation() {
  return (
    <div className="navigation_resources_grandparent">
      <div className="navigation_resources_parent">
        <div className="navigation_resources_parent_body">
          <Link href="/resources?faculty=FCE">FCE</Link>
          <Link href="/resources?faculty=FET">FET</Link>
          <Link href="/resources?faculty=FCSE">FCSE</Link>
          <Link href="/resources?faculty=FPA">FPA</Link>
          <Link href="/resources?faculty=FDA">FDA</Link>
          <Link href="/resources?faculty=FMC">FMC</Link>
          <Link href="/resources?faculty=FSH">FSH</Link>
          <Link href="/resources?faculty=FPH">FPH</Link>
          <Link href="/resources?faculty=PIHM">PIHM</Link>
          <Link href="/resources?faculty=ASRC">ASRC</Link>
        </div>
      </div>
    </div>
  )
}
