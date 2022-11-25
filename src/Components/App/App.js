import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from '../Layout/Layout';
import Home from '../Home/Home'
import NotFound from "../NotFound/NotFound";
import JobDetails from "../JobDetailsComponent/JobDetails";
import {useState } from 'react';
import data from '../../data.json'
function App() {
  const initMode=localStorage.getItem('mode')?localStorage.getItem('mode'):'light'
  let [jobs,setJobs]=useState(data);
  let [mode,setMode]=useState(initMode);
  const routes=createBrowserRouter([{
    path:'',element:<Layout/>,errorElement:<NotFound jobs={jobs} mode={mode} setMode={setMode}/>,children:[
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
