import React from 'react'
import './leaderboard.css'

export default function leaderboard() {
    const leaderboardData = [
        { sno: 1, name: "Nishant Nayak", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop", leetcode: "2100", codeforces: "1850", systemDesign: "4.8", devops: "4.5" },
        { sno: 2, name: "Rahul Sharma", image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop", leetcode: "1950", codeforces: "1720", systemDesign: "4.2", devops: "4.7" },
        { sno: 3, name: "Priya Singh", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop", leetcode: "1800", codeforces: "1600", systemDesign: "4.5", devops: "4.2" },
        { sno: 4, name: "Amit Patel", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop", leetcode: "2200", codeforces: "1900", systemDesign: "4.9", devops: "4.6" },
        { sno: 5, name: "Sanya Gupta", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop", leetcode: "1700", codeforces: "1550", systemDesign: "4.0", devops: "4.8" },
    ];

    return (
        <div className='grandparent_leaderboard'>
            <div className='parent_leaderboard'>
                <div className='leaderboard_container'>
                    <div className='leaderboard_header'>
                        <h1>Global Leaderboard</h1>
                    </div>

                    <div className="leaderboard_table_wrapper">
                        <table className="leaderboard_table">
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
                                {leaderboardData.map((student, index) => (
                                    <tr key={index}>
                                        <td>{student.sno}</td>
                                        <td>
                                            <div className="leaderboard_avatar">
                                                <img src={student.image} alt={student.name} />
                                            </div>
                                        </td>
                                        <td className="student-name">{student.name}</td>
                                        <td>{student.leetcode}</td>
                                        <td>{student.codeforces}</td>
                                        <td>{student.systemDesign} / 5</td>
                                        <td>{student.devops} / 5</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
