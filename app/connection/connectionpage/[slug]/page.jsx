'use client'
import React, { use } from 'react'
import './team.css'

export default function Page({ params }) {
    // Unwrap the params promise in Next.js 15+
    const unwrappedParams = use(params)
    const { slug } = unwrappedParams

    // For demonstration, we'll use mock data. 
    // In a real app, you might fetch this based on the slug.
    const teamData = {
        slug: slug,
        header: `Team ${slug.toUpperCase()} - Innovators Hub`,
        description: "We are a group of specialized engineers and designers dedicated to building scalable solutions for global challenges. Our team focus is on bridging the gap between academic theory and practical, high-impact implementation.",
        members: [
            { name: "John Doe", role: "Team Lead & Architecture" },
            { name: "Jane Smith", role: "UI/UX Designer" },
            { name: "Alex Johnson", role: "Full Stack Developer" },
            { name: "Sam Wilson", role: "DevOps Engineer" }
        ],
        idea: {
            title: "Project Alpha: Autonomous Learning",
            description: "A platform that uses decentralized consensus to verify academic credentials and automatically connect talented students with industry mentors based on verified project contributions."
        },
        contact: {
            email: "team-alpha@snappy.edu",
            discord: "innovators-hub#1234",
            github: "github.com/snappy-labs"
        },
        leaderboard: [
            { sno: 1, name: "John Doe", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop", leetcode: "2150", codeforces: "1900", sysDesign: "4.8", devops: "4.5" },
            { sno: 2, name: "Jane Smith", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop", leetcode: "1980", codeforces: "1750", sysDesign: "4.9", devops: "4.2" },
            { sno: 3, name: "Alex Johnson", image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop", leetcode: "2050", codeforces: "1820", sysDesign: "4.5", devops: "4.9" },
            { sno: 4, name: "Sam Wilson", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop", leetcode: "1850", codeforces: "1650", sysDesign: "4.2", devops: "4.8" }
        ]
    }

    return (
        <div className='team-page-container'>
            {/* Sample CDN for Fonts */}
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Space+Grotesk:wght@300;700&display=swap"
                rel="stylesheet"
            />

            <div className='team-banner-image'>
                <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                    alt="Team Collaboration"
                    style={{ width: '100%', height: '300px', objectFit: 'cover', border: '2px solid #000', marginBottom: '30px', boxShadow: '5px 5px 0px #000' }}
                />
            </div>

            <div className='team-header'>
                <h1 style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{teamData.header}</h1>
            </div>

            <section>
                <div className='section-title'>Our Vision</div>
                <div className='team-description'>
                    {teamData.description}
                </div>
            </section>

            <section>
                <div className='section-title'>Team Members</div>
                <div className='members-grid'>
                    {teamData.members.map((member, index) => (
                        <div key={index} className='member-card'>
                            <h3>{member.name}</h3>
                            <p>{member.role}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <div className='section-title'>Idea Presentation</div>
                <div className='idea-presentation'>
                    <h3>{teamData.idea.title}</h3>
                    <p>{teamData.idea.description}</p>
                </div>
            </section>

            <section>
                <div className='section-title'>Team Performance Leaderboard</div>
                <div className='leaderboard-wrapper'>
                    <table className='team-leaderboard-table'>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>LeetCode</th>
                                <th>Codeforces</th>
                                <th>System Design</th>
                                <th>DevOps</th>
                            </tr>
                        </thead>
                        <tbody>
                            {teamData.leaderboard.map((student, index) => (
                                <tr key={index}>
                                    <td>{student.sno}</td>
                                    <td>
                                        <div className="leaderboard-avatar-slug">
                                            <img src={student.image} alt={student.name} />
                                        </div>
                                    </td>
                                    <td className='name-cell'>{student.name}</td>
                                    <td>{student.leetcode}</td>
                                    <td>{student.codeforces}</td>
                                    <td>{student.sysDesign}/5</td>
                                    <td>{student.devops}/5</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <section>
                <div className='section-title'>Connect with the Team</div>
                <div className='contact-details'>
                    <div className='contact-item'>Mail: {teamData.contact.email}</div>
                    <div className='contact-item'>Discord: {teamData.contact.discord}</div>
                    <div className='contact-item'>GitHub: {teamData.contact.github}</div>
                </div>
            </section>
        </div>
    )
}

