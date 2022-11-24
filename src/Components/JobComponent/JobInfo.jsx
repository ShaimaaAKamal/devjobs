import React from 'react'
import { Link } from 'react-router-dom'

export default function JobInfo({job}) {
  return (
     <div className='mx-auto JobheaderWidth my-5 '>
          <Link to ='/' className='text-decoration-none textGray small fw-light ps-2'><i class="fa-solid fa-chevron-left me-2"></i><span>Back to Jobs</span></Link>
          <div className='p-4 px-5 bg-white rounded-2 mt-2 lightSite'> 
              <div className='d-flex flex-column flex-md-row justify-content-md-between align-items-md-center'>
                    <div className='mb-5 mb-md-0'>
                        <div className='fs-7 text-muted mt-3'>
                            <span>{job.postedAt}</span>
                            <span className='px-2'>.</span>
                            <span>{job.contract}</span>
                        </div>
                        <h4 className='py-2 mb-1'>{job.position}</h4>
                        <div className='fs-7 textSite fw-semibold'><span>{job.location}</span></div>
                    </div>
                    <a href={job.apply} className='btn mainBtn px-4'>Apply Now</a>
              </div>
              <p className='textGray small fw-light pb-3 pt-md-3 pt-4 mt-2 mt-md-0 '>{job.description}</p>
              <h5>Requirements</h5>
              <p className='textGray small fw-light py-3 mb-2'>{job.requirements.content}</p>
              <ul className="fa-ul ms-4" style={{'--fa-li-width':'2em'}}>
              {
                job.requirements.items.map((item,index)=>  <li key={index} className='textGray small fw-light mb-1'>
                                                                <span className="fa-li"><i className="fa-solid me-3 fa-circle fs-sm textSite"></i></span>
                                                                <span className='mt-7 d-inline-block'>{item}</span>
                                                            </li>)
              }
              </ul>
              <h5>What You Will Do</h5>
              <p className='textGray small fw-light py-3 mb-2'>{job.role.content}</p>
              <ul className="fa-ul ms-4" style={{'--fa-li-width':'2em'}}>
              {
                job.role.items.map((item,index)=>  <li key={index} className='textGray small fw-light mb-1'>
                                                                <span className="fa-li"><i className={`fa-solid me-3 fa-${index+1} fs-7 textSite`}></i></span>
                                                                <span className='d-inline-block'>{item}</span>
                                                            </li>)
              }
              </ul>
          </div>
     </div>
  )
}
