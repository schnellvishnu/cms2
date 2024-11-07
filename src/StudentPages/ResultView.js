import {React,useState,useEffect} from 'react'
import axios from 'axios'
import { Card, Input } from 'semantic-ui-react'
import Navbarpage from '../Adminpage/Course/Navbarpage'
import Student_Dashboard from './Student_Dashboard'
import Box from '@mui/material/Box';
import { useNavigate } from "react-router";
import { DataGrid } from '@mui/x-data-grid';
function ResultView() {
                    const[data,setData]=useState([]);
                    const[search,setSearch]=useState("");
                    const[name,setName]=useState("")
                    const navigate=useNavigate()
                    var loggedInUsername=window.localStorage.getItem('loggedInUsername')
                    var loggedInPassword=window.localStorage.getItem('loggedInUserPassword')
                    var loggedInUserrole=window.localStorage.getItem('loggedInUserrole')
                  
                    function getStudentName(){
                                       
                    axios.get("http://localhost:8000/adminapp/studentdetail/")
                    .then((res)=>{
                       res.data.map(item=>{
                                               
                           if(item.student_uname ==loggedInUsername){
                    //                setName(item.student_name)
                                   window.localStorage.setItem('NAME', item.student_name);
                    //                alert(item.student_name) 
                           }             
                       })                 
                    })
                    }
                    
                    useEffect(()=>{
                      
                                        axios.get("http://localhost:8000/staffapp/addresult/")
                                         .then(response => {
                                                            setData(response.data);
                                                          
                                                            })
                                         getStudentName()
                                        //  alert(NAME)                 
                                                                 
                                        },[]) 
var NAME=window.localStorage.getItem('NAME') 
                                
                    const filterresult=data.filter(item=>
                            item.name == NAME 
                                  
                    )                     
                                        
                   
                    const columns = [
                                        { field: 'id', headerName:<b>ID</b> , headerClassName: 'super-app-theme--header',width: 90 },
                                        { field: 'name', headerName: <b>Name</b>, headerClassName: 'super-app-theme--header', width: 230 },
                                        { field: 'regno', headerName: <b>Register Number</b>, headerClassName: 'super-app-theme--header', width: 190 },
                                        { field: 'course', headerName: <b>Course</b> , headerClassName: 'super-app-theme--header', width: 210 },
                                        { field: 'subject', headerName:<b>Subject</b> , headerClassName: 'super-app-theme--header', width: 190 },
                                        { field: 'date', headerName:<b>Date</b> , headerClassName: 'super-app-theme--header', width: 190 },
                                        { field: 'mark', headerName: <b>Mark</b> , headerClassName: 'super-app-theme--header', width: 180 },
                                        { field: 'grade', headerName: <b>Grade</b> , headerClassName: 'super-app-theme--header', width: 400,}
                     ];
                                      
                    return (
                                        <Box sx={{ display: 'flex' }}>
                                                                    
                                        <Student_Dashboard/>
                                        
                                        
                                        <Box component="main2" sx={{ flexGrow: 4, p: 1 }}>
                                     
                                        <Navbarpage/>
                                    
                                        <div style={{ height: 600, width: '100%' }}>
                                             
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
                                           rows={filterresult} columns={columns} getRowId={(row) => row.id}  />
                                         
                                        </div>
                                        </Box>
                                        </Box>
                                      );
}

export default ResultView
