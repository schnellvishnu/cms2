import React from 'react'
import { useNavigate } from "react-router";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Box from '@mui/material/Box';
import { useMediaQuery } from 'react-responsive';
function Navbarpage() {
  var loggedInUsername=window.localStorage.getItem('loggedInUsername')
  var loggedInPassword=window.localStorage.getItem('loggedInUserPassword')
  var loggedInUserrole=window.localStorage.getItem('loggedInUserrole')
  const isMobile = useMediaQuery({ query: '(max-width: 300px)' });

  const isDesktop = useMediaQuery({ minWidth: 1000 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1224 });
  const style = {};

  if (isMobile) {
    style.marginLeft = '4px';
  } else if (isDesktop) {
    style.marginLeft = '800px';
  } else if(isTablet) {
    style.marginLeft = '400px';
  }
const navigate=useNavigate()
  function handleLogout(){
    window.localStorage.removeItem('loggedInUsername');

    window.localStorage.removeItem('loggedInUserPassword');
  
    window.localStorage.removeItem('loggedInUserrole');
    navigate("/");
             
}     
  return (
    
                 
      <Navbar 
    
    style={{ width:"100%", background: " linear-gradient(90deg, rgba(0,6,62,1) 25%, rgba(12,16,51,1) 55%, rgba(28,52,126,1) 89%)" }}
     variant="dark" >
    
          <Navbar.Brand href="#home">
          <div class="patterns"><svg width="150%" height="60"><defs><pattern id="polka-dots" x="0" y="0" width="10" height="100"patternUnits="userSpaceOnUse"><circle fill="#be9ddf" cx="25" cy="25" r="3"></circle></pattern><style>@import url("https://fonts.googleapis.com/css?  family=Lora:400,400i,700,700i");
   </style></defs><text x="50%" y="60%"  text-anchor="middle">   Welcome {loggedInUsername}
 </text></svg></div>
            {/* Welcome {loggedInUsername}  */}

          </Navbar.Brand>
          <Nav className="me-auto" style={style}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing" ><button id="logout1" 
                type="submit"
                className="btn btn-danger"
                onClick={handleLogout}
              >
                Logout
            </button></Nav.Link>
          </Nav>
     
      </Navbar> 
      
    
  )
}

export default Navbarpage
