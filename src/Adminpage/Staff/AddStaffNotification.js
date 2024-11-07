import {React,useState,useEffect} from 'react'
import {useParams} from  'react-router-dom'
import {useNavigate} from 'react-router'
import Grid from '@mui/material/Grid';
import axios from 'axios'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';  
import Admin_Dashboard from '../Admin_Dashboard';
import Navbarpage from '../Course/Navbarpage';
import * as  AiIcons from "react-icons/ai";
import Alert from '@mui/material/Alert';
function AddStaffNotification() {
                    const[reg_number,setReg_Number]=useState("");
                    const[name,setName]=useState("") 
                    const[course,setCourse]=useState("");
                    const[message,setMessage]=useState("")   
                    const[date,setDate]=useState("")   
                    const navigate=useNavigate()
                
                    const[alertuse,setAlertuse]=useState("")
                    const GETSubmit = (e) => {
                          e.preventDefault()
                          axios.get("http://localhost:8000/adminapp/staff_notification_individual/"+reg_number+"/")
                              .then((res)=>{
                               
                                        setName(res.data[0].staff_name)
                                        setCourse(res.data[0].subject)
                                      })
                                   
                        }
  var reg_field= <TextField id="outlined-basic" 
                  onChange={ (e)=>setReg_Number(e.target.value)}  
                  label="Enter Register Number"
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
                  ></TextField>  
  var name_field= <TextField id="outlined-basic"
                  onChange={ (e)=>setName(e.target.value)} 
                  value={name} label="Enter Name"
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
                  ></TextField> 
  var course_field= <TextField id="outlined-basic" 
                      onChange={ (e)=>setCourse(e.target.value)} 
                      value={course}  
                      label="Enter Course"
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
                      ></TextField>               
  var message_field= <TextField id="outlined-basic" 
                      onChange={ (e)=>setMessage(e.target.value)} 
                      label="Enter Message"
                      multiline
                      rows={4}
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
                      > </TextField>  
  var date_field= <TextField id="outlined-basic" 
                    type="date" 
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
                    onChange={ (e)=>setDate(e.target.value)}  > </TextField>                                                                                
  const handleSubmit = (e) => {
            e.preventDefault()
            var testPassed = "false";
            if(reg_number != ""){
              testPassed="true"
            }
            else{
              testPassed ="false"
             setAlertuse( 
              <Alert severity="error">Please Enter Registernumber.</Alert>
            )
              
            }
            if(testPassed == "true"){
            if(name != ""){
              testPassed ="true"
            }
            else{
              testPassed ="false"
              setAlertuse( 
                <Alert severity="error">Please Enter Name.</Alert>
              )
            }
          }
          if(testPassed == "true"){
            if(course != ""){
              testPassed ="true"
            }
            else{
              testPassed ="false"
              setAlertuse( 
                <Alert severity="error">Please Enter Course .</Alert>
              )
            }
          }
          if(testPassed == "true"){
            if(message != ""){
              testPassed ="true"
            }
            else{
              testPassed =" false"
              setAlertuse( 
                <Alert severity="error">Please Enter Message.</Alert>
              )
            }
          }

          if(testPassed == "true"){
            if(date != ""){
              testPassed ="true"
            }
            else{
              testPassed =" false"
              setAlertuse( 
                <Alert severity="error">Please Enter Date.</Alert>
              )
            }
          }

          if(testPassed == "true"){
                axios.post("http://localhost:8000/adminapp/staff_notification/",
                      {
                        "registerno":reg_number,
                                                          // "course":course,
                        "name":name,
                        "message":message,
                        'date':date,
                        "status":"Sended"
                      }
                    )
                    .then(()=>{
                                  navigate("/staff_notification/")
                              })
            }                                       
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
                                <br></br>  <br></br>  <br></br><br></br><br></br>
                                <center style={{background: "linear-gradient(90deg, rgba(16,18,54,1) 25%, rgba(26,37,62,1) 55%, rgba(8,11,69,1) 84%)"}}>                
                                  <Box
                                      component="form"
                                      sx={{ '& > :not(style)': { m: 1} }}
                                      noValidate
                                      autoComplete="off"
                                  >
                                    
                              {reg_field}
                                <button className="btn btn-primary"
                                        onClick={ GETSubmit }>
                                        <AiIcons.AiOutlineCloudDownload size={35}/>
                                </button>
                                {name_field}
                                {/* {course_field} */}
                                {date_field}
                                {message_field}
                               
                              </Box>
                              <br></br>
                              <center><button class="btn btn-primary" onClick={handleSubmit}>Save</button></center> 
                              </center>
                              <br></br>
      <div style={{width:"30%"}}>
      {alertuse}
      </div>  
                           
                        </Box>
                  </Box>
              </div>
  )
}

export default AddStaffNotification
