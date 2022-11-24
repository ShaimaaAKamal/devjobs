import React from 'react';


export default function Option() {
  
  return (
    //  <div className='parent'>
        <div className='container bg-white option px-0 lightSite '>
            <div className="row g-0">
            <div className="col-md-4 col-lg-5  d-md-none">
              <div className="input-group ">
                  <input type="text" className="form-control py-3 rounded-0 form-control-lg" placeholder="Filter by title" id='titleKey' aria-label="Filter Key" aria-describedby="basic-addon1"/>
                  <span className="input-group-text px-2 rounded-2" id="basic-addon1">
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" className='me-3'>
                      <path d="M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z" fill="#6E8098" fillRule="nonzero"/>
                    </svg>
                    <span className='mainBtn p-2 rounded-3'>
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z" fill="#fff" fillRule="nonzero"/>
                        </svg>
                    </span>
                  </span>
              </div>
              </div>
              <div className="col-md-4 col-lg-5 d-none d-md-block ">
              <div className="input-group">
                  <span className="input-group-text ps-3 pe-0 rounded-2" id="basic-addon1">
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z" fill="#5964E0" fillRule="nonzero"/>
                    </svg>
                  </span>
                  <input type="text" className="form-control  rounded-0 form-control-lg d-md-inline-block d-lg-none" placeholder="Filter by title" id='titleKey' aria-label="Filter Key" aria-describedby="basic-addon1"/>
                  <input type="text" className="form-control  rounded-0 form-control-lg d-lg-inline-block d-none " placeholder="Filter by title, companies, expertise…" id='titleKey' aria-label="Filter Key" aria-describedby="basic-addon1"/>

              </div>
              </div>
              <div className="col-md-4 col-lg-3 px-2 bordergray d-none d-md-block">
                    <div className="input-group ">
                        <span className="input-group-text ps-3 pe-1  rounded-0" id="basic-addon1">
                        <svg width="17" height="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z" fill="#5964E0" fillRule="nonzero"/>
                        </svg>
                        </span>
                        <input type="text" className="form-control ps-2 rounded-0 form-control-lg" placeholder="Filter by location…" id='locationKey' aria-label="Filter Key" aria-describedby="basic-addon1"/>
                    </div>
              </div>
              <div className="col-md-4 col-lg-4 ps-2 d-none d-md-block">
                  <div className='px-3 d-flex justify-content-between align-items-center h-100 '>
                        <div className="form-check">
                              <input className="form-check-input" type="checkbox" value="fullTime" id="checkFull"/>
                              <label className="form-check-label  d-none d-lg-inline-block" htmlFor="checkFull">
                              Full Time Only                    
                              </label>
                              <label className="form-check-label  d-none d-md-inline-block d-lg-none" htmlFor="checkFull">
                              Full Only                    
                              </label>
                        </div>
                        <button className='btn mainBtn'>Search</button>
                  </div>
              </div>
            </div>
        </div>
    //  </div>
     
  )
}
