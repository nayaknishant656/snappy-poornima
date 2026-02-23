'use client'

import React, { useState } from 'react'
import resourcesData from '../data/resourcesData.json'
import { useSearchParams } from 'next/navigation'
import './resourceslist.css'
export default function ResourcesList() {
  const searchParams = useSearchParams()
  const selectedFaculty = searchParams.get('faculty')
  const [expandedBatches, setExpandedBatches] = useState({})

  const toggleBatch = (facultyIndex, batchIndex) => {
    const key = `${facultyIndex}-${batchIndex}`
    setExpandedBatches(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const filteredData = selectedFaculty
    ? resourcesData.filter(item => item.faculty === selectedFaculty)
    : resourcesData

  // Foundational style object for reuse
  const foundationalStyle = {
    border: 'solid red 1px',
    padding: '5px'
  };

  return (
    <div className='grandparent_resources_list' style={foundationalStyle}>
      <div className='parent_resources_list' style={foundationalStyle}>
        <div className='grandpparent_resources_list_content' style={foundationalStyle}>
          <div className='parent_resources_list_content' style={foundationalStyle}>
            <div className="resources-list-container">
              {filteredData.map((facultyData, index) => (
                <div key={index} className="faculty-section" style={foundationalStyle}>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{facultyData.faculty}</h2>
                  {facultyData.batches.map((batch, batchIndex) => {
                    const isExpanded = expandedBatches[`${index}-${batchIndex}`];
                    return (
                      <div key={batchIndex} className="batch-section" style={{ ...foundationalStyle, marginLeft: '10px', marginTop: '10px' }}>
                        <div
                          className="batch-header"
                          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                          onClick={() => toggleBatch(index, batchIndex)}
                        >
                          <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{batch.batchYear}</h3>
                          <span style={{ marginLeft: '10px' }}>
                            {isExpanded ? '▼' : '▶'}
                          </span>
                        </div>

                        {isExpanded && batch.academicYears.map((yearData, yearIndex) => (
                          <div key={yearIndex} className="year-section" style={{ ...foundationalStyle, marginLeft: '10px', marginTop: '10px' }}>
                            <h4 style={{ fontWeight: '600' }}>{yearData.year}</h4>
                            {yearData.semesters.map((semesterData, semIndex) => (
                              <><div key={semIndex} className="semester-section" style={{ ...foundationalStyle, marginLeft: '10px', marginTop: '10px' }}>
                                <div className='thread_main-parent'></div><h5 style={{ fontWeight: '500' }}>{semesterData.semester}</h5>
                                <div className="exams-grid" style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginTop: '10px' }}>
                                  {semesterData.exams.map((exam, examIndex) => (
                                    <div key={examIndex} className="exam-card" style={foundationalStyle}>
                                      <h6 style={{ fontWeight: 'bold', color: 'blue' }}>{exam.type}</h6>
                                      <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                                        {exam.items.length > 0 ? (
                                          exam.items.map((item, itemIndex) => (
                                            <li key={itemIndex}>{item}</li>
                                          ))
                                        ) : (
                                          <li style={{ color: '#999', fontStyle: 'italic' }}>No resources</li>
                                        )}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              </>
                            ))}
                          </div>
                        ))}
                      </div>
                    )
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
