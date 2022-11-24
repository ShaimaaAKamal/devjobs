import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from '../Layout/Layout';
import Home from '../Home/Home'
import NotFound from "../NotFound/NotFound";
import { useEffect, useState } from 'react';
import modeChange from '../../js/script.js';
import data from '../../data.json'
function App() {
  let [jobs,setJobs]=useState(data)
  useEffect(() => {
    modeChange();
},[]);
  const routes=createBrowserRouter([{
    path:'',element:<Layout/>,errorElement:<NotFound/>,children:[
      {index:true,element:<Home jobs={jobs}/>}
    ]
  }])
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
