import {
    BrowserRouter,
    Routes,
    Route,
    useSearchParams,
    Navigate,
   
} from "react-router-dom";

import React from 'react'
import Home from "../pages/Home";
import PageNotFound from "../components/PageNotFound";
import LoadingPage from "../components/LoadingPage";
//import Detail from "../pages/Detail";
const LazyDetail = React.lazy(() => import('../pages/Detail'));
const LazyProperties = React.lazy(() => import('../pages/Properties'));



export const Router = () => {
    
    return (
             
        <BrowserRouter>
            <Routes>          
                <Route path="/"  element={<Home />} /> 
                <Route path='*' element={<PageNotFound/>}/>  
                <Route path="/properties"  element={<React.Suspense fallback={<LoadingPage/>}><LazyProperties/></React.Suspense>} /> 
                <Route path=""  element={<Navigate to="/properties/?:goal=&:type=&:name"/>} /> 
                <Route path="/detail/:propertyId"  element={<React.Suspense fallback={<LoadingPage/>}> <LazyDetail /> </React.Suspense>} /> 
               
            </Routes>
        </BrowserRouter>
             
    )
}

export default Router
