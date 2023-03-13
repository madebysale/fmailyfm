import Button from 'react-bootstrap/Button';
import  { useRef } from 'react';
import SignatureCanvas  from 'react-signature-canvas';
import './Form.css';


function SignaturePad() {
  const signRef = useRef();
  const handleClear = () => signRef.current.clear();

  const options = {
    penColor: 'black',
    onEnd: () => console.log(signRef.current.toDataURL()),
  };

  return (
    <div className="signature-pad">
      <SignatureCanvas ref={signRef} options={options} />
      <Button className='sign-button' onClick={handleClear}>Clear</Button>
    </div>
  );
}
  
  
  
  export default SignaturePad;