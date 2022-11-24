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

  const getSearchData=(location,fullTime,title,displayed)=>{
    if(location && fullTime && title){
      displayed=jobs.filter(job =>  (job['location'].toLowerCase() === location.toLowerCase()
       && job['contract']==="Full Time" 
       && (job['company'].toLowerCase() === title.value.trim().toLowerCase() ||  job['position'].toLowerCase === title.value.trim().toLowerCase())))
    }
    else if(!location && fullTime && title){
      displayed=jobs.filter(job =>  ( job['contract']==="Full Time" 
      && (job['company'].toLowerCase() === title.value.trim().toLowerCase() ||  job['position'].toLowerCase === title.value.trim().toLowerCase())))
    }
    else if(!location && fullTime && !title){
      displayed=jobs.filter(job =>  ( job['contract']==="Full Time" ))
    }
    else if(location && fullTime && !title){
      displayed=jobs.filter(job =>  ( job['contract']==="Full Time" && job['location'].toLowerCase() === location.toLowerCase() ))
    }
    else if(location && !fullTime && !title){
      displayed=jobs.filter(job =>  (job['location'].toLowerCase() === location.toLowerCase() ))
    }
    else if(location && !fullTime && title){
      displayed=jobs.filter(job =>  (job['location'].toLowerCase() === location.toLowerCase()
       && (job['company'].toLowerCase() === title.value.trim().toLowerCase() ||  job['position'].toLowerCase === title.value.trim().toLowerCase())))
    }
    else if(!location && !fullTime && title){
      displayed=jobs.filter(job =>  ((job['company'].toLowerCase() === title.value.trim().toLowerCase() ||  job['position'].toLowerCase() === title.value.trim().toLowerCase())))
    }
    else if(!location && !fullTime && !title){
      displayed=jobs
    }

    return displayed
  }
  const handleSearch=()=>{
    const titleElements=document.querySelectorAll('.titleKey');
    const title =Array.from(titleElements).find(element => element.value !== '')
    const location=document.querySelector('#locationKey').value.trim();
    const fullTime=document.querySelector('#checkFull').checked;
    let displayed=[];
    displayed=getSearchData(location,fullTime,title,displayed)
    if(index.current >= displayed.length) 
     {setMore(false) ;
      setJobs(displayed);
    }
    else {
       setJobs(displayed.slice(0,index.current));
      setMore(true);
    }
  }

  return (
    <div className='parent'>
      <Option handleSearch={handleSearch}/>
      {
        (displayJobs.length === 0)?<div className='bg-white lightSite p-3 my-5 textGray text-center'>
                                      There are No Available Jobs 
                                </div>: <>
                                <Jobs jobs={displayJobs}/>
                                <div className='text-center'>
                                  {more && <button className='btn mainBtn' onClick={loadMore}>Load More</button>}
                                </div>
                                        </>

      }
      
     
    </div>
  )
}
