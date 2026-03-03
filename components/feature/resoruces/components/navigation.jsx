import React from 'react'
import Link from 'next/link'
import './navigation.css'
import Resourceslist from "../ui/resourceslist"
export default function Navigation() {
  return (
    <div className="navigation_resources_grandparent">
      <div className="navigation_resources_parent">
        <div className="navigation_resources_parent_body">
          <Link href="/resources?faculty=Faculty of Computer Science %26 Engineering">Faculty of Computer Science & Engineering</Link>
          <Link href="/resources?faculty=Faculty of Engineering %26 Technology">Faculty of Engineering & Technology</Link>
          <Link href="/resources?faculty=Faculty of Computer Science and Engineering">Faculty of Computer Science and Engineering</Link>
          <Link href="/resources?faculty=Faculty of Planning %26 Architecture">Faculty of Planning & Architecture</Link>
          <Link href="/resources?faculty=Faculty of Design %26 Arts">Faculty of Design & Arts</Link>
          <Link href="/resources?faculty=Faculty of Management %26 Commerce">Faculty of Management & Commerce</Link>
          <Link href="/resources?faculty=Faculty of Science %26 Humanities">Faculty of Science & Humanities</Link>
          <Link href="/resources?faculty=Faculty of Public Health">Faculty of Public Health</Link>
          <Link href="/resources?faculty=Poornima Institute of Hotel Management">Poornima Institute of Hotel Management</Link>
          <Link href="/resources?faculty=Advanced Studies %26 Research Centre">Advanced Studies & Research Centre</Link>
        </div>
      </div>
    </div>
  )
}
