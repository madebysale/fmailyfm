import Button from 'react-bootstrap/Button';
import  { useEffect, useRef, useState } from 'react';
import SignatureCanvas  from 'react-signature-canvas';
import './Form.css';


function SignaturePad({setsign}) {





  // const[sign,setsign]=useState([])


  
      // props.handle(sign)
   

   



  const signRef = useRef();
  const handleClear = () => console.log(signRef.current.clear());

  const options = {
    penColor: 'red',
    onEnd: () => signRef.current.toDataURL()
  };
  // console.log(sign)
  const handle=()=>{
   setsign(signRef.current.toDataURL())
  }

// console.log(sign,"dcf")


  return (
    <div className="signature-pad">
      <SignatureCanvas ref={signRef} options={options} />
      <Button className='sign-button' onClick={handleClear}>Clear</Button>
      <Button className='sign-button-1' onClick={handle}>confirm Signature</Button>
  
    </div>
      
    
  );
}
  
  
  
  export default SignaturePad;