import React from 'react'
import { useLocation } from 'react-router-dom';
import JobHeader from '../JobHeader/JobHeader';
import JobInfo from '../JobComponent/JobInfo';

export default function JobDetails() {
  const location=useLocation()
  const jobDetails=location.state.details;
  const logo=location.state.logo
  return (
    <>
        <div className='parent'>
          <JobHeader job={jobDetails} logo={logo}/>
          <JobInfo job={jobDetails}/>   
        </div>
        <footer className='bg-white shadow py-3'>
            <div className='mx-auto JobheaderWidth px-5 d-flex justify-content-between align-items-center'>
                <div className='ms-3 d-none d-md-block'>
                      <h6>{jobDetails.position}</h6>
                      <span className='textGray fw-light small'>So Digital Inc.</span>
                </div>
                <a href={jobDetails.apply} className='btn ApplyBtn mainBtn px-4 '>Apply Now</a>
            </div>
        </footer>
    </>
  )
}
