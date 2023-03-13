import React, { useEffect, useState } from "react";
import mylogo from "../component/fm_logo.png";
import "./invoice.css";
import Table from "react-bootstrap/Table";
import axios from "axios";
import moment from 'moment'
import { useLocation } from "react-router-dom";





const Invoice = () => {

   
  // const location = useLocation();
  // const {values} = location.values;
  // console.log(values,"fd")


  const [apidata, setapidata] = useState([]);
  // const [finaldata, setfinaldata] = useState({});
  useEffect(() => {
    axios
      .post("http://localhost:8000/listdata")

      .then((response) => {
        setapidata(response.data);
        
        console.log(response, "sds");
      });
  }, []);
  // useEffect(() => {

      
  //       setfinaldata(values);
        
    
  // }, [values]);

  return (
    <div className="main-container">



         {
         apidata.map((type)=>{
            // console.log(type,"type")
            return(
                     <> 

                   <div className="img">
                    <img src={mylogo} alt="React Logo" className="img-con" />
                    <p className="order-id">OrderID: {type.orderid}</p>
                    </div>
                    <div >
                    <p className="order-detail"> ORDER CONFIRMATION INVOICE</p>
                    </div>
              <div className="invoice-add-con"> {/*454*/ }
            
              <div className="vibzfm-add">
              <span className="family" >FAMILY FM, VIBZ FM</span>
              <br/>
                    Langsford Estate
                    <br />
                    P.O. Box W1102
                    <br />
                    All Saints Rd
                    <br />
                    St John's, Antigua
                    <br />
                    Tel (268) 560- 7578/9
                    <br />
                    Email: info@familyfm.ltd
                    <br />
                  </div>
                
                <div className="invoice-con-address">
                  <div className="bill-div">Bill To: <span className="bill-span" >{type.name}</span></div>
                    {/* <p><span className="span-detail">Sponsor:</span></p> */}
                    <p><span className="span-detail-1">Estimate/PO:</span>Audley Goodwin</p>
                    <p><span className="span-detail-2">AccountRep:</span>Audley Goodwin</p>
                    <p><span className="span-detail-3">BillingCycle:</span>Calendar Month</p>
                    <p><span className="span-detail-4">InvoiceType:</span>Times/Rates</p>
                    <p><span className="span-detail-5">Run Dates:</span>{moment(type.start_date).utc().format('L')+"-"+moment(type.end_date).utc().format('L')} </p>
                    
                    <p> <span className="span-detail-6">Items Ordered:</span> {}</p>
                  
                  </div>
                
              </div>
              <div className="invoice-heading">
                <div>Scheduled Station(s): VIBZ FM</div>
                {/* <div>{type.name}</div> */}

              </div>
          


              <table
              role={'table'}
                className="table-invoice"
                // striped
                // bordered
                // hover
                // variant="light"
              >
                {/* <thead style={{borderTop:"2px solid black",borderBottom:"2px solid black",lineHeight:"20px",background:'orangered',color:'white'}}> */}
                <thead className="table-head-invoice" role={'rowgroup'}>
                  <tr className="tr-invoice" >
                    <th className="th-invoice"  role={"columnheader"} >Run Dates</th>
                    <th className="th-invoice" role={"columnheader"}>RUN WKS</th>
                    <th className="th-invoice" role={"columnheader"}>Run Times</th>
                    <th className="th-invoice" role={"columnheader"}>Mon</th>
                    <th className="th-invoice" role={"columnheader"}>Tue</th>
                    <th className="th-invoice" role={"columnheader"}>Wed</th>
                    <th className="th-invoice" role={"columnheader"}>Thu</th>
                    <th className="th-invoice" role={"columnheader"}>Fri</th>
                    <th className="th-invoice" role={"columnheader"}>Sat</th>
                    <th className="th-invoice" role={"columnheader"}>Sun</th>
                    <th className="th-invoice" role={"columnheader"}>Wks Total</th>
                    <th className="th-invoice" role={"columnheader"}>Length</th>
                    <th className="th-invoice" role={"columnheader"}>Description</th>
                    <th className="th-invoice" role={"columnheader"}>Avail Type</th>
                    <th className="th-invoice" role={"columnheader"}>Copy ID</th>
                    <th className="th-invoice" role={"columnheader"}>Qty</th>
                    <th className="th-invoice" role={"columnheader"}>Item cost</th>
                    <th className="th-invoice" role={"columnheader"}>Total cost</th>
                  </tr>
                </thead>
                {/* <tbody style={{borderBottom:'3px solid black' ,lineHeight:'1px'}}>  */}


                
                <tbody className="tbody-invoice" role={'rowgroup'}>

                {
                type.fields && type.fields.map((item )=> {
                  // console.log(item,"dd")
           return ( 
        
                  <tr className="tr-invoice" >
                    {/* <td>{item.startdate-item.enddate}</td> */}
                    <td className="td-invoice">{moment(item.start_date).utc().format('MM/DD/YY')+"-"+ moment(item.end_date).utc().format('MM/DD/YY')}</td>
                    <td className="td-invoice">ALL WEEKS</td>
                    <td className="td-invoice">dffsdfsd</td>
                    <td className="td-invoice">{item.monday}</td> 
                    <td className="td-invoice">{item.tuesday}</td> 
                    <td className="td-invoice">{item.wednesday}</td> 
                     <td className="td-invoice">{item.thursday}</td> 
                     <td className="td-invoice">{item.friday}</td>
                     <td className="td-invoice">{item.saturday}</td>
                    <td className="td-invoice">{item.sunday}</td>
                    <td className="td-invoice">{item.total}</td>
                    <td className="td-invoice">:33</td>
                    <td className="td-invoice">{item.product_type}</td>
                    <td className="td-invoice">54ddd</td>
                    <td className="td-invoice">CBMF </td>
                     <td className="td-invoice">{item.qty}</td>
                    <td className="td-invoice">[Package]</td>
                    <td className="td-invoice">[Package]</td>
                  </tr>
                
           )
        }  )
      }
                 

            </tbody>




              </table>


              </>

               )
     } )}
                

              <div className=" total-amount" > <p>Ordered Amount:</p>
                    <p>+ABST 2</p>
                    <p>Total Amount:</p></div>
          
               
               <div className="writing-field">
                <div className="sing-1">Entered by </div>
                <div  className="sing-2">Reviewed by</div>
               </div>
       
   
    </div>
  );
};

export default Invoice;
