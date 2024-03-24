import React from 'react'
import MVText from './MVText'

const missionData = {
    mainContent: 'We at AlgoZenith strive to cultivate a thriving software development ecosystem at NIT Calicut. Every student, in our opinion, has the capacity to succeed in the fast-paced field of software. Our goal is to give students the tools, direction, and encouragement they need to turn their potential into the abilities to pursue a career in software.',
    points: [
        {
            highlight: 'Daily Dose of Excellence',
            pointBody: 'We tackle daily challenges on LeetCode and GeeksforGeeks, refining skills through practice. Sharing solutions on Discord fosters collaboration. Join us as we excel in problem-solving together.'
        },
        {
            highlight: 'Editorials to the coding contests',
            pointBody: 'We analyze coding competitions on LeetCode, Codeforces, and CodeChef, fostering a culture of learning. Team members provide textual and video solutions on our Discord server, promoting skill development.'
        },
         {
            highlight: 'Curated Internship & Job listings',
            pointBody: 'We connect students with career opportunities by sharing internship and job openings from diverse companies on our LinkedIn page, facilitating access to software talent.'
        },
        {
            highlight: 'Interview Chronicles',
            pointBody: 'We promote peer-to-peer learning among students by encouraging sharing of internship and placement interview experiences. This fosters valuable insights exchange among classmates, enhancing their learning journey.'
        },
    ]
}

function Mission() {
  return (
    <div>
        <MVText data={missionData} />
    </div>
  )
}

export default Mission