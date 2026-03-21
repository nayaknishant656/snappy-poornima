import React, { useState } from 'react'
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
  const Resourcecomponent = [
    {
      id: 'computer-science',
      title: "Computer Science",
      icon: <BookOpen className="w-5 h-5" />,
      color: "blue",
      link: "/resources/resourcespage/poornima"
    },
    {
      id: 'electrical-engineering',
      title: "Electrical Engineering",
      icon: <Users className="w-5 h-5" />,
      color: "indigo",
      link: "/connection"
    },
    {
      id: 'civil-engineering',
      title: "Civil Engineering",
      icon: <Trophy className="w-5 h-5" />,
      color: "amber",
      link: "/leaderboard"
    },
    {
      id: 'mba',
      title: "MBA",
      icon: <Layers className="w-5 h-5" />,
      color: "rose",
      link: "/colx"
    },
    {
      id: 'bba',
      title: "BBA",
      icon: <GraduationCap className="w-5 h-5" />,
      color: "emerald",
      link: "/semester-overview"
    },
    {
      id: 'bca',
      title: "BCA",
      icon: <BookOpen className="w-5 h-5" />,
      color: "blue",
      link: "/resources/resourcespage/poornima"
    },
    {
      id: 'mca',
      title: "MCA",
      icon: <Users className="w-5 h-5" />,
      color: "indigo",
      link: "/connection"
    },
    {
      id: 'mtech',
      title: "MTECH",
      icon: <Trophy className="w-5 h-5" />,
      color: "amber",
      link: "/leaderboard"
    },
    {
      id: 'phd',
      title: "PHD",
      icon: <Layers className="w-5 h-5" />,
      color: "rose",
      link: "/colx"
    }
  ];

  return (
    <div className="grandparentresouce">
      <div className="parentresouce ccomponents">
        <h1 className="header-title text-6xl text-center uppercase mb-8">
          {/* Welcome to <span className="highlight">{user} CAMPUS RESOURCES</span> */}
        </h1>
        {/* <ResourceHeader /> */}
        <Searchbar />
        {/* <Navigation /> */}
        <div className='navigation_hub_catalog_grandparent'>
          <div className='navigation_hub_catalog_parent'>
            <nav>
              <ul>
                {Resourcecomponent.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => setSelectedResource(item)}
                    className={`nav-tab ${selectedResource?.id === item.id ? 'active-tab' : ''}`}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className={`tab-icon bg-${item.color}`}>
                      {item.icon}
                    </div>
                    <span className="tab-title">{item.title}</span>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        {/* <Resourceslist /> */}
      </div>
    </div>
  )
}
