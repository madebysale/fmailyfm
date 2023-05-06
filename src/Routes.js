import React from "react";
import { Navigate, useRoutes } from "react-router-dom";



import Invoice from "./component/Invoice";
import Tabletable from "./component/Tabletble";
import LoginForm from "./component/LoginForm";
import Viewdetail from "./component/Viewdetail";
import Termcondition from "./component/Termcondition";

import PrivateLayout from './component/Layout/private'
import PublicLayout from './component/Layout/public'
import Form from './component/Form'
import Pdf from './component/Pdf'
import Logres from "./component/Logres";
import Salesrep from "./component/Salesrep";
import Adminaccess from "./component/Adminaccess";
import Forgetpassword from "./component/Forgetpassword";
import Resetpassword from "./component/Resetpassword";
import Salesaccess from "./component/Salesaccess";




export default function Router() {
    const Isloggin = localStorage.getItem("token");
    const isrole=localStorage.getItem("role")
    
    
    return useRoutes([
      
      {
        path: "/admin",
        // element: <DashboardLayout />,
        element: Isloggin ? <PrivateLayout />:<Navigate to="/"/>,
        // element:Isrole='3'? <Salesaccess/>:<Adminaccess/>,
        children: [
      { path: "/admin", element: <Navigate to="/admin/home" replace/> },
      // { path: "home", element: <Adminaccess /> },
      { path: "home", element: <Tabletable /> },
       {path:"verifysalesrep",element: <Adminaccess />},
      { path:"invoice", element: <Invoice />  },
       { path:"form", element: <Form  /> },
       {path:'viewdetail/:id',element: <Viewdetail />},
       
                                           
       
        ],
  
     
      },

    //   {path: "/sales",
    //   // element: <DashboardLayout />,
    //   element: Isloggin ? <PrivateLayout /> : <Navigate to="/" />,
    //   children: [
    // { path: "/sales", element: <Navigate to="/sales/home" replace/> },

    // { path: "home", element: <Salesrep /> },
    // { path: "home", element: <Adminaccess /> },
    //  { path: "invoice", element: <Invoice />  },
    //  { path: "form", element: <Form  /> },

    //   ]

    //   },
      {
        path: "/",
        // element: <LogoOnlyLayout />,
        element: !Isloggin ? <PublicLayout/>:<Navigate to="/admin"/>,
        children: [
          { path: "/", element: <Navigate to="/login" replace /> },
          { path: "login", element: <LoginForm /> },
          { path: "*", element: <Navigate to="/404" /> },
          {path:"forgetpassword",element:<Forgetpassword/>},
          {path:"resetpassword",element:<Resetpassword/>},
                 
          // { path: "home", element: <Tabletable /> },
          // { path: "invoice", element: <Invoice/>  },
          //  {path:"Termcondition", element:<Termcondition />},

        ],
      },
 
  
      { path: "*", element: <Navigate to="/404" replace /> },
    ]);
  }


