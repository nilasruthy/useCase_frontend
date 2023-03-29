import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
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
                            to="/memberHomePage">Home</NavLink> 

                            {/* <NavLink  
                            style={({isActive}) =>{return {color: isActive? 'white':''}}}
                            class="navlink"
                            to="/bookDetailPage">BookList</NavLink>  */}

                    

                             <NavLink  class="navlink"
                            style={({isActive}) =>{return {color: isActive? 'white':''}}}
                            to="/cartPage">Cart</NavLink> 

                            <NavLink  class="navlink"
                            style={({isActive}) =>{return {color: isActive? 'white':''}}}
                            to="/searchPage/:id">Search</NavLink> 

                            
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

 export default Nav;
