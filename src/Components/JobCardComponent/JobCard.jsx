import React, { useEffect, useState } from 'react'

export default function JobCard({job}) {
  const [companyLogo,setCompanyLogo]=useState(null);
  useEffect(()=>{
    async function getLogo(){
       const logoPath="./../."+job.logo;
       const logo= await import('./../../assets/logos/scoot.svg');
          setCompanyLogo(logo.default);
    }
     getLogo();
  },[])

  // const showJob=(jobId)=>{
  //   console.log(jobId);
  // }
  return (
     <div>
       <span style={{backgroundColor:`${job.logoBackground}`}} className='d-inline-block p-2 py-3 rounded-2'>
            <img src={companyLogo} alt={job.company}/>
       </span>
        <div className='bg-white px-3 py-4 rounded-3'>
            <div className='fs-7 text-muted mt-3'>
              <span>{job.postedAt}</span>
              <span className='px-2'>.</span>
              <span>{job.contract}</span>
            </div>
            <h6 className='py-2 mb-1'>{job.position}</h6>
            {/* <h6 className='py-2 mb-1' onClick={()=>showJob(job.id)}>{job.position}</h6> */}
            <div className='fs-7 text-muted'><span>{job.company}</span></div>
            <br/><br/>
            <div className='fs-7 textSite fw-semibold'><span>{job.location}</span></div>
        </div> 
     </div>
  )
}
