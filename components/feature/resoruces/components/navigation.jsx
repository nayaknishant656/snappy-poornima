import React from 'react'
import Link from 'next/link'
import './navigation.css'
import Resourceslist from "../ui/resourceslist"
export default function Navigation() {
  return (
    <div className="navigation_resources_grandparent">
      <div className="navigation_resources_parent">
        <div className="navigation_resources_parent_body">
          <Link href="/?faculty=FCE">FCE</Link>
          <Link href="/?faculty=FET">FET</Link>
          <Link href="/?faculty=FCSE">FCSE</Link>
          <Link href="/?faculty=FPA">FPA</Link>
          <Link href="/?faculty=FDA">FDA</Link>
          <Link href="/?faculty=FMC">FMC</Link>
          <Link href="/?faculty=FSH">FSH</Link>
          <Link href="/?faculty=FPH">FPH</Link>
          <Link href="/?faculty=PIHM">PIHM</Link>
          <Link href="/?faculty=ASRC">ASRC</Link>
        </div>
      </div>
    </div>
  )
}
