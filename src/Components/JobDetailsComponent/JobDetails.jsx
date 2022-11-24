import React from 'react'
import { useLocation } from 'react-router-dom'

export default function JobDetails({id}) {
  const location=useLocation()
  const jobDetails=location.state.details;
  return (
    <div>
      
    </div>
  )
}
