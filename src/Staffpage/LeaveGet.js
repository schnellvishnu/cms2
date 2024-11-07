import {React,useState,useEffect} from 'react'
import axios from 'axios'
import { Card, Input } from 'semantic-ui-react'
import Navbarpage from '../Adminpage/Course/Navbarpage'
import Staff_Dashboard from './Staff_Dashboard';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router";
import TablePagination from "@mui/material/TablePagination";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
function LeaveGet() {
        const[data,setData]=useState([]);
        const[search,setSearch]=useState("");
        const navigate=useNavigate()
        const [page, setPage] = useState(0);
        const [rowsPerPage, setRowsPerPage] = useState(5); 
        
  var loggedInUsername=window.localStorage.getItem('loggedInUsername')
  var loggedInPassword=window.localStorage.getItem('loggedInUserPassword')
  var loggedInUserrole=window.localStorage.getItem('loggedInUserrole')

  function getStaffdetails(){
    axios.get("http://localhost:8000/adminapp/staffdetail/")
  .then((res)=>{
   res.data.map(item=>{
    if(item.staff_uname ==loggedInUsername){
      window.localStorage.setItem('NAME', item.staff_name);
    }
   })
  })
    
  }
  var Name=window.localStorage.getItem("NAME")      

        useEffect(()=>{
                      
                          axios.get("http://localhost:8000/staffapp/staff_leave/")
                                .then(response => {
                                                  setData(response.data);
                                                          
                                                })
                                                getStaffdetails()
                                                                 
                                        },[])  
                                        
                    function deleteRow(rowid){
                    
                                        axios
                                        
                                                .delete(`http://localhost:8000/staffapp/delete_staff_leave/${rowid}`)
                                                .then(() => {
                                                            window.location.reload()
                                                          });
                                        
                                        }   
                    const createpage=()=>navigate("/applystaff_leave")  
                    
                    const handleChangePage = (event, newPage) => {
                      setPage(newPage);
                  };
    const handleChangeRowsPerPage = (event) => {
                      setRowsPerPage(+event.target.value);
                      setPage(0);
    }
    const filter_leave=data.filter(item=>item. name == Name)


    return (
            <div>
              <Box sx={{ display: 'flex' }}>
                <Staff_Dashboard/>
                                                    
                                                    
                                                    <Box component="main2" sx={{ flexGrow: 4, p: 1 }}>
                                                 
                                                    <Navbarpage/>
                                                    <center>
                        <div className="search-box">
                        <input
                          type="date"
                        
                          onChange={(e) => setSearch(e.target.value)}
                          placeholder="Search..."
                          className="search-input"
                        />
                      </div>
                </center> 
                <div>
                <button class="btn btn-primary" onClick={createpage}>Create</button>
                </div>
                <br></br>
   
                                                     
      {data ? (
        // <Card sx={{ minWidth: 900, m: 8 }}>
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{
                               
                               background:"linear-gradient(90deg, rgba(14,16,33,1) 25%, rgba(3,8,41,1) 55%, rgba(0,1,1,1) 89%)",
                              // maxHeight: 480
              }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                  <TableCell style={{background:"#29054f",color:"white"}} ><b>ID</b></TableCell>
                    <TableCell style={{background:"#29054f",color:"white"}}><b>Register Number</b></TableCell>
                    <TableCell style={{background:"#29054f",color:"white"}}><b>Name</b></TableCell>
                    <TableCell style={{background:"#29054f",color:"white"}}><b>Course</b></TableCell>
                    <TableCell style={{background:"#29054f",color:"white"}}><b>Date On</b></TableCell>
                    <TableCell style={{background:"#29054f",color:"white"}}><b>Date To</b></TableCell>
                    <TableCell style={{background:"#29054f",color:"white"}}><b>Message</b></TableCell>

                    <TableCell style={{background:"#29054f",color:"white"}}><b>Status</b></TableCell>
                    <TableCell style={{background:"#29054f",color:"white"}}><b>Action</b></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data
                     .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .filter((item)=>{
                      return search.toLowerCase () ===""?  item 
                      : item.date_on.toLowerCase().includes(search)  ;     
               })
              
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                        >
                          <TableCell style={{color:"white"}}>{row.id}</TableCell>
                          <TableCell style={{color:"white"}}>{row.regno}</TableCell>
                          <TableCell style={{color:"white"}}>{row.name}</TableCell>
                          <TableCell style={{color:"white"}}>{row.course}</TableCell>
                          <TableCell style={{color:"white"}}>{row.date_on}</TableCell>
                          
                          <TableCell style={{color:"white"}} >{row.date_to}</TableCell>
                          <TableCell style={{color:"white"}} >{row.message}</TableCell>                   
                         
                       
                          { row.status =="Approved"?<TableCell style={{ color:"green" }}>{row.status}</TableCell>:<TableCell style={{ color:"red" }}>{row.status}</TableCell> 
                                        
                                      }
                          {/* <TableCell style={{color:"blue"}}> */}
                          {row.status =="Pending" ? <TableCell style={{color:"blue"}}>   <button class ="btn btn-danger" onClick={() => deleteRow(row.id)}>Delete</button></TableCell> :<TableCell style={{color:"blue"}}>   <button class ="btn btn-danger" disabled={true} onClick={() => deleteRow(row.id)}>Delete</button></TableCell> }   
                                 
              {/* </TableCell> */}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              style={{background:"#29054f",color:"white"}}
            />
           </Paper>
        // </Card>
      ) : (
        <h3>Loading...</h3>
      )}
                                     
                                         </Box>
                                         </Box>           
                                     </div>
                      )
}

export default LeaveGet
