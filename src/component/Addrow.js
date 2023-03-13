// import { useState } from "react/cjs/react.development"

// import { Table } from "antd";
import { useState } from "react";
import DateRangePicker from "./DateRangePicker";
import Popup from "./Popup";

import TableRows from "./TableRows"
function Addrow(){


    const [rowsData, setRowsData] = useState([]);


    const[event,setevent]=useState()
    const [product_type, setproduct_type] = useState("");
    const[dates,setDates]=useState([])
    // const [rate, setrate] = useState([]);
    // const [discount, setdiscount] = useState([]);
    //  const[cost,setcost]=useState();
    //  const[cost_tax,setcost_tax]=useState([])
    const addTableRows = ()=>{
  
        const rowsInput={
             product_type:'',
            run_dates:'',
            per_week:'',
            cost:'',
            discount:'',
            cost_tax:'',
            discounted_cost:'',
        } 
        setRowsData([...rowsData, rowsInput])
      
    }
   const deleteTableRows = (index)=>{
        const rows = [...rowsData];
        rows.splice(index, 1);
        setRowsData(rows);
   }
 
   const handleChange = (index, evnt)=>{
    
    const { name, value } = evnt.target;
    const rowsInput = [...rowsData];
    rowsInput[index][name] = value;
    setRowsData(rowsInput);
  

 
 
}


const calculate=(event)=>{
    setevent(event)
}
console.log(event)



// var calrate;
// const ratecaculate = () => {
//   calrate = event * rate;
//   setcost(calrate);

//   return calrate;
// };


// const taxcost = () => {
//     var tax = (calrate * 15) / 100 - discount;
//     var totaltax = tax + calrate;
//     // setcost_tax(totaltax);
//     return totaltax;
//   };
    return(
<>
      <div style={{fontWeight:'500' ,fontSize:'20px',marginLeft:'20px'}}>Item :-</div>

        <div className="container">
            <div className="row">
                <div className="">

                <table className="table">
                    <thead>
                      <tr>
                          <th> product type</th>
                          <th>Run Dates</th>
                          <th>per week</th>
                          <th>Rate</th>
                          <th>Discount</th>
                          <th>Cost</th>
                          <th>Cost(/W tax)</th>
                          <th>discounted_cost</th>
                         
                      </tr>
                     

                    </thead>
                    
                   <tbody>
                   <tr >
                <td>
                <div className="form-group">
               
                <select
                  name="product_type"
                  id="dropdown-input"
                  // style={{appearance:'unset'}}
                  className=" mb-3 dropdown "
                //   onChange={(e) => setproduct_type(e.target.value)}
                >
                  <option value={product_type}>Select an option</option>
                  <option value="spots">spots</option>
                  <option value="Mentions">Mentions</option>
                  <option value="Half Hours">Half Hours </option>
                  <option value="outside Broadcast">outside Broadcast</option>
                </select>
                
              </div>
                </td>
                <td> <div className="form-group">
               
                
              

             

                <div style={{ border: "none" }} className="date-range">
                  <DateRangePicker
                    onChange={(values) => {
                      setDates(
                        values.map((item) => {
                          return item
                        })
                      );
                      // console.log(dates);
                      // setstartdate(values[0].$d);
                      // setenddate(values[1].$d);
                    }}
                  />
                </div>

                {/* <DateRangePicker  /> */}
                {/* console.log(value) */}
              </div>
                    
                    
                    
                    
                    
                    
                    
                    
                    </td>
                <td>
                <div
                className="form-group"
                
              >
              
                <Popup className="form-control" handlefunction={calculate} />

             
              </div>
                    
                    
                    </td>
                <td>
                <div className="form-group">
              
                <input
                  name="Rate"
                  type="number"
                  className="form-control"
                //   value={rate}
                //   onChange={(e) => setrate(e.target.value)}
                />
           
              </div>
               
                </td>
                <td>
                    
                <div className="form-group">
               
                <input
                  name="Discount"
                  type="number"
                  className="form-control"
                //   value={discount}
                //   onChange={(e) => setdiscount(e.target.value)}
                />
             
              </div> </td>
                <td>
                    
                    
                <div className="form-group">
               
                <input
                  name="Cost"
                  type="text"
                  className="form-control"
                //   value={ratecaculate()}
                />
           
              </div>
                    
                    
                    
                    
                     </td>
                <td>
                <div className="form-group">
              
                <input
                  name="cast_tax"
                  type="text"
                  className="form-control"
                //   value={taxcost()}
                />
            
              </div>
                
                
                
                </td>
                <td>
                    
                <div className="form-group">
             
                <input
                  name="Discounted_cost"
                  type="text"
                  className="form-control"
                //   value={discountcost()}
                />
            
              </div>                    
                    
                    </td>
                    </tr>

                   <TableRows rowsData={rowsData} deleteTableRows={deleteTableRows} handleChange={handleChange} />
                   </tbody> 
                </table>
                {/* <div style={{float:'right',}}><button  className="btn btn-outline-success" onClick={addTableRows}>+</button><span style={{fontWeight:500,padding:7}}>ADD item</span></div> */}
                <button  style={{float:'right',}} className="btn btn-outline-success" onClick={addTableRows}>+ add item</button>
                </div>
                <div className="col-sm-4">

                </div>
            </div>
        </div>
        </>
    )

}
export default Addrow


