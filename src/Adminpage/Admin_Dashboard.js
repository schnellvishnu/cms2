import React, { useState } from 'react';

import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList,
    
}from "react-icons/fa";
import { RiHistoryLine } from "react-icons/ri";
import { FaRegMessage } from "react-icons/fa6";
import { FiMessageSquare } from "react-icons/fi";
import { IoMdNotifications } from "react-icons/io";
import { ImNotification } from "react-icons/im";
import { PiStudentFill } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { FaList } from "react-icons/fa6";
import { MdPlaylistAddCircle } from "react-icons/md";
import { NavLink } from 'react-router-dom';

function Admin_Dashboard() {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/admin-chart/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/coursedetails/",
            name:"Course",
            icon:<FaList />
        },
        {
            path:"/staffdetails",
            name:"Staff",
            icon:<GiTeacher />
        },
        {
            path:"/studentdetails",
            name:"Student",
            icon:<PiStudentFill />
        },
        {
            path:"/subjectdetails",
            name:"Subjects",
            icon:<MdPlaylistAddCircle />
        },
        {
            path:"/student_notification/",
            name:"Notification For Students",
            icon:<IoMdNotifications />
        },
        {
            path:"/staff_notification/",
            name:"Notification For Staff",
            icon:<ImNotification />
        },
        {
            path:"/view_staff_leave",
            name:" Staff Leave",
            icon:<FaRegMessage />
        },
        {
            path:"/view_student_leave",
            name:"Students Leave",
            icon:<FiMessageSquare />
        },
        {
            path:"/history",
            name:"History",
            icon:<RiHistoryLine />
        }
        
    ]
  return (
    <div>
         
    <div style={{width: isOpen ? "200px" : "50px", background: " linear-gradient(90deg, rgba(0,6,62,1) 25%, rgba(12,16,51,1) 55%, rgba(28,52,126,1) 89%)",height:"1300px"}} className="sidebar">
        <div className="top_section">
            <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
            <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                <FaBars onClick={toggle}/>
            </div>
        </div>
        {
            menuItem.map((item, index)=>(
                <NavLink to={item.path} key={index} className="link" activeclassName="active">
                    <div className="icon">{item.icon}</div>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                </NavLink>
            ))
        }
    </div>
   
 </div>
      
  )
}

export default Admin_Dashboard
