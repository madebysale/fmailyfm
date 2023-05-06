// import AddForm from './component/Addform';
// import DateRangePicker from './component/DateRangePicker';
import Agreementpage from "./component/Agreementpage";
// import Footer from './component/Footer';
import Form from "./component/Form";
import { Termcondition } from "./component/Termcondition";
import Invoice from "./component/Invoice";

import Admin from "./component/Admin";
import {
  HashRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
  redirect,
} from "react-router-dom";
import Nopagefound from "./component/Nopagefound";
import Pdf from "./component/Pdf";

import Router from './Routes'

import Tabletable from "./component/Tabletble";
import Viewdetail from "./component/Viewdetail";
import LoginForm from "./component/LoginForm";
import { ToastContainer } from "react-toastify";
import MOnth from "./component/MOnth";
import Register from "./component/Register";
import Logres from "./component/Logres";
import { Userlogin } from "./component/Userlogin";
import Radio from "./component/Radio";
import Adminmain from "./component/Adminmain";

// import LoginPage from './component/LoginPage';

// import SignaturePad from './component/SignaturePad';
// import Logo from './component/Logo';
// import Popup from './component/Popup';




function App() {
  return (
    <div className="App">
         {/* <Router/> */}
       {/* <Radio/> */}
       <Adminmain/>
      <ToastContainer /> 

     {/* <Logres/> */}
     {/* <Register/> */}
     {/* <Userlogin/> */}
    </div>
  );
}

export default App;
