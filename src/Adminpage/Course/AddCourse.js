import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'; 
import { useNavigate } from "react-router";
import Admin_Dashboard from '../Admin_Dashboard';
import Navbarpage from './Navbarpage';
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
function AddCourse() {
    const [fees,setFees]=useState("");    
    const [cname,setCname]=useState("");  
    const [description,setDescription]=useState("");  
    const [year,setYear]=useState(""); 
    const[alertuse,setAlertuse]=useState("")
                   
    const navigate = useNavigate(); 
    const Item = styled(Paper)(({ theme }) => ({
                backgroundColor: '#fff',
                ...theme.typography.body2,
                padding: theme.spacing(2),
                textAlign: 'center',
                color: theme.palette.text.secondary,
                ...theme.applyStyles('dark', {
                backgroundColor: '#1A2027',
              }),
          }));  

  const handleSubmit = (e) => {
                      
            e.preventDefault();
            var testPassed = "false";
            if(cname != ""){
              testPassed="true"
            }
            else{
              testPassed ="false"
             setAlertuse( 
              <Alert severity="error">Please Enter The Couse Name.</Alert>
            )
              
            }
            if(testPassed == "true"){
            if(fees != ""){
              testPassed ="true"
            }
            else{
              testPassed ="false"
              setAlertuse( 
                <Alert severity="error">Please Enter The Fees.</Alert>
              )
            }
          }
          if(testPassed == "true"){
            if(year != ""){
              testPassed ="true"
            }
            else{
              testPassed ="false"
              setAlertuse( 
                <Alert severity="error">Please Enter The Year.</Alert>
              )
            }
          }
          if(testPassed == "true"){
            if(description != ""){
              testPassed ="true"
            }
            else{
              testPassed =" false"
              setAlertuse( 
                <Alert severity="error">Please Enter The Description.</Alert>
              )
            }
          }
            if(testPassed == "true"){

                                
            axios
                .post("http://localhost:8000/adminapp/coursedetail/",
                    {
                        "course_name":cname,
                        "fees":fees,
                        "year":year,
                        "description":description,
                    }                
                  )
                  .then(() => {
                                navigate("/coursedetails/");
                        });               
                      }
                      
          }
  return (
    <div  style={{
      background: "linear-gradient(90deg, rgba(4,6,22,1) 25%, rgba(10,11,22,1) 55%, rgba(29,40,73,1) 89%)",
     
    }} >
   <Box sx={{ display: 'flex' }}>
                   
                   <Admin_Dashboard/>
                   <Box component="main2" sx={{ flexGrow: 4, p: 1 }}>
                   <Navbarpage/>   

                   <br/>  <br/>  <br/>  <br/>
      <center style={{background: "linear-gradient(90deg, rgba(16,18,54,1) 25%, rgba(26,37,62,1) 55%, rgba(8,11,69,1) 84%)"}}>
      <h4 ><center><h4 style={{color:"#FFE4C4	"}}><font face="times new roman" size="6">Add New Staff </font></h4></center></h4>  
      <br></br>             
      <Grid container spacing={2}>
      <Grid item xs={3}>
      <TextField id="outlined-cname" 
               onChange={(e) => setCname(e.target.value)} 
               label="Enter Course Name" variant="outlined" 
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
      <TextField id="outlined-fees" 
              onChange={(e) => setFees(e.target.value)} 
              label="Enter Fees" variant="outlined" 
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
      <TextField id="outlined-year" 
              onChange={(e) => setYear(e.target.value)}  
              label="Enter Year" variant="outlined"
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
      <TextField id="outlined-desc" 
             onChange={(e) => setDescription(e.target.value)}  
             label="Enter Description" variant="outlined" 
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
    </Grid>
    <br></br>
    <br></br>
      
    
      <center><button class ="btn btn-success" onClick={handleSubmit}>Save</button></center>
      <br></br>
      <div style={{width:"30%"}}>
      {alertuse}
      </div>
     
   
        <br></br>
      
        </center>
    
    
     
   
  
    </Box>
    </Box>
    </div>
  )
  
}

export default AddCourse
