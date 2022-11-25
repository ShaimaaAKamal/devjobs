import React, { useEffect } from 'react'
import NotFoundImage from '../../assets/404.png'
import { Link } from 'react-router-dom';

export default function NotFound({mode}) {
  const handleCick=()=>{
    document.body.style.backgroundColor=(mode=== 'light')?'#F4F6F8':'#121721';
  }
  useEffect(()=>{
    document.body.style.backgroundColor='#262A37';
  },[])
  return (
    <div className='vh-100 d-flex align-items-center justify-content-center position-relative'>
    <Link to='/' className='text-decoration-none textGray fw-bold ps-2 errorBack position-absolute' onClick={handleCick}><i className="fa-solid fa-chevron-left me-2"></i><span>Back to Jobs</span></Link>
    <img src={NotFoundImage} alt="404 Image" className='w-100' />
   </div>
  )
}
