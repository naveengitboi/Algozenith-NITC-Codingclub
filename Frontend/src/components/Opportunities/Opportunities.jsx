import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';
import {faSackDollar} from '@fortawesome/free-solid-svg-icons';
import { faArrowUpRightFromSquare as arrow } from '@fortawesome/free-solid-svg-icons';
import { faBuildingUser } from '@fortawesome/free-solid-svg-icons';

function Opportunities() {
  const [opportunitiesdata, setOpportunitiesData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/opportunities')
      .then(response => {
        setOpportunitiesData(response.data.reverse());
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const openmodal = () =>{
    
  }

  return (
    <div>
      <div className='mt-2 grid grid-cols-1 md:mt-4 gap-6 md:grid-cols-2 lg:grid-cols-3 '>
        {opportunitiesdata.map((item, index) => (
          <div key={index} className='bg-violet-100/50 m-2 rounded-xl '>
            <div className='flex ml-8'>
              <img src={item.logo || "https://icons.veryicon.com/png/o/business/oa-attendance-icon/company-27.png"} className='mt-3 h-12 w-15' />
              <div className='mt-3 ml-5'>
                <p className='mb-1 font-medium text-lg'><b>{item.companyname}</b></p>
                <p className='bg-blue-500 rounded-xl text-white  text-sm text-center px-2'>{item.jobtype === 'fulltime' || item.jobtype === 'FTE' ? 'Fulltime' : item.jobtype === 'internship' || item.jobtype === 'intern' ? 'Internship' : 'NA'}</p>
              </div>        
            </div>
            <div className='mt-3 ml-8'>
              <h2><b>{item.jobrole}</b></h2>
              <div>
                <div className='flex'>
                <FontAwesomeIcon icon={faLocationDot} className='mt-1 mr-4' />       
                  <p>{item.location}</p>
                </div>
                <div className='flex'>
                  <FontAwesomeIcon icon={faBuildingUser} className='mr-2 mt-1'/>
                  <p>{item.jobtype === 'fulltime' || item.jobtype === 'FTE' ? 'Fulltime' : item.jobtype === 'internship' || item.jobtype === 'intern' ? 'Internship' : 'NA'}</p>
                </div>
                <div className='flex'>
                  <FontAwesomeIcon icon={faSackDollar} className='mt-1 mr-3'/>
                  <p>{item.salary}</p>
                </div>
                <div className='flex flex-wrap'>
                  <p><b>Batch:</b></p>
                  {
                    (item.batch.split(',').length > 4) ? (
                      <div className='ml-1'>{item.batch.split(',')[0]} - {item.batch.split(',')[item.batch.split(',').length - 1]}</div>
                    ) : (
                      item.batch.split(',').map((element, index) => (
                        <div key={index} className='ml-1 mr-1'>
                          {element}
                        </div>
                      ))
                    )
                  }
                </div>
              </div>
            </div>
            <div className='flex justify-end'>
              <button className='mb-5 bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded'
              onClick={openmodal}
              >Details</button>
              <a href={item.apply} className='mx-5 mb-5 bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded'>Apply {<FontAwesomeIcon icon={arrow} className='h-2.5 mb-0.5 ml-1'/>}</a>
            </div>
            {}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Opportunities;