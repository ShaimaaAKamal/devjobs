import React from 'react'
import JobCard from '../JobCardComponent/JobCard';

export default function Jobs({jobs}) {
  return (
    <div className='container py-5 my-5'>
      <div className="row g-5"> 
      
         {
          jobs.map((job,index)=> 
          <div className="col-lg-4 col-md-6" key={index}>
             <JobCard job={job}/>
          </div>
          )
         }
      </div>
    </div>
  )
}
