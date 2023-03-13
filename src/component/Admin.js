import { Input, } from 'antd'
import React from 'react'
import "antd/dist/reset.css";
import mylogo from "../component/fm_logo.png";
import Table from "react-bootstrap/Table";
import "./invoice.css";


const Admin = () => {
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
                 <th>Run Dates</th>
                    <th >RUN WKS</th>
                    <th >Run Times</th>
                    <th >Mon</th>
                    <th >Tue</th>
                    <th >Wed</th>
                    <th >Thu</th>
                    <th >Fri</th>
                    <th >Sat</th>
                    <th >Sun</th>
                    <th >Wks Total</th>
                    <th >Length</th>
                    <th >Description</th>
                 
                    <th >Copy ID</th>
                    <th >Qty</th>
                    <th >Item cost</th>
                    <th >Total cost</th>
                    </tr>
        </thead>
        <tbody>
          <tr>

          </tr>

        </tbody>

      </Table>

      

    </div>
    </>
  )

}

export default Admin