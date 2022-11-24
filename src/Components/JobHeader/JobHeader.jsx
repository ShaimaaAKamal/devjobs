import React, { useEffect, useState } from 'react';

export default function JobHeader({job,logo}) {
  return (
    <div className='mx-auto JobheaderWidth'>
        <div className='row bg-white gx-0 rounded-1 '>
                <div className='col-md-2 col-lg-2 d-none d-md-block'>
                <div className='w-100 h-100 d-flex justify-content-center align-items-center' style={{backgroundColor:`${job.logoBackground}`}}>
                    <img src={logo} alt={job.company} />
                </div>
                </div>
                <div className='col-md-10 col-lg-10 px-md-3 py-4'>
                       <div className='position-relative'>
                            <span style={{backgroundColor:`${job.logoBackground}`}} className='logoMove  d-md-none cardLogo rounded-2 position-absolute'>
                                <img src={logo} alt={job.company}/>
                            </span>
                            <div className='d-flex flex-column flex-md-row justify-content-md-between align-items-center pt-4 pt-md-0 '>
                                        <div className='mb-4 mb-md-0'>
                                            <h5 className='mb-0 pb-0'>{job.company}</h5>
                                            <span className='text-muted fs-7'>{`${job.company.toLowerCase()}.com`}</span>
                                        </div>
                                        <a href={job.website} className='lightBtn small text-decoration-none px-3 py-2 rounded-1' >Company Site</a>
                                </div>
                       </div>
                </div>
        </div>
    </div>
  )
}

