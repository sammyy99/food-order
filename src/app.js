import React , {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body"
import RouteError from "./components/RoutingError"
import About from "./components/About"
import Contact from "./components/Contact"
import Menu from "./components/Menu";
import { createBrowserRouter , RouterProvider ,Outlet} from "react-router-dom";
import UserContext from "./util/UserContext";


const Grocery = lazy(()=>import("./components/Grocery"))


const App = () => {
  const [userName , setUserName] = useState()

  //Authentcation
  useEffect(()=>{
    // API fetch 
    const name = "Sammy"
    setUserName(name)
  },[])
  

  return (
    <div className="">
      <UserContext.Provider value = {{loggedInUser : userName , setUserName}}>
     <Header/>
     <Outlet/>
     </UserContext.Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
   path:"/",
   element:<App/>,
   children:[
    {
      path:"/",
      element: <Body/>
    },
  
    {
      path:"/about",
      element:<About/>
    },
  
    {
      path:"/contact",
      element:<Contact/>
    },

    {
      path:"/restaurant/:resId",
      element:<Menu/>
    },

    {
      path:"/grocery",
      element:<Suspense fallback={<h1>Loading</h1>}><Grocery/></Suspense>
    }
   ], 
   errorElement:<RouteError/>
  }
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter}/>);
