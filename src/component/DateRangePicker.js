// import 'antd/dist/reset.css';
import { DatePicker } from 'antd';
import { useEffect, useState } from 'react';
import 'antd/dist/reset.css'
import './Form.css';
const { RangePicker } = DatePicker;




function DateRangePicker (props) {

  // const[mydate,setmydate]=useState([])



// console.log()

  const [dates, setDates] = useState([])
  // console.log(dates[0])

  

  return (
    <div style={{border:'none' ,width:'100px' }} className="date-range" >
      <RangePicker onChange={(values) =>
       { setDates(values.map(item=>{
            return item
          
          }
           ))
          //  console.log(values)
         

        }}
  
      />
    </div>
  );
}

export default DateRangePicker;