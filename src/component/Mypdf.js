import React, { useRef } from 'react';
import { PDFExport } from 'react-to-pdf';
import Invoice from './Invoice';

const Mypdf = () => {
  const pdfRef = useRef(null);

  const handleDownloadPDF = () => {
    pdfRef.current.save();
  };

  return (
    <div>
      <button onClick={handleDownloadPDF}>Download PDF</button>
      <PDFExport scale={0.7} fileName="invoice.pdf" ref={pdfRef}>
        <Invoice />
      </PDFExport>
    </div>
  );
};

export default Mypdf;
