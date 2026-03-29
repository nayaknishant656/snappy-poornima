'use client'
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import './navigation.css'
import {
  BookOpen,
  Users,
  Trophy,
  Layers,
  GraduationCap
} from 'lucide-react';
import Resourceslist from "../ui/resourceslist"
import { useRouter, useSearchParams } from 'next/navigation'
export default function Navigation() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentFilter = searchParams.get('filter');

  const handleSelect = (item) => {
    // Create new search params
    const params = new URLSearchParams(searchParams.toString());
    params.set('filter', item.id);
    router.push(`?${params.toString()}`, { scroll: false });
  };
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
    <div className="navigation_resources_grandparent">
      <div className="navigation_resources_parent">
        <div className='navigation_hub_catalog_grandparent'>
          <div className='navigation_hub_catalog_parent'>
            <nav>
              <ul>
                {Resourcecomponent.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => handleSelect(item)}
                    className={`nav-tab ${currentFilter === item.id ? 'active-tab' : ''}`}
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

      </div>
    </div>
  )
}