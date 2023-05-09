import React from 'react'
import Header from '../src/components/Header'
import Body from '../src/components/Body'
import Footer from '../src/components/Footer'
import { createBrowserRouter,Outlet } from 'react-router-dom'
import AboutUs from '../src/components/AboutUs'
import ErrorPage from './components/Error'
import Contact from './components/Contact'
import RestroDetails from './components/RestroDetails'

const App = () => {
  return (
    <>
    <Header/>
    <Outlet/> {/* We need pages should have Header and footer always. and all middle componets from children are got into Outlet*/}
   
    <Footer/>

    </>
  );
  // <Body/>
  // <Contact/>
  // <about/>
};
//this should only after app body.
//Below is only configuration.
export const AppRouter = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<ErrorPage/>,
        children:[{
          path:"/about",
          element:<AboutUs/>

        },
        {
          path:"/",
          element:<Body/>

        },
        {
          path:"/contact",
          element:<Contact/>

        },
        {
          path:"/restaurant/:resId",
          element:<RestroDetails/>

        },]

    },
]);

export default App