import {React,useState,useEffect} from 'react'
import axios from 'axios'
import { Card, Input } from 'semantic-ui-react'
import Admin_Dashboard from './Admin_Dashboard';
import Navbarpage from './Course/Navbarpage';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router";
import { DataGrid } from '@mui/x-data-grid';

function History() {
                    const[data,setData]=useState([]);
                    const[search,setSearch]=useState("");
                    const navigate=useNavigate()
                    
                    const columns = [
                      { field: 'id', headerName: <b>ID</b>,   headerClassName: 'super-app-theme--header', width: 140},
                      { field: 'modelname', headerName:<b>Register Number</b> ,    headerClassName: 'super-app-theme--header', width: 170 },
                      { field: 'operationdone', headerName:<b>Event</b> ,    headerClassName: 'super-app-theme--header', width: 170 },
                      { field: 'donebyuser', headerName:<b>Done By User</b> ,    headerClassName: 'super-app-theme--header',width: 150 },
                      { field: 'donebyuserrole', headerName:<b>Done By User Role</b> ,  headerClassName: 'super-app-theme--header', width: 210 },
                      { field: 'donedatetime', headerName:<b>Date</b> , headerClassName: 'super-app-theme--header',width: 210 },
                      { field: 'description', headerName:<b>Description</b> , headerClassName: 'super-app-theme--header', width: 210 },
                      { field: 'action', headerName:<b>Action</b> , headerClassName: 'super-app-theme--header', width: 210 ,
                        renderCell: (params) => {
                                                                 
                          return <div>
                                <button class ="btn btn-danger" onClick={() => deleteRow(params.row.id)}>Delete</button>
                                </div>
                        } 
                      },
                    ]
                    useEffect(()=>{
                      
                                        axios.get("http://localhost:8000/adminapp/history/")
                                        .then(response => {
                                        setData(response.data);
                                        })
                                             
                    },[])
                    function deleteRow(rowid){
                    
                                        axios
                    
                            .delete(`http://localhost:8000/adminapp/delete_history/${rowid}`)
                            .then(() => {
                                        window.location.reload()
                                      });
                    
                    }
                    
                    
                      return (
                        <div style={{
                          background: "linear-gradient(90deg, rgba(35,40,82,1) 25%, rgba(26,34,122,1) 55%, rgba(27,44,94,1) 89%)",
                          
                        }} 
                    >
                           <Box sx={{ display: 'flex' }}>
                                       
                                       <Admin_Dashboard/>
                                       
                                       
                                       <Box component="main2" sx={{ flexGrow: 4, p: 1 }}>
                                    
                                       <Navbarpage/>

                                       
                      <br></br>
                                        <div style={{ height: 1060, width: '95%' }}>
                                         <DataGrid sx={{
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
                                    }} rows={data} columns={columns} getRowId={(row) => row.id} 
                                   
                                     />
                                         </div>
                            </Box>
                            </Box>           
                        </div>
                      )
}

export default History
