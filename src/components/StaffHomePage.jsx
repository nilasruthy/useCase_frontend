import React from "react";
import StaffNav from "./StaffNav";
import { Link } from "react-router-dom";

const StaffHomePage = () => {
    return (
        <>
        <StaffNav/>
        <h1 className="title">Staff Welcome Page</h1> 
        <div> 
        {/* <div className="dropdown">
               <label for="role">Member</label>

                <select name="role" id="role">
                <option value="Member"><Link to="/members" className="signup">Add Members</Link></option>
                <option value="Library Staff"><Link to="/login" className="signup">View Members</Link></option>
                
                </select>
        </div>
        <div className="dropdown">
               <label for="role">Book</label>

                <select name="role" id="role">
                <option value="Member"><Link to="/login" className="signup">Add Books</Link></option>
                <option value="Library Staff"><Link to="/login" className="signup">View Books</Link></option>
                
                </select>
        </div> */}

        <div class="list">
        <Link class="listItem" to="/addMembers">Add Members</Link>
        <Link class="listItem" to="/memberList">View Members</Link>
        <Link class="listItem" to="/addBooks">Add Books</Link>
        <Link class="listItem" to="/BookDetailPage" >View Books</Link>
        <Link class="listItem" to="/issue" >Issue Books</Link>
        <Link class="listItem" to="/issueList" >View Issued Books</Link>
        </div>
        </div>
        </>
        )
}

 export default StaffHomePage;