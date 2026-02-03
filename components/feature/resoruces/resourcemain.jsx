import React from 'react'
import './resources.css'
import ResourceHeader from './components/resourceheader'
import Searchbar from './components/search'
import Navigation from './components/navigation'
import Resourceslist from './ui/resourceslist'

export default function resourcemain() {
  return (
    <div className="grandparentresouce">
      <div className="parentresouce ccomponents">
        <ResourceHeader />
        <Searchbar />
         <Navigation />
        <Resourceslist />
      </div>
    </div>
  )
}
