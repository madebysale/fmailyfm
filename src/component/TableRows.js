import { useState } from "react";
import DateRangePicker from "./DateRangePicker";
import './Form.css';
import Popup from "./Popup";

function TableRows({rowsData, deleteTableRows, handleChange}) {

    const [product_type, setproduct_type] = useState("");
    const[dates,setDates]=useState([])
    const [rate, setrate] = useState([]);
    const [discount, setdiscount] = useState([]);
    // const [cost, setcost] = useState([]);
    // const [cost_tax, setcost_tax] = useState();
    // const [discounted_cost, setdiscounted_cost] = useState([]);



    //  const addTableRows = ()=>{
  
    //     const rowsInput={
    //          product_type:'',
    //         run_dates:'',
    //         per_week:'',
    //         cost:'',
    //         discount:'',
    //         cost_tax:'',
    //         discounted_cost:'',
    //     } 

    const calculate=(event)=>{

    }


    return(
        
        rowsData.map((data, index)=>{
            const {product_type, runs_days, salary}= data;
            return(

                <tr key={index}>
                <td>
                <div className="form-group">
               
                <select
                  name="product_type"
                  id="dropdown-input"
                  // style={{appearance:'unset'}}
                  className=" mb-3 dropdown "
                  onChange={(e) => setproduct_type(e.target.value)}
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
               
                
                {/* <label htmlFor="start_date" >start</label>
            <Field name="start_date" type="date" className="form-control" value={values.start_date}/>
            {errors.start_date && touched.start_date ? (
              <div  className="error-message">{errors.start_date}</div>
            ) : null} */}

                {/* <label htmlFor="end_date" >end</label>
            <Field name="end_date" type="date" className="form-control" value={values.end_date}/>
            {errors.end_date && touched.end_date ? (
              <div  className="error-message">{errors.end_date}</div>
            ) : null} */}

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
                  value={rate}
                  onChange={(e) => setrate(e.target.value)}
                />
                {/* {errors.Rate && touched.Rate ? (
              <div  className="error-message">{errors.Rate}</div>
            ) : null} */}
              </div>
               
                </td>
                <td>
                    
                <div className="form-group">
               
                <input
                  name="Discount"
                  type="number"
                  className="form-control"
                  value={discount}
                  onChange={(e) => setdiscount(e.target.value)}
                />
                {/* {errors.Discount && touched.Discount ? (
              <div  className="error-message">{errors.Discount}</div>
            ) : null} */}
              </div> </td>
                <td>
                    
                    
                <div className="form-group">
               
                <input
                  name="Cost"
                  type="text"
                  className="form-control"
                //   value={ratecaculate()}
                />
                {/* {errors.Cost && touched.Cost ? (
              <div  className="error-message">{errors.Cost}</div>
            ) : null} */}
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
                {/* {errors.cast_tax && touched.cast_tax ? (
              <div  className="error-message">{errors.cast_tax}</div>
            ) : null} */}
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
                {/* {errors.Discounted_cost && touched.Discounted_cost ? (
              <div  className="error-message">{errors.Discounted_cost}</div>
            ) : null} */}
              </div>                    
                    
                    </td>
                    {/* <button className="btn btn-outline-success" onClick={addTableRows} >+</button> */}
                <td><button className="btn btn-outline-danger" onClick={()=>(deleteTableRows(index))}>x</button></td>
            </tr>

            )
        })
   
    )
    
}

export default TableRows;



