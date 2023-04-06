import React ,{useEffect, useState } from "react";
import StaffNav from "./StaffNav";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Issue=()=>{

    const navigate= useNavigate();

    const [user,setUser]= useState({
        bookTitle:"",
        membersName:"",
        issue:""
    })

    const [users, setUsers] = useState([]);

    useEffect(() =>{
        loadUsers();
        // console.log(" Hello");
    },[]);

    const loadUsers= async () => {
        const result = await axios.get("http://localhost:8085/issue");
        setUsers(result.data);
    }
    
    const{bookTitle,membersName,issue}=user;
    
    const onInputChange =(e) => {
    setUser({...user, [e.target.name]:e.target.value });
    };
    
    const onSubmit =async(e) => {
        e.preventDefault();
        await axios.post("http://localhost:8085/issue",user);
        navigate('/issueList');
    };
    
    const onSubmit2 =async(e) => {
        e.preventDefault();
        // await axios.post("http://localhost:8085/issue",user);
        navigate('/issueList');
    };
    

 return(
    
        <div>
         <StaffNav/>
      
         <form>
                    
                 <h1>Add Issue</h1>
                    <div class="row mb-3">
                        <label for="inputEmail3" class="col-sm-1 col-form-label">Book Title:</label>
                        <div class="col-sm-10">
                        <input type="text" 
                        placeholder="Enter your name" 
                        name="bookTitle"
                        value={bookTitle} 
                        onChange={(e) => onInputChange(e)}
                        ></input>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputEmail3" class="col-sm-1 col-form-label">Member:</label>
                        <div class="col-sm-1">
                        <input type="text" 
                        placeholder="Enter your name" 
                        name="membersName"
                        value={membersName} 
                        onChange={(e) => onInputChange(e)}
                        ></input>
                       </div>
                    </div>
                    <div className="form-group mb-2 row mb-3">
                        <label className="col-sm-1 col-form-label">Issue:</label>
                        <div class="col-sm-1">
                        <input type={"date"} 
                               placeholder="Enter your issue date" 
                               name="issue"  
                               value={issue}
                               onChange={(e) => onInputChange(e)}
                               />
                               </div>
                    </div>
                   
                    <button type="submit" class="btn btn-success issuebtn" onClick={(e)=>onSubmit(e)}>Issue Book</button>
                    {/* <br></br> */}
                    <button type="submit" class="btn btn-success issuebtn" onClick={(e)=>onSubmit2(e)}>View Issue List</button>
            </form> 


             <br></br>  
            {/* <h1>Issued List</h1>    */}
            {/* <table className="table" >
                
                        <thead>
                            <tr>
                                <th>Member</th>
                                <th>Book Name</th>
                                <th>Issue Date</th>
                                <th>Return</th>
                                <th>Renew</th>
                            </tr> <br/>
                        </thead>
                        <tbody>
                    
                             {
                    users.map((user,index) => (
                        <tr>
                           
                            <td>{user.members_name} </td>
                            <td>{user.bookTitle} </td>
                            <td>{user.date} </td>  
                            
                        </tr> 
                    )
                    )
                }
                            
                        </tbody>
            </table>*/}
               
        </div> 
 )
}
export default Issue;