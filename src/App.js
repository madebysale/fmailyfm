// import AddForm from './component/Addform';
import DateRangePicker from './component/DateRangePicker';
// import Addrow from './component/Addrow';
import Agreementpage from './component/Agreementpage';
// import Footer from './component/Footer';
import Form from './component/Form';
import { Termcondition } from './component/Termcondition';
import Invoice from './component/Invoice';
import Chatgpt from './component/Chatgpt';
import Field from './component/Field';
import Chatgpt2 from './component/Chatgpt2';
import popup1 from './component/Popup1'
import Popup1 from './component/Popup1';
import MyModal from './component/MyModel';
import Admin from './component/Admin';
import { HashRouter,Routes ,Route, } from 'react-router-dom';
import Nopagefound from './component/Nopagefound';
import Pdf from './component/Pdf';
import Mypdf from'./component/Mypdf';
import Adminpanel from './component/Adminpanel';
import Tablemake from './component/Tablemake';
import Mytable from './component/Mytable';
import AdminPanel from './component/Adminpanel';
import Tabletable from './component/Tabletble';
import Viewdetail from './component/Viewdetail';

// import SignaturePad from './component/SignaturePad';
// import Logo from './component/Logo';
// import Popup from './component/Popup';










function App() {
  return (
    <div className="App">

        <HashRouter>
      
        <Routes>
        <Route path="/" element={<Form/>} />
        <Route path="/invoice" element={<Invoice/>}/>
        <Route path ="*" element={<Nopagefound/>}/>
        <Route path ="/termandcondition" element={<Termcondition/>}/>
        <Route path='/admin'element={<Tabletable/>} />
        <Route path='/viewdetail/:id'element={<Viewdetail/>} />
      
        </Routes>
    

    
      </HashRouter>   

{/* 
      const Message = () => (
  <div>
    <Route path={ "/viewdetail"} element={<Viewdetail/>} />
  </div>
); */}



       {/* <Agreementpage/> */}
    {/* <Form /> */}

{/* <AdminPanel/> */}
    {/* <Chatgpt2/> 
    {/* <Addrow/> */}
    {/* <Chatgpt/> */}
    {/* <Field/> */}
    {/* <SignaturePad/> */}
    {/* <DateRangePicker/> */}
     {/* <Footer/> */}
   {/* <Invoice  /> */}
   {/* <Mypdf/> */}
   {/* <Admin/> */}
   {/* <Adminpanel/> */}
   {/* <Termcondition/> */}
   {/* <Popup1/> */}
  {/* <MyModal/> */}
  {/* <Pdf/> */}
  {/* <Tablemake/> */}
  {/* <Mytable/> */}
  {/* <Tabletable/> */}
  
    </div>
  );
}

export default App;
