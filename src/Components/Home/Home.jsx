import React, { useEffect, useRef, useState } from 'react';
import Option from '../OptionsComponent/Option';
import Jobs from '../JobsComponent/Jobs';
import modeChange from '../../js/script.js';

export default function Home({jobs,mode,setMode}) {
    const index=useRef(9)
    const[displayJobs,setJobs]=useState([])
    const [more,setMore]=useState(true)
    useEffect(() => {
    localStorage.setItem('page','home');
    modeChange(mode,setMode);
    if(index.current <= jobs.length)
    {setJobs(jobs.slice(0,index.current))}
    else
   { setJobs(jobs.slice(0,jobs.length));
      setMore(false);
   }
},[]);

useEffect(() => {
  localStorage.setItem('page','home');
  modeChange(mode,setMode);
},[displayJobs]);

  const loadMore=()=>{
    index.current=index.current+8;
    if(index.current <= jobs.length)
    setJobs(jobs.slice(0,index.current))
    else
   { setJobs(jobs.slice(0,jobs.length));
      setMore(false);
   }
  }
  return (
    <div className='parent'>
      <Option/>
      <Jobs jobs={displayJobs}/>
      <div className='text-center'>
        {more && <button className='btn mainBtn' onClick={loadMore}>Load More</button>}
      </div>
    </div>
  )
}
