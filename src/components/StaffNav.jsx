import React from "react";
import { NavLink } from "react-router-dom";


const StaffNav = () => {


    return (
        <>
        <div >
            
            <nav>
                <div >
                    
                    <div>
                    
                        <div className="nav">
                            <h3 class="navlink">Library Management System</h3>
                           
                            <div className="navL">
                            <NavLink  
                            style={({isActive}) =>{return {color: isActive? 'white':''}}}
                            class="navlink"
                            to="/staffHomePage">Home</NavLink> 

                            <NavLink  
                            style={({isActive}) =>{return {color: isActive? 'white':''}}}
                            class="navlink"
                            to="/bookDetailPage">BookList</NavLink> 

                            <NavLink  class="navlink"
                            style={({isActive}) =>{return {color: isActive? 'white':''}}}
                            to="/memberList">Members</NavLink> 

                             <NavLink  class="navlink"
                            style={({isActive}) =>{return {color: isActive? 'white':''}}}
                            to="/Issue">Issue</NavLink> 

                            
                            <NavLink  class="navlink"
                            style={({isActive}) =>{return {color: isActive? 'white':''}}}
                            to="/">Logout</NavLink> 
                           
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        
     
        </div>
        
        </>
        )
}

 export default StaffNav;