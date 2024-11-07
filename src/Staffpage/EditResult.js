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
import { useMediaQuery } from 'react-responsive';
function EditResult() {
                    const [regno,setRegno]=useState([])
                    const[reg_label,setReg_label]=useState("")
                    const[name,setName]=useState("")
                    const[course,setCourse]=useState("")
                    const[subject,setSubject]=useState([]) 
                    const[subject_label,setSubject_Label]=useState("")
                    const[grade,setGrade] =useState("")
                    const[mark,setMark] =useState("")
                    const[date,setDate]=useState("")
                    const[status,setStatus]=useState("")
                    const navigate=useNavigate()
                    const {id}=useParams()

                    function getSubjectoption(){
                                        axios.get("http://localhost:8000/adminapp/subjectdetail/")
                                        .then((res)=>{
                                             setSubject(res.data)
                                        })
                    }
                    
                    function getRegisterno(){
                                        axios.get("http://localhost:8000/adminapp/studentdetail/")
                                        .then((res)=>{
                                                            setRegno(res.data)
                                        })
                    }
                    
                    
const subjectoption = subject.map(options => ({
                                        label: options.subject.toUpperCase()
                    }))
                    
                    
                    const regoption = regno.map (options =>({
                                        label: options.registerno.toUpperCase()
                    }))
                    const handleChange=(event,value)=>{
                                        setSubject_Label(value)
                    }
                    
                    
                    const handleReg=(event,value)=>{
                                        // alert(reg_label)
                                        setReg_label(value);
                                        
                                     }

   function getResultEditdata(){
                    axios.get("http://localhost:8000/staffapp/result_individual/"+ id +"/")
                    .then((res)=>{
                                        setReg_label(res.data[0].regno)
                                        setName(res.data[0].name)
                                        setCourse(res.data[0].course)
                                        setSubject_Label(res.data[0].subject)
                                        setMark(res.data[0].mark)
                                        setGrade(res.data[0].grade)
                                        setDate(res.data[0].date)
                                        setStatus(res.data[0].status)

                    })             
   }                                  
                    
                    useEffect(()=>{
                        getSubjectoption()
                        getRegisterno() 
                        getResultEditdata()               
                    },[])                  
                              
var namefield=  <TextField id="outlined-basic" 
                onChange={ (e)=>setName(e.target.value)}
                 value={name}  label="Enter Name"
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
var coursefield=  <TextField id="outlined-basic" 
                  onChange={ (e)=>setCourse(e.target.value)}
                   value={course} label="Enter Course"
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
var subjectfield=  <TextField id="outlined-basic" 
                    onChange={ (e)=>setSubject(e.target.value)} 
                    value={subject} label="Enter Subject"
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
var gradefield=  <TextField id="outlined-basic" 
                  onChange={ (e)=>setGrade(e.target.value)} 
                  value={grade} label="Enter Grade"
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
var markfield=  <TextField id="outlined-basic" 
                 onChange={ (e)=>setMark(e.target.value)} 
                 value={mark} label="Enter Mark"
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
var datefield=  <TextField id="outlined-basic" 
                  type="date" onChange={ (e)=>setDate(e.target.value)} 
                  value={date}
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
var statusfield=  <TextField id="outlined-status"   
                  onChange={ (e)=>setStatus(e.target.value)} 
                  value={status}
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
const handleSubmit =(e)=>{
                          e.preventDefault()
                          alert(reg_label)
                          axios.put(`http://localhost:8000/staffapp/updateresult/${id}`,{
                    
                                 "regno":reg_label,
                                 "name":name,
                                 "course":course,
                                 "subject" :subject_label,
                                 "grade":grade,
                                  "mark":mark,
                                  "date":date ,
                                  "status" :status    
                          })
                          .then(()=>{
                              //  alert("saved") 
                              navigate("/getresult")        
                          })
                    }
                    
                    const style = {};
                    const isDesktop = useMediaQuery({ minWidth: 1224 });
                    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1224 });
                    const isMobile = useMediaQuery({ maxWidth: 767 });
                                    
    return (
      <div style={{
        background: "linear-gradient(90deg, rgba(35,40,82,1) 25%, rgba(26,34,122,1) 55%, rgba(27,44,94,1) 89%)",
        
      }} 
  >
                 
   <Box sx={{ display: 'flex' }}>
        <Staff_Dashboard/>
             <Box component="main2" sx={{ flexGrow: 4, p: 1 }}>
                 <Navbarpage/>               
                 
             <br></br> <br></br> <br></br>
<center style={{background: "linear-gradient(90deg, rgba(16,18,54,1) 25%, rgba(26,37,62,1) 55%, rgba(8,11,69,1) 84%)"}}>
   <Grid container spacing={3}>
    <Grid item xs={4}>
  
    <Autocomplete
                       disablePortal
                      
                        value={reg_label}
                        options={regoption}
                        onInputChange={handleReg}
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
                       renderInput={(params) => <TextField {...params} label="Select Register Number"  />}
                  />
                
    </Grid>
    <Grid item xs={4}>
    {markfield}
    </Grid>

    <Grid item xs={4}>
    {coursefield}
    </Grid>
  </Grid>
   <br></br>
  <Grid container spacing={2}>
   
    <Grid item xs={4}>
    <Autocomplete
                       disablePortal
                       options={subjectoption}
                       value={subject_label}
                       onInputChange={handleChange}
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
                       renderInput={(params) => <TextField {...params} label="Select Subject" />}
                  />
    
    </Grid>
    <Grid item xs={4}>
    {namefield}
    </Grid>
    <Grid item xs={4}>
    {gradefield}
    </Grid>
    <Grid item xs={4}>
   
    </Grid>
    <Grid item xs={4}>
    {statusfield} 
    </Grid>
    <Grid item xs={4}>
    {datefield} 
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

export default EditResult