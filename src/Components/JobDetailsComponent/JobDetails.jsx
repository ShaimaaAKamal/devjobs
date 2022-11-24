import React from 'react'
import { useLocation } from 'react-router-dom';
import JobHeader from '../JobHeader/JobHeader';
import JobInfo from '../JobComponent/JobInfo';

export default function JobDetails() {
  const location=useLocation()
  const jobDetails=location.state.details;
  return (
    <div className='parent'>
       <JobHeader job={jobDetails}/>
       <JobInfo job={jobDetails}/>   
    </div>
  )
}
