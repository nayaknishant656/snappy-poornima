'use client'

import React, { useState } from 'react'
import resourcesData from '../data/resourcesData.json'
import { ChevronDown, ChevronRight, BookOpen } from 'lucide-react'
import './resourceslist.css'

export default function ResourcesList() {
  const [expandedFaculties, setExpandedFaculties] = useState({})
  const [expandedBatches, setExpandedBatches] = useState({})

  // Faculty info mapping for visuals
  const facultyInfo = {
    "Faculty of Computer Science & Engineering": {
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
      desc: "Comprehensive study guides, research papers, and software engineering blueprints for modern developers."
    },
    "Faculty of Engineering and Technology": {
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
      desc: "Advanced engineering blueprints, CAD designs, and technical lab manuals for the next generation of engineers."
    },
    "FE": { // For legacy or unmapped entries
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2070&auto=format&fit=crop",
      desc: "General engineering resources and technical documentation."
    }
  }

  const toggleFaculty = (index) => {
    setExpandedFaculties(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const toggleBatch = (facultyIndex, batchIndex) => {
    const key = `${facultyIndex}-${batchIndex}`
    setExpandedBatches(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  return (
    <div className='resources-faculty-explorer'>
      {resourcesData.map((facultyData, index) => {
        const info = facultyInfo[facultyData.faculty] || {
          image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop",
          desc: "Quality academic resources and verified study materials for this faculty branch."
        }
        const isFacultyExpanded = expandedFaculties[index]

        return (
          <div key={index} className={`faculty-card ${isFacultyExpanded ? 'expanded' : ''}`}>
            <div className="faculty-card-inner">
              <div className="faculty-image">
                <img src={info.image} alt={facultyData.faculty} />
              </div>
              <div className="faculty-main-content">
                <h2>{facultyData.faculty}</h2>
                <p>{info.desc}</p>
                <button
                  className="reveal-btn"
                  onClick={() => toggleFaculty(index)}
                >
                  {isFacultyExpanded ? 'Hide Resources' : 'Reveal Resources'}
                  <ChevronDown className={`ml-2 transform transition-transform ${isFacultyExpanded ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>

            {/* Resources Dropdown Content */}
            {isFacultyExpanded && (
              <div className="faculty-resources-dropdown animate-slide-down">
                <div className="resources-divider" />
                {facultyData.batches.map((batch, batchIndex) => {
                  const batchKey = `${index}-${batchIndex}`
                  const isBatchExpanded = expandedBatches[batchKey]

                  return (
                    <div key={batchIndex} className="batch-wrapper">
                      <div
                        className="batch-selector"
                        onClick={() => toggleBatch(index, batchIndex)}
                      >
                        <ChevronRight className={`transition-transform ${isBatchExpanded ? 'rotate-90' : ''}`} />
                        <span>Batch {batch.batchYear}</span>
                      </div>

                      {isBatchExpanded && (
                        <div className="batch-details animate-fade-in">
                          {batch.academicYears.map((yearData, yIndex) => (
                            <div key={yIndex} className="year-group">
                              <h4>{yearData.year}</h4>
                              <div className="semesters-grid">
                                {yearData.semesters.map((sem, sIndex) => (
                                  <div key={sIndex} className="semester-card">
                                    <h5>{sem.semester}</h5>
                                    <div className="exams-list">
                                      {sem.exams.map((exam, eIndex) => (
                                        <div key={eIndex} className="exam-entry">
                                          <span className="exam-type">{exam.type}</span>
                                          <ul>
                                            {exam.items.map((it, iIdx) => (
                                              <li key={iIdx}><BookOpen size={12} className="inline mr-1" /> {it}</li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
