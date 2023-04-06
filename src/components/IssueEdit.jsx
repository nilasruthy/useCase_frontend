import React ,{useEffect, useState } from "react";
import StaffNav from "./StaffNav";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const IssueEdit=()=>{

    const navigate= useNavigate();

    const [user,setUser]= useState({
        issueid:"",
        bookTitle:"",
        membersName:"",
        date:""
    })
    const id= useParams();
    const userid=Object.values(id);
    console.log(userid);

    // const [users, setUsers] = useState([]);

    useEffect(() =>{
        loadUsers();
        // console.log(" Hello");
    },[]);

    const loadUsers= async () => {
        const result = await axios.get(`http://localhost:8085/issue/${userid}`);
        console.log(result.data);
        setUser(result.data);
    }
    
    const{issueid,bookTitle,membersName,date}=user;

    const onSubmit= (e) =>{
        e.preventDefault();
        const result =  axios.put(`http://localhost:8085/issue/${userid}`,user);
        alert("Saved changes successfull");
        navigate('/issueList');
        // console.log(result.data);
        // setUsers(result.data);
    }
    
    const onSubmit2= (e) =>{
        e.preventDefault();
        const result =  axios.delete(`http://localhost:8085/issue/${userid}`,user);
        alert("Deleted record successfully");
        navigate('/issueList');
        // console.log(result.data);
        // setUsers(result.data);
    }
    const onInputChange =(e) => {
    setUser({...user, [e.target.name]:e.target.value });
    };
    
    // const onSubmit =async(e) => {
    //     e.preventDefault();
    //     await axios.post("http://localhost:8085/issue/{id}",user);
    //     navigate('/issueList');
    // };
    

 return(
    
        <div>
         <StaffNav/>
      
         <form>
                    
                 <h1>Add Issue</h1>
                 <div class="row mb-3">
                        <label for="inputEmail3" class="col-sm-1 col-form-label">Issue Id:</label>
                        <div class="col-sm-10">
                        <input type="text" 
                        placeholder="Enter your name" 
                        name="issueid"
                        value={issueid} 
                        onChange={(e) => onInputChange(e)}
                        ></input>
                        </div>
                    </div>
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
                        <label for="inputEmail3" class="col-sm-1 col-form-label">Member Name:</label>
                        <div class="col-sm-1">
                        <input type="text" 
                        placeholder="Enter your name" 
                        name="membersName"
                        value={membersName} 
                        onChange={(e) => onInputChange(e)}
                        ></input>
                       </div>
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label">Issue Date:</label>
                        <input type={"date"} 
                               placeholder="Enter your issue date" 
                               name="date"  
                               value={date}
                               onChange={(e) => onInputChange(e)}
                               />
                    </div>
                   
                    <button type="submit" class="btn btn-success issuebtn" onClick={(e)=>onSubmit(e)}>Issue Book</button>
                    <button type="submit" class="btn btn-success issuebtn" onClick={(e)=>onSubmit2(e)}> Return Book </button>
            </form> 


             <br></br>  
         
               
        </div> 
 )
}
export default IssueEdit;