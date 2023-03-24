import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Adminpanel.css';

const Tablemake = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    axios
      .post("http://localhost:8000/finaldata")

      .then((response) => {
        setData(response.data);
        
        console.log(response,"sds");
      });
  }, []);




  function collapse(cell){
    var row = cell.parentElement;
    var target_row = row.parentElement.children[row.rowIndex + 1];
    if (target_row.style.display ==='table-row') {
      cell.innerHTML = '+';
      target_row.style.display = 'none';
    } else {
      cell.innerHTML = '-';
      target_row.style.display = 'table-row';
    }
  }



  return (
   < >
<table>


  <tr>
    <th></th>
    <th>Name</th>
    <th>contract Date</th>
    <th>Email</th>
    <th>phone</th>
    <th>sales rep</th>
    <th>event</th>
    <th>order id</th>
  </tr>
  {
  data.map((item)=>{
    return(
      <>
  <tr>
    <td id="collapseButton" 
   

    >+</td>
    <td>{item.name}</td>
    <td>{item.contract_date}</td>
    <td>{item.email}</td>
    <td>
      {item.phone}
    </td>
    <td>
      {item.sales_rep}
    </td>
    <td>
      {item.event}
    </td>
    <td>
      {item.orderid}
    </td>
  </tr>
  <tr id="hidden">
    <td></td>
    <td colspan={3}>
      <table>
        <tr>
          <th></th>
          <th>Product Type</th>
          <th>Monday</th>
        </tr>
        {
          item.fileds && item.fileds.map((itemss)=>{
            return(
itemss && itemss.map((data)=>{
  return(
    <>
  
        <tr>
          <td id="collapseButton" 
          >
            +</td>
          <td>{data.product_type}</td>
          <td>{data.monday}</td>
        </tr>
        <tr id="hidden">
          <td></td>
          <td colspan={2}>
            <table>
              <tr>
                <th>Mother</th>
                <th>Father</th>
              </tr>
              <tr>
                <td>Winona Kirk</td>
                <td>George Kirk</td>
              </tr>
            </table>
          </td>
        </tr>
        </>

)
})
          )
        })
      }
      </table>
    </td>
  </tr>
 
  <tr id="hidden">
    <td></td>
    <td colspan={3}>
      <table>
        <tr>
          <th></th>
          <th>DOB</th>
          <th>Country</th>
        </tr>
        <tr>
          <td id="collapseButton" >+</td>
          <td>July 23, 2305</td>
          <td>France</td>
        </tr>
        <tr id="hidden">
          <td></td>
          <td colspan={2}>
            <table>
              <tr>
                <th>Mother</th>
                <th>Father</th>
              </tr>
              <tr>
                <td>Yvette Gessard</td>
                <td>Maurice Picard</td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  </>

    )

  })
}
</table>

   
   </>
  )
}

export default Tablemake