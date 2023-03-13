 import'./Form.css'
 import { useEffect,useState } from 'react';
// import { Form } from 'formik'
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
 import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { Termcondition } from './Termcondition';
// import { Card } from 'antd';
import Card from 'react-bootstrap/Card'
import mylogo from "../component/fm_logo.png";




const Agreementpage = () => {
  const[apidata,setapidata]=useState([])


useEffect(() =>{
  axios.post("http://localhost:8000/listdata")
 
  .then((response) => {
    setapidata(response.data);
    console.log(response,'sds')
})

}, [])


  return (
      <>
    <div className='aggreement-con'>
    <div className='logo-address-con'>
    <div className="logo-container">
                    <img src={mylogo} alt="React Logo" className="img" />
                  </div>
        <div className='address-container'>

        Langsford Estate<br/>
      P.O. Box W1102<br/>
       All Saints Rd<br/>
       St John's, Antigua<br/>
       Tel (268) 560- 7578/9<br/>
        Email: info@familyfm.ltd<br/>
        </div>
        </div>
   
        <div className='text-con'>Advertising Investment Agreement</div>
    
       
          
        {

          apidata.map((data)=>{
            console.log({data},'data')
            return(

               <>
               
              <div className='agg-form'>
               
              <div><span className='agg-form-input'>Contract Dates</span> : {data.contract_date}</div>
              <div><span className='agg-form-input'>Name</span> : {data.name}</div>
              <div><span className='agg-form-input'>Advertiser</span> : {data.advertiser}</div>
              <div><span className='agg-form-input'>Phone</span> : {data.phone}</div>
              <div><span className='agg-form-input'>Sales Rep</span> : {data.sales_rep}</div>
              <div><span className='agg-form-input'>Event Name</span> : {data.event}</div>
              <div><span className='agg-form-input'>Email</span> : {data.email}</div>
              </div>
              
             



       

             <div className='agg-table'>
            <Table className='sm-col-8 ' striped bordered hover variant="light">
      <thead>
        <tr>
          <th>PRODUCT</th>
          <th>RUN TIME</th>
          <th>RATE</th>
          <th>DISCOUNT</th>
          <th>COST</th>
          <th>DISCOUNTED COST</th>
          <th>COST(W/TAX)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.product_type}</td>
          <td>{}</td>
          <td>{data.rate}</td>
          <td>{data.discount}</td>
          <td>{data.cost}</td>
          <td>{data.discounted_cost}</td>
          <td>{data.cost_tax}</td>
        </tr>
       
      </tbody>
    </Table>


    <Table className='sm-col-8 ' striped bordered hover variant="light">
      <thead>
        <tr>
          <th>PRODUCT</th>
          <th>RUN TIME</th>
          <th>SUNDAY</th>
          <th>MONDAY</th>
          <th>TUESday</th>
          <th>WEDNESDAY</th>
          <th>THURSDAY</th>
          <th>FRIDAY</th>
          <th>SATURDAY</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.product_type}</td>
          <td>{}</td>
          <td>{data.sunday}</td>
          <td>{data.monday}</td>
          <td>{data.tuesday}</td>
          <td>{data.wednesday}</td>
          <td>{data.thursday}</td>
          <td>{data.friday}</td>
          <td>{data.saturday}</td>
         
        </tr>
       
      </tbody>
    </Table>

       
    </div>
    <div className='total'>Total Amount :- ${data.cost}</div>
    </>
        )
      })
    } 


    
    </div>
      <Termcondition/>
    </>
  )


}

export default Agreementpage