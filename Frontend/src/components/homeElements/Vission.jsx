import React from 'react'
import MVText from './MVText'


const vissionData = {
    mainContent: 'Our vision is to be the premier software development career development hub at NIT Calicut. We aspire to:',
    points: [
        {
            highlight: 'Become a breeding ground for top software talent:',
            pointBody: 'Our objective is to produce a new generation of NIT Calicut graduates that top tech firms will find extremely desirable.'
        },
        {
            highlight: 'One Stop Solution',
            pointBody: `AlgoZenith is NIT Calicut's go-to hub for software development needs, offering tools, guidance, and motivation to shape students into industry-ready professionals.`
        },
         {
            highlight: 'Expand our horizons',
            pointBody: 'We plan to broaden our scope beyond DSA, empowering students with skills in web development, machine learning, and other relevant software domains.'
        },
        {
            highlight: 'Leave a lasting impact',
            pointBody: 'We hope to leave a legacy at NIT Calicut, where our efforts pave the way for future generations of aspiring software developers.'
        },
    ]
}


function Vission() {
  return (
    <div>
        <MVText data={vissionData} />
    </div>
  )
}

export default Vission