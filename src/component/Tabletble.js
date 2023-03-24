import React, { useState, useEffect } from "react";
import axios from "axios";
// import {Pagination} from 'react-bootstrap/Pagination';
import Table from "react-bootstrap/Table";
import moment from "moment";
import "./Adminpanel.css";
import mylogo from "../component/fm_logo.png";
import view from "../component/view.png.png";

import { Input } from "antd";
// import Viewdetail from "./Viewdetail";
import { useNavigate } from 'react-router-dom';

function Tabletable() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
 

  useEffect(() => {
    axios
      .post("http://localhost:8000/finaldata")

      .then((response) => {
        setData(response.data);

        console.log(response, "sds");
      });
  }, []);

  const [expandedRow, setExpandedRow] = useState(null);

  const handleRowClick = (rowId) => {
    setExpandedRow(expandedRow === rowId ? null : rowId);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      moment(item.contract_date).utc().format("MM/DD/YY").toLowerCase().includes(searchTerm.toLowerCase()) ||
  
      item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      String(item.phone).toLowerCase().includes(searchTerm.toLowerCase()) ||
      String(item.sales_rep).toLowerCase().includes(searchTerm.toLowerCase()) ||
      String(item.event).toLowerCase().includes(searchTerm.toLowerCase()) ||
      String(item.orderid).toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <h1 className="mt-3 heading ant-table-thead">Admin Panel</h1>

      <Input.Search
        placeholder="Search"
        className="col-2 mt-5  mb-1 mx-6 input"
        value={searchTerm}
        onChange={handleSearch}
      ></Input.Search>

      <div className="mt-3  img-con-ad">
        <img src={mylogo} alt="React Logo" className="img-ad" />
      </div>

      <Table className="ad-table" style={{}}>
        <thead>
          <tr className="head-row">
            <th></th>
            <th>order id</th>
            <th>Name</th>
            <th>contract Date</th>
            <th>Email</th>
            <th>phone</th>
            <th>sales rep</th>
            <th>event</th>
            {/* <th>Qty</th> */}
            
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <tr onClick={() => handleRowClick(index)}>
                  <td className="plus-btn">+</td>
                  <td className="order">{item.orderid}</td>
                  <td>{item.name}</td>
                  <td>{moment(item.contract_date).utc().format("MM/DD/YY")}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.sales_rep}</td>
                  <td>{item.event}</td>
                 
   

                 
                <td><img src={view} alt="React view"className="view-img" onClick={()=>navigate(`/viewdetail/${item.id}`)} /> </td> 
                </tr>
           
              </React.Fragment>
            );
          })}
        </tbody>
      </Table>

      <Pagination
       style={{alignItems:'center'}} 
        itemsPerPage={itemsPerPage}
        totalItems={filteredData.length}
        paginate={paginate}
      />
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
