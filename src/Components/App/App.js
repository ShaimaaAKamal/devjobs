import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from '../Layout/Layout';
import Home from '../Home/Home'
import NotFound from "../NotFound/NotFound";
import { useEffect } from 'react';
import modeChange from '../../js/script.js';

function App() {
  useEffect(() => {
    modeChange();
},[]);
  const routes=createBrowserRouter([{
    path:'',element:<Layout/>,errorElement:<NotFound/>,children:[
      {index:true,element:<Home/>}
    ]
  }])
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
