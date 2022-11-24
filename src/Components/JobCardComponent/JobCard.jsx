import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function JobCard({job}) {
  const navigate=useNavigate()
  const [companyLogo,setCompanyLogo]=useState(null);
  useEffect(()=>{
    async function getLogo(){
       const logo=  await import(`../../assets${job.logo}`)
          setCompanyLogo(logo.default);
    }
     getLogo();
  },[])

  const showJob=(job)=>{
    navigate(`/job/${job.id}`,{state:{details:job,logo:companyLogo}});
  }
  return (
     <div className='position-relative '>
       <span style={{backgroundColor:`${job.logoBackground}`}} className='cardLogo  rounded-2 position-absolute translate-middle-y ms-5'>
            <img src={companyLogo} alt={job.company}/>
       </span>
        <div className='bg-white  p-4 rounded-3 lightSite'>
            <div className='fs-7 text-muted mt-3'>
              <span>{job.postedAt}</span>
              <span className='px-2'>.</span>
              <span>{job.contract}</span>
            </div>
            <h6 className='py-2 mb-1 jobPosition' onClick={()=>showJob(job)}>{job.position}</h6>
            <div className='fs-7 text-muted'><span>{job.company}</span></div>
            <br/><br/>
            <div className='fs-7 textSite fw-semibold'><span>{job.location}</span></div>
        </div> 
     </div>
  )
}
