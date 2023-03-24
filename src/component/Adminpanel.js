import { useState, useEffect } from 'react';
import { Table, Collapse, Input } from 'antd';
import axios from 'axios';
import moment from 'moment';
import './Adminpanel.css';
import mylogo from "../component/fm_logo.png";

// const { Panel } = Collapse;






const AdminPanel = () => {
  const[searchtext,setsearchtext] =useState("")
  const[expandedRowKeys, setExpandedRowKeys] = useState([])

  const [data, setData] = useState([]);

  const onTableRowExpand = (expanded, record) => {
    setExpandedRowKeys(expanded ? [record.key] : []);
  }



  useEffect(() => {
    axios
      .post("http://localhost:8000/finaldata")

      .then((response) => {
        setData(response.data);
        
        console.log(response,"sds");
      });
  }, []);
  const columns = [

    {
        title: 'Contract Date',
        dataIndex:'contract_date',
        key: 'contract_date',
        render: (contract_date) => { return (<p>{moment(contract_date).utc().format('DD/MM/YYYY')}</p>)},
      },
    
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
         filteredValue:[searchtext],
           onFilter:(value,data)=>{
           return String(data.name).toLowerCase().includes(value.toLowerCase())||
                  String(data.contract_date).toLowerCase().includes(value.toLowerCase())||
                  String(data.email).toLowerCase().includes(value.toLowerCase())||
                  String(data.phone).toLowerCase().includes(value.toLowerCase())||
                  String(data.sales_rep).toLowerCase().includes(value.toLowerCase())||
                  String(data.event).toLowerCase().includes(value.toLowerCase())||
                  String(data.advertiser).toLowerCase().includes(value.toLowerCase())||
                  String(data.orderid).toLowerCase().includes(value.toLowerCase());
           
              }
 
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
   
    },
    {
      title: 'Sales Rep',
      dataIndex: 'sales_rep',
      key: 'sales_rep',
    },
    {
      title: 'Event',
      dataIndex: 'event', 
      key: 'event',
    },
    {
      title: 'Advertiser',
      dataIndex: 'advertiser',
      key: 'advertiser',
    },


    {
      title: 'order id',
      dataIndex: 'orderid',
      key: 'orderid',
    },
  
 
  ];
  return (
  <>
   

  
    <h1 className='mt-3 heading ant-table-thead'>Admin Panel</h1>
   
       
      <Input.Search  placeholder='Search' className='col-2 mt-5  mb-1 mx-6 input'
      onSearch={(value)=>{
      setsearchtext(value)
// value={searchTerm} onChange={handleSearch}
      }}
      onChange={(e)=>setsearchtext(e.target.value)}
      ></Input.Search>
      
    
   

   <div className='mt-3  img-con-ad'>
   <img src={mylogo} alt="React Logo" className='img-ad'/>
   </div>
  

    
    <Table className='table-ad' dataSource={data} columns={columns} 
     expandable={{

      expandedRowRender,
      expandedRowKeys,
      onExpand: onTableRowExpand,

      
    }} 
    
    />

    


     
    </>

  )
};

const expandedRowRender = (record) => {
    
 
      const subTableColumns = [
        {
          title: 'product Type',
          dataIndex: 'product_type',
          key: 'product_type',
     
        },
        {
            title: 'start Date',
            dataIndex: 'start_date',
            key: 'start_date',
            render: (start_date) => { return (<p>{moment(start_date).utc().format('DD/MM/YYYY')}</p>)},
            
          },
        {
            title: 'End Date',
            dataIndex:'end_date',
            key: 'end_date',
            render: (end_date) => { return (<p>{moment(end_date).utc().format('DD/MM/YYYY')}</p>)},
          },

        {
          title: 'mon',
          dataIndex: 'monday',
          key: 'mon',
        },
        {
          title: 'Tue',
          dataIndex: 'tuesday',
          key: 'Tue',
        },
        {
          title: 'Wed',
          dataIndex: 'wednesday',
          key: 'Wed',
        },
        {
          title: 'Thu',
          dataIndex: 'thursday',
          key: 'Thu',
        },
        {
          title: 'Fri',
          dataIndex: 'friday',
          key: 'data',
        },
        {
          title: 'Sat',
          dataIndex: 'saturday',
          key: 'Sat',
        },
        {
          title: 'Sun',
          dataIndex: 'sunday',
          key: 'Sunday',
        },
        {
          title: 'Wks Total',
          dataIndex: 'total',
          key: 'Wks_total',
        },
        // {
        //   title: 'Description',
        //   dataIndex: 'Description',
        //   key: 'Description',
        // },
   
    
      ];
      
    return (
    <Table
      columns={subTableColumns}
      dataSource={record.fields[0]}
      pagination={false}
      
    />
    )
    };
    

export default AdminPanel;
