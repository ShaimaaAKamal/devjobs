import React, { useEffect } from 'react';
import Option from '../OptionsComponent/Option';
import Jobs from '../JobsComponent/Jobs';
import modeChange from '../../js/script.js';


export default function Home({jobs,mode,setMode}) {
    useEffect(() => {
    localStorage.setItem('page','home');
    modeChange(mode,setMode);
},[]);
  return (
    <div className='parent'>
      <Option/>
      <Jobs jobs={jobs}/>
    </div>
  )
}
