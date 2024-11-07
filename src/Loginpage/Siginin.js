import {React,useState,useEffect} from 'react';
import Login, { Render } from 'react-login-page';
import Logo from 'react-login-page/logo';
import axios from 'axios';
import { useNavigate } from "react-router";
import Alert from '@mui/material/Alert';
function Siginin() {
   const[username,setUsername]=useState("") 
   const[password,setPassword]=useState("") 
   const navigate = useNavigate();
   const[alertuse,setAlertuse]=useState("")
   const handleSubmit=(e)=>{ 
    
        e.preventDefault();
        axios.post("http://localhost:8000/loginapp/signin/",{
                    "username":  username,
                    "password": password               
            })
                .then((res) => {
                                
                                if(res.data == 100){
                                    window.localStorage.setItem('loggedInUsername', username);
                                    window.localStorage.setItem('loggedInUserPassword', password);
                                    window.localStorage.setItem('loggedInUserrole', "admin");
                                    navigate("admin-chart/");  
                                }      
                                else if(res.data == 200) {
                                    window.localStorage.setItem('loggedInUsername', username);
                                    window.localStorage.setItem('loggedInUserPassword', password);
                                    window.localStorage.setItem('loggedInUserrole', "staff");
                                    navigate("/staff-chart/")
                                 }
                                
                                else if(res.data == 300) {
                                    window.localStorage.setItem('loggedInUsername', username);
                                    window.localStorage.setItem('loggedInUserPassword', password);
                                    window.localStorage.setItem('loggedInUserrole', "student");
                                    navigate("/student-chart/")
                                 }
                                else if(res.data=="User Does Not Exist"){
                                    setAlertuse( 
                                        <Alert severity="error">User Does Not Exist .</Alert>
                                      )
                                } 
                                else if(res.data=="Incorrect Password"){
                                    setAlertuse( 
                                        <Alert severity="error">Incorrect Password .</Alert>
                                      )
                                } 

                              });
   }

  return (
                
                    <div style={{
                        background: "linear-gradient(90deg, rgba(35,40,82,1) 25%, rgba(26,34,122,1) 55%, rgba(27,44,94,1) 89%)",
                       height:"800px"
                        
                      }} 
                    >  
                   
                    <div class="row">
                    
                   
                    <div class="colm-form">
                        <div class="form-container">
                            <input type="text" placeholder="Enter Username"  onChange={(e) => setUsername(e.target.value)}></input>
                            <input type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)}></input>
                            <button class="btn-login"  onClick={handleSubmit}>Login</button>
                            
                            <button class="btn-new">Create new Account</button>
                        </div>
                      
                    </div>
                   
                
      
                    </div>
                 
                    <div style={{width:"50%"}}>
                  {alertuse}
                  </div>  
                   
                 </div>  
                  
              
  )
}

export default Siginin
