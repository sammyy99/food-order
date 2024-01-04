import React , {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body"
import RouteError from "./components/RoutingError"
import About from "./components/About"
import Contact from "./components/Contact"
import Menu from "./components/Menu";
import { createBrowserRouter , RouterProvider ,Outlet} from "react-router-dom";


const Grocery = lazy(()=>import("./components/Grocery"))

const App = () => {
  return (
    <div className="">
     <Header/>
     <Outlet/>
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
