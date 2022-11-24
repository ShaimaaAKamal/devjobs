import React from 'react';
import Option from '../OptionsComponent/Option';
import Jobs from '../JobsComponent/Jobs';

export default function Home({jobs}) {
  return (
    <div className='parent'>
      <Option/>
      <Jobs jobs={jobs}/>
    </div>
  )
}
