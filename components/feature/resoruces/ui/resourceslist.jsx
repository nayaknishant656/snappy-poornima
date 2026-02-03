'use client'

import React, { useState } from 'react'
import resourcesData from '../data/resourcesData.json'
import { useSearchParams } from 'next/navigation'

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

  return (
    <div className="resources-list-container p-4">
      {filteredData.map((facultyData, index) => (
        <div key={index} className="faculty-section mb-6">
          <h2 className="text-xl font-bold mb-2">{facultyData.faculty}</h2>
          {facultyData.batches.map((batch, batchIndex) => {
            const isExpanded = expandedBatches[`${index}-${batchIndex}`];
            return (
              <div key={batchIndex} className="batch-section ml-4 mb-6">
                <div
                  className="flex items-center cursor-pointer mb-4"
                  onClick={() => toggleBatch(index, batchIndex)}
                >
                  <h3 className="text-lg font-bold text-gray-800 select-none">
                    {batch.batchYear}
                  </h3>
                  <span className="ml-2 text-gray-500 text-sm">
                    {isExpanded ? '▼' : '▶'}
                  </span>
                </div>

                {isExpanded && batch.academicYears.map((yearData, yearIndex) => (
                  <div key={yearIndex} className="year-section ml-4 mb-4">
                    <h4 className="text-md font-semibold text-gray-700">{yearData.year}</h4>
                    {yearData.semesters.map((semesterData, semIndex) => (
                      <div key={semIndex} className="semester-section ml-4 mb-2">
                        <h5 className="font-medium text-gray-600">{semesterData.semester}</h5>
                        <div className="exams-grid grid grid-cols-1 md:grid-cols-2 gap-4 ml-4 mt-2">
                          {semesterData.exams.map((exam, examIndex) => (
                            <div key={examIndex} className="exam-card">
                              <h6 className="font-bold text-sm text-blue-600">{exam.type}</h6>
                              <ul className="list-disc pl-4 mt-1">
                                {exam.items.length > 0 ? (
                                  exam.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="text-sm text-gray-600">{item}</li>
                                  ))
                                ) : (
                                  <li className="text-sm text-gray-400 italic">No resources</li>
                                )}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}
