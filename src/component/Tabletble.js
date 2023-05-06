import React, { useState, useEffect } from "react";
import axios from "axios";
// import {Pagination} from 'react-bootstrap/Pagination';
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import moment from "moment";
import { toast } from "react-toastify";
import "./Adminpanel.css";
import mylogo from "../component/fm_logo.png";
import view from "../component/view.png.png";
// import{AiOutlineLogout} from 'react-icons/ai'4
import{AiOutlineLogout} from 'react-icons/ai'
import {AiOutlineDelete} from 'react-icons/ai'

import { Input, Select } from "antd";

import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Field } from "formik";
import { Option } from "antd/es/mentions";
// const isrole = localStorage.getItem('role')

// console.log(isrole ,"isrole")
// console.log(isrole,'sad')

function Tabletable() {


  const navigate = useNavigate();
    const [isrole, setIsrole] = useState(parseInt(localStorage.getItem("role")));
  const [Data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const[Delete,setDelete]=useState()
  
  useEffect(() => {

    function handleStorageChange() {
      setIsrole(parseInt(localStorage.getItem("role")));
    }

    window.addEventListener("storage", handleStorageChange);
  
      axios.post("http://localhost:8080/api/public/list",{},
        {
          headers:{'x-token': localStorage.getItem("token"),
        },
        
      })

      .then((response) => {
        setData(response.data.data);
        // localStorage.setItem("role",role)
        // console.log(response.data.data.role,"role")


        console.log(response,"sds");})

        return () => {
          window.removeEventListener("storage", handleStorageChange);
        };
    
   
  }, []);


 const getdata=()=>{
  axios.post("http://localhost:8080/api/public/list"
 )

  .then((response) => {
    setData(response.data.data);

    console.log(response, "sds");})
 }

 
 




  const [expandedRow, setExpandedRow] = useState(null);



  const handleRowClick = (rowId) => {
    setExpandedRow(expandedRow === rowId ? null : rowId);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const filteredData = Data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      moment(item.contract_date).utc().format("Do MMMM, YYYY").toLowerCase().includes(searchTerm.toLowerCase()) ||
  
      item.email.toLowerCase().includes(searchTerm.toLowerCase())||
      String(item.phone).toLowerCase().includes(searchTerm.toLowerCase()) ||
      String(item.sales_rep).toLowerCase().includes(searchTerm.toLowerCase()) ||
      String(item.event).toLowerCase().includes(searchTerm.toLowerCase()) ||
      String(item.orderid).toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  
const handleLogout =()=>{
  localStorage.removeItem('token');
  localStorage.removeItem('role')
  navigate('/')
}


const onDelete = (id) => {
  axios.post(`http://localhost:8080/api/public/delete/${id}`)
  .then(response => {
    console.log(response.data);
    getdata()
    toast.success(response.data.message);
    

  })
  .catch(error => {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log(error.message);
    }
  });
}


// const onISadmin=()=>{
//   axios.post(`http://localhost:8080/api/public/adminaccess/${id}`)
// }






  return (

  
    <>
    <div className="container">
    <div className="header-div">
    {/* <h1 className="mt-3 heading ant-table-thead main-header">Admin Panel</h1> */}
    </div>

      
    

              <div className="mt-3 logout">
               <p style={{border:"none",marginTop:"-5px"}} onClick={handleLogout}>
                    {/* Logout */}
                    <i style={{color:'red'}}><AiOutlineLogout size={35}/></i>
                    </p>
                    </div>
      
       <div className="row">
        <div className="col-2 admin-left">
            <img src={mylogo} alt="React Logo" className="img-ad" /> 
      <div className= "admin-left-field">

    {/* <input placeholder="Create invoice"/> */}
    {/* <Select  placeholder="Create invoice">
    <Option><Link to='/admin/form'>Create invoice +</Link> </Option>

    </Select>
    
    {isrole ===3?null :
    <Select placeholder='verify sales rep' className="admin-left-drop">
    <Option><div>
      <div className="">
    <Link to="/admin/verifysalesrep">verify sales rep</Link>
  </div>
    </div></Option>

    </Select>} */}

<div className="admin-left-div"><Link to='/admin/form'>Create invoice +</Link></div>
<div className="admin-left-div"> {isrole ===3?null :<div className="">
    <Link to="/admin/verifysalesrep">verify sales rep</Link></div>}
  </div>
  {/* <div>sales rep active =21</div> */}
  
    
    
      {/* <div className="" ><Link to='/admin/form'>Create invoice +</Link></div>  */}


      {/* <div>
      {isrole ===3?null :<div className="">
    <Link to="/admin/verifysalesrep">verify sales rep</Link>
  </div>}
    </div> */}


      
     
        {/* <img src={mylogo} alt="React Logo" className="img-ad" /> */}
      </div>
      </div> 
           <div className="col-10">
                <h1 className="mt-3 heading ant-table-thead main-header">Admin Panel</h1>

           <div className="search-admin">
           <Input
        placeholder="Search"
        className="col-2 mt-5 mb-1 mx-6 input"
        value={searchTerm}
        onChange={handleSearch}
      ></Input>
           </div>
      

      <Table className="ad-table table-responsive" style={{}}>
        <thead>
          <tr className="head-row">
            <th></th>
            <th>Sales rep</th>
            <th>Name</th>
            <th>contract Date</th>
            <th>Email</th>
            <th>phone</th>
            <th>event</th>
      
            <th></th>
            <th></th>
        
          
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => {
            console.log(item.role,'s')
            return (
              <React.Fragment key={index}>
                <tr onClick={() => handleRowClick(index)}>
                  <td className="plus-btn">+</td>
                  <td>{item.sales_rep}</td>
                  <td>{item.name}</td>
                  <td>{moment(item.contract_date).utc().format("MM/DD/YY")}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.event}</td>
                  
                 
                   

                 
               
                <td><img src={view} alt="React view"className="view-img" onClick={()=>navigate(`/admin/viewdetail/${item.id}`,{replace:true})}/></td>
                <td><i style={{color:'red', cursor:'pointer'}} onClick={() =>onDelete(item.id)} ><AiOutlineDelete size={35}/></i></td>
                {/* <td><Button className={item.isActive ? 'active-button' : 'inactive-button'} onClick={()=>onISadmin(item.id)}>
                                          {item.isActive ? 'Active' : 'Inactive'}
                                                                </Button></td>    */}
                </tr>
           
              </React.Fragment>
            );
          })}
        </tbody>
      </Table>
      </div>
      </div>

      <Pagination
       style={{alignItems:'center'}} 
        itemsPerPage={itemsPerPage}
        totalItems={filteredData.length}
        paginate={paginate}
      />
       </div>
    </>
   
    
  );

  function Pagination({ itemsPerPage, totalItems, paginate }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <div>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <button onClick={() => paginate(number)} className="page-link" disabled = {number===currentPage}>
                {number}
              </button>
            </li>
          ))}
        </ul>
      </div>
      
    );
  }
}
export default Tabletable;
