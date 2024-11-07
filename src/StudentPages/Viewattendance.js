import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import Student_Dashboard from './Student_Dashboard';
import Navbarpage from '../Adminpage/Course/Navbarpage';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router";


function Viewattendance() {

//   const [rows, setRows] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const[name,setName]=useState("")
  const navigate=useNavigate()
  var loggedInUsername=window.localStorage.getItem('loggedInUsername')
  var loggedInPassword=window.localStorage.getItem('loggedInUserPassword')
  var loggedInUserrole=window.localStorage.getItem('loggedInUserrole')

  function getStudentdetails(nameprops){
           axios.get("http://localhost:8000/adminapp/studentdetail/")
           .then((res)=>{
                res.data.map(data =>{
                    if(data.student_uname==loggedInUsername){
                                        // alert(data.student_name)
                           setName(data. student_name) 
                    //        window.localStorage.setItem('Name', data.student_name);            
                    }

                } )   
           })         
  }
//   var Name=window.localStorage.getItem('Name')

  useEffect((nameprops) => {

                    
                    axios.get('http://localhost:8000/staffapp/attendance_view/')
                     
                      .then((res)=>{
                                                   
                               
                    //     setRows(res.data)
                        setData(res.data)
                      })
                  
                    getStudentdetails()
                  
                  
                    
                  }, []);

                  const filteredData = data.filter(item =>
                    item.name== name.toLowerCase()
                  );          
                  const columns = [
                    { field: 'id', headerName: <b>ID</b>,headerClassName: 'super-app-theme--header', width: 90 },
                    { field: 'name', headerName:<b>Name</b> , headerClassName: 'super-app-theme--header', width: 230 },
                    { field: 'regno', headerName:<b>Register Number</b> , headerClassName: 'super-app-theme--header', width: 190 },
                    { field: 'course', headerName:<b>Course</b> , headerClassName: 'super-app-theme--header', width: 270 },
                    { field: 'subject', headerName:<b>Subject</b> , headerClassName: 'super-app-theme--header', width: 250 },
                    { field: 'date', headerName:<b>Date</b> ,headerClassName: 'super-app-theme--header', width: 260 },
                    { field: 'status', headerName: <b>Status</b> , headerClassName: 'super-app-theme--header', width: 180 },
                    // { field: 'actions', headerName:<b>Actions</b> , width: 400,
                    //    renderCell: (params) => {
                                                            
                    //                                         return <a
                    //                                         className="btn btn-danger" href ={`/addstudent/edit/${params.id}`} 
                    //                                       >Edit</a>;

                                       
                                         
                    //                     }

                    // },
                    
                    // Add more columns as needed
                    
                  ];
                  
                  return (
                    <Box sx={{ display: 'flex' }}>
                                                
                    <Student_Dashboard/>
                    
                    
                    <Box component="main2" sx={{ flexGrow: 4, p: 1 }}>
                 
                    <Navbarpage/>
                
                    <div style={{ height: 600, width: '95%' }}>
                         
                      <DataGrid 
                      sx={{
                        boxShadow: 6,
                        border: 4,
                        borderColor: 'black',
                        '& .MuiDataGrid-cell:hover': {
                          color: 'primary.main',
                        },
                        '& .super-app-theme--header': {
                          backgroundColor: ' #1b0720',
                        },
                        color:"white",
                        background:"linear-gradient(90deg, rgba(14,16,33,1) 25%, rgba(3,8,41,1) 55%, rgba(0,1,1,1) 89%)"
        }}
                      rows={filteredData} columns={columns} getRowId={(row) => row.id}  />
                     
                    </div>
                    </Box>
                    </Box>
                  );
}

export default Viewattendance
