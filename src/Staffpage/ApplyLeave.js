import {React,useState,useEffect} from 'react'
import {useNavigate} from 'react-router'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';  
import Navbarpage from '../Adminpage/Course/Navbarpage'
import Staff_Dashboard from './Staff_Dashboard';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
function ApplyLeave() {
        const [regno,setRegno]=useState("")
        const[reg_label,setReg_label]=useState("")
        const[name,setName]=useState("")
        const[course,setCourse]=useState("")
        const[subject,setSubject]=useState("") 
        const[message,setMessage] =useState("")
        const[date,setDate]=useState("")
        const[date_to,setDateto]=useState("")
        const navigate=useNavigate()

        var loggedInUsername=window.localStorage.getItem('loggedInUsername')
        var loggedInPassword=window.localStorage.getItem('loggedInUserPassword')
        var loggedInUserrole=window.localStorage.getItem('loggedInUserrole')

        function getStaffDetails(){
          axios.get("http://localhost:8000/adminapp/staffdetail/")
          .then((res)=>{
            res.data.map(data => {
             
              if(data.staff_uname==loggedInUsername){
               
              
               setRegno(data.staff_registerid)
               setName(data.staff_name)
               setSubject(data.subject)
               
                
               }
              })
          })
        }
useEffect(()=>{
getStaffDetails()
},[])
  var regnofield=  <TextField id="outlined-basic" 
                    value={regno} 
                    onChange={ (e)=>setRegno(e.target.value)}   
                    label="Enter Register Number"
                    sx={{
                      width:"240px",
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
                    ></TextField> 
  var namefield=  <TextField id="outlined-basic" 
                    value={name} 
                    onChange={ (e)=>setName(e.target.value)}  
                    label="Enter Name"
                    sx={{
                      width:"240px",
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
                    ></TextField> 
       
  var subjectfield=  <TextField id="outlined-basic" 
                      value={subject}
                      onChange={ (e)=>setSubject(e.target.value)}  
                      label="Enter Subject"
                      sx={{
                        width:"240px",
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
                      ></TextField>
  var messagefield=  <TextField id="outlined-basic"
                      onChange={ (e)=>setMessage(e.target.value)} 
                        label="Enter Message"
                        multiline
                        rows={4}
                        sx={{
                          width:"240px",
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
                        ></TextField> 
  var datefield=  <TextField id="outlined-basic" 
                    type="date" 
                    onChange={ (e)=>setDate(e.target.value)} 
                    sx={{
                      width:"240px",
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
                    ></TextField> 
  var datetofield=  <TextField id="outlined-basic"
                      type="date" onChange={ (e)=>setDateto(e.target.value)}
                      sx={{
                        width:"240px",
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
                ></TextField>       
  const handleSubmit =(e)=>{
                                    e.preventDefault()
                                      
                                        axios.post("http://localhost:8000/staffapp/staff_leave/",{
                                  
                                               "regno":regno,
                                               "name":name,
                                              
                                               "subject" :subject,
                                               
                                                "message":message,
                                                "date_on":date ,
                                                "date_to":date_to,
                                                "status":"Pending"           
                                        })
                                        .then(()=>{
                                          navigate("/get_staff_leave")
                                        //      alert("saved")         
                                        })
                                  }                 
                                 
  return (
    <div style={{
      background: "linear-gradient(90deg, rgba(35,40,82,1) 25%, rgba(26,34,122,1) 55%, rgba(27,44,94,1) 89%)",
      
    }} 
>
                  
      <Box sx={{ display: 'flex' }}>
                   
                   <Staff_Dashboard/>
                   <Box component="main2" sx={{ flexGrow: 4, p: 1 }}>
                   <Navbarpage/>               
                   <br/>  <br/>  <br/>  <br/>
      <center style={{background: "linear-gradient(90deg, rgba(16,18,54,1) 25%, rgba(26,37,62,1) 55%, rgba(8,11,69,1) 84%)"}}>
      <h4 ><center><h4 style={{color:"#FFE4C4	"}}><font face="times new roman" size="6">Apply For Leave </font></h4></center></h4>  
      <br></br>             
<Grid container spacing={2}>
      <Grid item xs={4}>
      { regnofield}
      </Grid>
      <Grid item xs={4}>
      {namefield}
      </Grid>

      <Grid item xs={4}>
      {subjectfield}
      </Grid>
    </Grid>
     <br></br>
    <Grid container spacing={2}>
      <Grid item xs={4}>
      {datefield}
      </Grid>
      <Grid item xs={4}>
      {datetofield}                    
      </Grid>

      <Grid item xs={4}>
      {messagefield}
      </Grid>

      <Grid item xs={4}>
    
      </Grid>

      <Grid item xs={4}>
     
      </Grid>

     
    </Grid>
        <br></br>
        <center><button class="btn btn-primary" onClick={handleSubmit}>Save</button></center>
        </center>
      </Box>
      </Box>
    </div>
  )
}

export default ApplyLeave
