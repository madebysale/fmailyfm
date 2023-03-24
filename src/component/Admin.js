import { Input, } from 'antd'
import React, { useEffect, useState } from 'react'
import "antd/dist/reset.css";
import mylogo from "../component/fm_logo.png";
import Table from "react-bootstrap/Table";
import "./invoice.css";
import axios from 'axios';
import moment from 'moment';


const Admin = () => {
const[finaldata ,setfinaldata] =useState([])



  useEffect(() => {
    axios
      .post("http://localhost:8000/finaldata")

      .then((response) => {
        setfinaldata(response.data);
        
        console.log(response,"sds");
      });
  }, []);


  return (
    <>
    <div>
        <h1 style={{textAlign:'center'}}>
        ADMIN TOOLS
        </h1>
        <div style={{marginLeft:"20px" ,marginTop:'20px'}}>
        <Input className='col-2 mt-3 mb-2 mx-6'></Input>
        
        </div>
        
        <div className="img" style={{marginTop:'-60px' ,marginBottom:"30px" }}>
                    <img src={mylogo} alt="React Logo" className="img-con" />
                    
                  
                    </div >

      <Table>
        <thead>
          <tr>
                       <th>name</th>
                       <th>phone</th>
                       <th>Email</th>
                       <th>Product Type</th>


                  <th>Run Dates</th>
                    <th >Mon</th>
                    <th >Tue</th>
                    <th >Wed</th>
                    <th >Thu</th>
                    <th >Fri</th>
                    <th >Sat</th>
                    <th >Sun</th>
                    <th >Wks Total</th>
                    
                
                      <th >Qty</th>
                   
                    </tr>
        </thead>
        <tbody>
        {
             finaldata.map((item)=>{
              return(
             <tr>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              <td>{item.product_type}</td>
              
{
  item.fields && item.fields.map((items)=>{
            return(

 items && items.map((data)=>{
      return(


        <>
            <td className="td-invoice">{moment(data.start_date).utc().format('MM/DD/YY')+"-"+ moment(data.end_date).utc().format('MM/DD/YY')}</td>
                  

               
                   
                   <td >{data.monday}</td> 
                  
                    <td >{data.tuesday}</td> 
                    <td >{data.wednesday}</td> 
                     <td >{data.thursday}</td> 
                     <td >{data.friday}</td>
                     <td >{data.saturday}</td>
                    <td >{data.sunday}</td>
                    <td >{data.total}</td>
                    
                    
                     <td >{data.qty}</td>
                    
        </>
      )
 })

             
       )
   })

}
</tr>



)
})
}
        </tbody>

      </Table>

      

    </div>
    </>
  )

}

export default Admin