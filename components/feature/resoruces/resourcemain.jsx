import React, { useState, Suspense } from 'react'
import './resources.css'
import {
  BookOpen,
  Users,
  Trophy,
  Layers,
  GraduationCap
} from 'lucide-react';
import ResourceHeader from './components/resourceheader'
import Searchbar from './components/search'
import Navigation from './components/navigation'
import Resourceslist from './ui/resourceslist'
import '../campus/catalog/catalog.css'

export default function resourcemain({ user }) {
  const [selectedResource, setSelectedResource] = useState(null);

  return (
    <div className="grandparentresouce">
      <div className="parentresouce ccomponents">
        <h1 className="header-title text-6xl text-center uppercase mb-8">
          {/* Welcome to <span className="highlight">{user} CAMPUS RESOURCES</span> */}
        </h1>
        {/* <ResourceHeader /> */}
        <Searchbar />
        <Suspense fallback={null}>
          <Navigation />
          <Resourceslist />
        </Suspense>
      </div>
    </div>
  )
}
