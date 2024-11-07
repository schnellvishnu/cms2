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
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useMediaQuery } from 'react-responsive';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
function Addresult() {
     const [regno,setRegno]=useState([])
     const[reg_label,setReg_label]=useState("")
     const[name,setName]=useState("")
     const[course,setCourse]=useState("")
     const[subject,setSubject]=useState([]) 
     const[subject_labeloption,setSubjectlabel]=useState("")
     const[grade,setGrade] =useState("")
     const[mark,setMark] =useState("")
     const[date,setDate]=useState("")
     const[status,setStatus]=useState("")
     const[alertuse,setAlertuse]=useState("")
     var loggedInUsername=window.localStorage.getItem('loggedInUsername')
     var loggedInPassword=window.localStorage.getItem('loggedInUserPassword')
     var loggedInUserrole=window.localStorage.getItem('loggedInUserrole')
     const navigate=useNavigate()
     const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
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

     function getStudentdata(reg){
                    // alert(reg)
                    axios.get("http://localhost:8000/adminapp/student_registerno/"+reg)
                    .then((res)=>{
                        
                        setName(res.data[0].student_name)
                        setCourse(res.data[0].course)                
                    })
     }

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


const suboption = subject.map(options =>({
                    label: options.subject
}))

const regoption = regno.map(options =>({
                    label: options.registerno
}))


const handleSubject = (event,value)=>{
     setSubjectlabel(value)
}
const handleStudent=(event,value) => {
                    // alert(reg_label)
   setReg_label(value)
   getStudentdata(value)
  
}

const handleReg=(event,value)=>{
                    // alert(reg_label)
                    setReg_label(value);
                    getStudentdata(value)
                 }

useEffect(()=>{
    getSubjectoption()
    getRegisterno()                
},[])


// var regfield=  <TextField id="outlined-basic" onChange={ handleReg}  label="Enter Register Number"></TextField> 
var namefield=  <TextField id="outlined-stname" 
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
var coursefield=  <TextField id="outlined-stcourse"
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
var subjectfield=  <TextField id="outlined-stsubject"
                  onChange={ (e)=>setSubject(e.target.value)}  
                  label="Enter Subject"
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
var gradefield=  <TextField id="outlined-regrade" 
                 onChange={ (e)=>setGrade(e.target.value)}  
                 label="Enter Grade"
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
var markfield=  <TextField id="outlined-stmark" 
                 onChange={ (e)=>setMark(e.target.value)}  
                 label="Enter Mark"
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
var datefield=  <TextField id="outlined-date"  
                type="date" onChange={ (e)=>setDate(e.target.value)} 
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
             label="Enter Status" 
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
     
      var testPassed = "false";
      if(reg_label != ""){
        testPassed="true"
      }
      else{
        testPassed ="false"
       setAlertuse( 
        <Alert severity="error">Please Select Register Number.</Alert>
      )
        
      }
      if(testPassed == "true"){
      if(subject_labeloption != ""){
        testPassed ="true"
      }
      else{
        testPassed ="false"
        setAlertuse( 
          <Alert severity="error">Please Select Subject.</Alert>
        )
      }
    }
    if(testPassed == "true"){
      if(mark != ""){
        testPassed ="true"
      }
      else{
        testPassed ="false"
        setAlertuse( 
          <Alert severity="error">Please Enter Mark .</Alert>
        )
      }
    }
    if(testPassed == "true"){
      if(name != ""){
        testPassed ="true"
      }
      else{
        testPassed ="false"
        setAlertuse( 
          <Alert severity="error">Please Enter Name .</Alert>
        )
      }
    }
    if(testPassed == "true"){
      if(grade != ""){
        testPassed ="true"
      }
      else{
        testPassed ="false"
        setAlertuse( 
          <Alert severity="error">Please Enter Grade .</Alert>
        )
      }
    }
    if(testPassed == "true"){
      if(status != ""){
        testPassed ="true"
      }
      else{
        testPassed ="false"
        setAlertuse( 
          <Alert severity="error">Please Enter Status .</Alert>
        )
      }
    }
    if(testPassed == "true"){
      if(date != ""){
        testPassed ="true"
      }
      else{
        testPassed ="false"
        setAlertuse( 
          <Alert severity="error">Please Enter Date .</Alert>
        )
      }
    }
    if(testPassed == "true"){
      axios.post("http://localhost:8000/staffapp/addresult/",{

             "regno":reg_label,
             "name":name,
             "course":course,
             "subject":subject_labeloption,
             "grade":grade,
              "mark":mark,
              "date":date ,
              "status":status,
              "loggedInUsername":loggedInUsername,
              "loggedInUserrole":loggedInUserrole     
      })
      .then(()=>{
          //  alert("saved")
           navigate("/getresult")         
      })
    }
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
                    {/* <Box
                         component="form"
                         sx={{ '& > :not(style)': { m: 1} }}
                         noValidate
                         autoComplete="off"
                    >

  
                    <Autocomplete
                         disablePortal
                         options={regoption}
                         onInputChange={handleReg}
                         sx={{ width: 300 }}
                         renderInput={(params) => <TextField {...params} label="Select Subject" />}
                    />
                    {namefield}
                    {coursefield}
                    <Autocomplete
                         disablePortal
                         options={suboption}
                         onInputChange={handleSubject}
                         sx={{ width: 300 }}
                         renderInput={(params) => <TextField {...params} label="Select Subject" />}
                    />
                    {datefield}                                 
                    {markfield}
                    {gradefield}
               </Box>

               <center><button class="btn btn-primary" onClick={handleSubmit}>Save</button></center> */}
               <br></br> <br></br> <br></br>
<center style={{background: "linear-gradient(90deg, rgba(16,18,54,1) 25%, rgba(26,37,62,1) 55%, rgba(8,11,69,1) 84%)"}}>
     <Grid container spacing={3}>
      <Grid item xs={4}>
    
      <Autocomplete
                         disablePortal
                          id="disable-close-on-select"
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
                         renderInput={(params) => <TextField {...params} label="Select Register Number" />}
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
                         options={suboption}
                         onInputChange={handleSubject}
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
<br></br>
      <div style={{width:"30%"}}>
      {alertuse}
      </div>

      </Box>
      </Box>
    </div>
  )
}

export default Addresult
