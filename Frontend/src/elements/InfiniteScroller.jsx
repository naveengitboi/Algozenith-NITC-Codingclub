"use client" 

import React from 'react'
import '../components/homeElementCss/InfiniteScroller.css'
import { SiLeetcode, SiGeeksforgeeks,SiCodeforces, SiCodechef    } from "react-icons/si";
import { FaFreeCodeCamp } from "react-icons/fa";



const platforms = [
    {
        type:'svg',
        image: <SiLeetcode/>,
        name: 'LeetCode',
        link: 'https://www.hover.dev/components/testimonials'
    },
    {
        type:'svg',
        image: <SiGeeksforgeeks/>,
        name: 'LeetCode',
        link: 'www.leetcode.com'
    },{
        type:'svg',
        image: <SiCodechef/>,
        name: 'CodeChef',
        link: 'www.leetcode.com'
    },
    {
        type:'svg',
        image: <SiCodechef/>,
        name: 'CodeChef',
        link: 'www.leetcode.com'
    },
]

const youtubeChannels = [
    {
        type:'svg',
        image: <SiLeetcode/>,
        name: 'LeetCode',
        link: 'www.leetcode.com'
    },
    {
        type:'svg',
        image: <SiGeeksforgeeks/>,
        name: 'GeeksforGeeks',
        link: 'www.leetcode.com'
    },{
        type:'svg',
        image: <SiCodechef/>,
        name: 'CodeChef',
        link: 'www.leetcode.com'
    },
    {
        type:'svg',
        image: <SiCodechef/>,
        name: 'CodeChef',
        link: 'www.leetcode.com'
    },
]

function ResourceItem({item}){

    return(
        <a href={item.link} target='_blank' className='resourceLinkItem'>
            <div className='itemImg'>
                {
                    item.type == 'image' ? (
                        <img src={item.image} className='resourceImg' alt={item.name} />
                    ): (
                        <>
                            {item.image}
                        </>
                    )
                }
            </div>
            <h1 className='paraLarge'>
                {item.name}
            </h1>
        </a>
    )
}

function InfiniteScroller() {

  return (
    <div className='resourcesScollContainer'>
        <div 
            className='scrollContainer platformScroller'>
            {
                [ ...platforms, ...platforms].map((item, idx) => {
                    return(
                        <ResourceItem item={item} key={idx} />
                    )
                })
                 
            }
          
        </div>
          <div 
            className='scrollContainer youtubesScroller'>
            {
                [ ...youtubeChannels, ...youtubeChannels].map((item, idx) => {
                    return(
                        <ResourceItem item={item} key={idx} />
                    )
                })
                 
            }
          
        </div>
    </div>
  )
}

export default InfiniteScroller