import React from 'react'
import './resources.css'
import ResourceHeader from './components/resourceheader'
import Searchbar from './components/search'
import Navigation from './components/navigation'
import Resourceslist from './ui/resourceslist'

export default function resourcemain({ user }) {
  return (
    <div className="grandparentresouce">
      <div className="parentresouce ccomponents">
        <h1 className="header-title text-6xl text-center uppercase mb-8">
          Welcome to <span className="highlight">{user} CAMPUS RESOURCES</span>
        </h1>
        <ResourceHeader />
        <Searchbar />
        <Navigation />
        <Resourceslist />
      </div>
    </div>
  )
}
