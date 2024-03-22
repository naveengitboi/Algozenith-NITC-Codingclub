import React from 'react';
import {Link} from 'react-router-dom';
import './index.css'
import Counter from '../../elements/Counter';
import JobsHome from '../homeElements/JobsHome';

const counterData = [
    {
        count: 30,
        description: 'Editorials & Contests'
    },
    {
        count: 70,
        description: 'Job Posts'
    },
    {
        count: 500,
        description: 'Students Community'
    },
]

export default function Home() {
    return (
        <div className="pagePadding commonPadding">
            <div className='homeHeroContainer'>
                <div className="heroDetails">
                    <h1 className='medLSize'>Stop <br /> <span className='largerSize'>Chaos</span> roadmaps</h1>
                    <p className='paraSmall paraText'>
                        we believe that coding is not just about writing lines of code; it's about unlocking the potential to innovate, create, and problem-solve. 
                    </p>

                    <div className="numbersCount">
                        {
                            counterData.map((item, idx) => {
                                return(
                                    <Counter key={idx} data={item} />
                                )
                            })
                        }
                    </div>
                </div>
                <div className="heroImg">
                    <img src="/images/algogrid.png" alt="algoclubgrid" />
                </div>
            </div>

            <div className='gradMidLine'></div>

            <JobsHome/>
            
        </div>
    );
}


