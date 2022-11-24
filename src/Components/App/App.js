import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from '../Layout/Layout';
import Home from '../Home/Home'
import NotFound from "../NotFound/NotFound";
import JobDetails from "../JobDetailsComponent/JobDetails";
import { useEffect, useState } from 'react';
import modeChange from '../../js/script.js';
import data from '../../data.json'
function App() {
  let [jobs,setJobs]=useState(data);
  let [mode,setMode]=useState('light');
//   useEffect(() => {
//     modeChange(mode,setMode);
// },[]);
  const routes=createBrowserRouter([{
    path:'',element:<Layout/>,errorElement:<NotFound/>,children:[
      {index:true,element:<Home jobs={jobs} mode={mode} setMode={setMode}/>},
      {path:'job/:id',element:<JobDetails mode={mode} setMode={setMode}/>}
    ]
  }])
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
