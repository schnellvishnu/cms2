import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'; 
import Navbarpage from '../Adminpage/Course/Navbarpage';
import Staff_Dashboard from './Staff_Dashboard';
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
function Edit_Attendance() {
                    const [name,setName]=useState("");    
                    const [course_name,setCname]=useState("");  
                    const [subject,setSubject]=useState("");  
                    const [date,setDate]=useState(""); 
                    const[status,setStatus]=useState("");
                    const navigate = useNavigate(); 
                    const {id} =useParams();  
                    
             function  getEditdata(){
             
                    axios.get('http://localhost:8000/staffapp/attendance_individual/'+id)
     
                    .then((res)=>{
                      // alert(res.data[0].status)
                      setName(res.data[0].name)
                      setCname(res.data[0].course)
                      setSubject(res.data[0].subject)
                      setDate(res.data[0].date)
                      setStatus(res.data[0].status)
                    }) 
             }
     useEffect (()=>{
         getEditdata()
     },[])
     const handleChange = (event) => {
                   setStatus(event.target.value);
                  };

     const handleSubmit = (e) => {
                    e.preventDefault();
                    var iid=id
                    axios
                    
                    .put(`http://localhost:8000/staffapp/update_attendance/${id}`,
                       {
                          "course_name":course_name,
                          "name":name,
                          "subject":subject,
                          "date":date,
                          "status":status
                       }                
                     )
                     .then(() => {
                        navigate("/viewattendance/");
                  });               
                
                  } 

  return (
                    <div  style={{
                                        background: "linear-gradient(90deg, rgba(4,6,22,1) 25%, rgba(10,11,22,1) 55%, rgba(29,40,73,1) 89%)",
                                       
                                      }} >
                                     <Box sx={{ display: 'flex' }}>
                                                     
                                                     <Staff_Dashboard/>
                                                     <Box component="main2" sx={{ flexGrow: 4, p: 1 }}>
                                                     <Navbarpage/>   
                                  
                                                     <br/>  <br/>  <br/>  <br/>
                                        <center style={{background: "linear-gradient(90deg, rgba(16,18,54,1) 25%, rgba(26,37,62,1) 55%, rgba(8,11,69,1) 84%)"}}>
                                        <h4 ><center><h4 style={{color:"#FFE4C4	"}}><font face="times new roman" size="6">Edit Attendance Details </font></h4></center></h4>  
                                        <br></br>             
                                        <Grid container spacing={2}>
                                        <Grid item xs={3}>
                                        <TextField id="outlined-cname" 
                                                 onChange={(e) => setName(e.target.value)} 
                                                 label="Name" variant="outlined" 
                                                 value={name}
                                                 sx={{
                                                  // Root class for the input field
                                                  "& .MuiOutlinedInput-root": {
                                                    color: "#FFFFF0",
                                                    fontFamily: "Arial",
                                                    fontWeight: "bold",
                                                    // Class for the border around the input field
                                                    "& .MuiOutlinedInput-notchedOutline": {
                                                      borderColor: "#CD853F	",
                                                      borderWidth: "2px",
                                                    },
                                                  },
                                                  // Class for the label of the input field
                                                  "& .MuiInputLabel-outlined": {
                                                    color: "#FFA500",
                                                    fontWeight: "bold",
                                                  },
                                                }}
                                                 />
                                        </Grid>
                                        <Grid item xs={3}>
                                        <TextField id="outlined-Course" 
                                                onChange={(e) => setCname(e.target.value)} 
                                                label="Course" variant="outlined"
                                                value={course_name} 
                                                sx={{
                                                  // Root class for the input field
                                                  "& .MuiOutlinedInput-root": {
                                                    color: "#FFFFF0",
                                                    fontFamily: "Arial",
                                                    fontWeight: "bold",
                                                    // Class for the border around the input field
                                                    "& .MuiOutlinedInput-notchedOutline": {
                                                      borderColor: "#CD853F	",
                                                      borderWidth: "2px",
                                                    },
                                                  },
                                                  // Class for the label of the input field
                                                  "& .MuiInputLabel-outlined": {
                                                    color: "#FFA500",
                                                    fontWeight: "bold",
                                                  },
                                                }}
                                                />
                                        </Grid>
                                  
                                        <Grid item xs={3}>
                                        <TextField id="outlined-subject" 
                                                onChange={(e) =>setSubject(e.target.value)}  
                                                label="Subject" variant="outlined"
                                                value={subject}
                                                sx={{
                                                  // Root class for the input field
                                                  "& .MuiOutlinedInput-root": {
                                                    color: "#FFFFF0",
                                                    fontFamily: "Arial",
                                                    fontWeight: "bold",
                                                    // Class for the border around the input field
                                                    "& .MuiOutlinedInput-notchedOutline": {
                                                      borderColor: "#CD853F	",
                                                      borderWidth: "2px",
                                                    },
                                                  },
                                                  // Class for the label of the input field
                                                  "& .MuiInputLabel-outlined": {
                                                    color: "#FFA500",
                                                    fontWeight: "bold",
                                                  },
                                                }} 
                                                />
                                        </Grid>
                                        <Grid item xs={3}>
                                        <TextField id="outlined-date" 
                                               onChange={(e) => setDate(e.target.value)}  
                                               label="Date" variant="outlined" 
                                               value={date}
                                               sx={{
                                                // Root class for the input field
                                                "& .MuiOutlinedInput-root": {
                                                  color: "#FFFFF0",
                                                  fontFamily: "Arial",
                                                  fontWeight: "bold",
                                                  // Class for the border around the input field
                                                  "& .MuiOutlinedInput-notchedOutline": {
                                                    borderColor: "#CD853F	",
                                                    borderWidth: "2px",
                                                  },
                                                },
                                                // Class for the label of the input field
                                                "& .MuiInputLabel-outlined": {
                                                  color: "#FFA500",
                                                  fontWeight: "bold",
                                                },
                                              }}
                                               />
                                        </Grid>
                    <Grid item xs={2} sx={{marginLeft:"60px"}} >
<center>
                                        <Box  sx={{
                                                // Root class for the input field
                                                "& .MuiOutlinedInput-root": {
                                                  color: "#FFFFF0",
                                                  fontFamily: "Arial",
                                                  fontWeight: "bold",
                                                  // Class for the border around the input field
                                                  "& .MuiOutlinedInput-notchedOutline": {
                                                    borderColor: "#CD853F",
                                                    borderWidth: "2px",
                                                   
                                                   
                                                    
                                                  },
                                        },
                                                // Class for the label of the input field
                                                "& .MuiInputLabel-outlined": {
                                                  color: "#FFA500",
                                                  fontWeight: "bold",
                                                  
                                                },
                                        }}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status}
          label="Status"
          onChange={handleChange}
         >
          <MenuItem value={"Present"}>Present</MenuItem>
          <MenuItem value={"Absent"}>Absent</MenuItem>
          
        </Select>
      </FormControl>
    </Box>
    </center>
    </Grid>

</Grid>
                    <br></br>
                    <br></br>
                                        
                                      
                                        <center><button class ="btn btn-success" onClick={handleSubmit}>Edit</button></center>
                                       
                                     
                                          <br></br>
                                        
                                          </center>
                                      
                                      
                                       
                                     
                                    
                                      </Box>
                                      </Box>
                                      </div>
                                    )
}

export default Edit_Attendance
