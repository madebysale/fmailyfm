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
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nopagefound from './component/Nopagefound';

// import SignaturePad from './component/SignaturePad';
// import Logo from './component/Logo';
// import Popup from './component/Popup';










function App() {
  return (
    <div className="App">

        <BrowserRouter>
      <Routes>

        <Route path="/" element={<Form/>} />
        <Route path="/invoice" element={<Invoice/>}/>
        <Route path ="*" element={<Nopagefound/>}/>
      

      </Routes>

    
      </BrowserRouter>    
      {/* <Agreementpage/>
    <Form />
    {/* <Chatgpt2/> */}
    {/* <Addrow/> */}
    {/* <Chatgpt/> */}
    {/* <Field/> */}
    {/* <SignaturePad/> */}
    {/* <DateRangePicker/> */}
     {/* <Footer/> */}
   {/* <Invoice  /> */}
   {/* <Admin/> */}
   {/* <Termcondition/> */}
   {/* <Popup1/> */}
  {/* <MyModal/> */}
  
    </div>
  );
}

export default App;
