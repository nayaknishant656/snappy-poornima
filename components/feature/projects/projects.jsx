import React from 'react'
import './projects.css'

export default function Projects() {
    return (
        <div className='grandparent_projects'>
            <div className='parent_projects'>
                <div className='grandpparent_projects_content'>
                    <div className='parent_projects_content'>
                        <div className='projects_header'>
                            <h1>Projects</h1>
                        </div>
                        <div className='projects_content_parent'>
                            {/* Project items will go here */}
                            <p>Discover innovative projects from our community.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
