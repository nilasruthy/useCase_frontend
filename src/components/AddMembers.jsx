import React ,{ useState } from "react";
import StaffNav from "./StaffNav";
// import { Link, useNavigate } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import MemberList from "./MemberList";
// import {useHistory} from "react-router-dom";


const AddMembers = () => {

const navigate= useNavigate();

const [user,setUser]= useState({
    name:"",
    Email:"",
    DOB:"",
    gender:"",
    phoneNo:""
})

const{membersName,mailId,dob,gender,phoneNo}=user;

const onInputChange =(e) => {
setUser({...user, [e.target.name]:e.target.value });
};

const onSubmit =async(e) => {
    e.preventDefault();
    await axios.post("http://localhost:8085/member",user);
    navigate('/memberList');
};

// function handleSubmit(e) {
//     e.preventDefault();
//     console.log('You clicked submit.');
//   }

// function Login() {
//     let history = useHistory();
// }



    return (
        <>
         <StaffNav/>
        <h1 className="title">Add Member</h1> 
        <form >
        {/* onSubmit= {(e) => onSubmit(e)} */}
                   
                    <div className="form-group mb-2">
                        <label className="form-label">Name:</label>
                        <input type={"text"} 
                               placeholder="Enter your name" 
                               name="membersName" 
                               value={membersName} 
                               onChange={(e) => onInputChange(e)}
                               />  
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label">Email:</label>
                        <input type={"text"} 
                               placeholder="Enter your mail id" 
                               name="mailId" 
                               value={mailId} 
                               onChange={(e) => onInputChange(e)}
                               />  
                    </div>

                    <div className="form-group mb-2">
                        <label className="form-label">DOB:</label>
                        <input type={"date"} 
                               placeholder="Enter your age" 
                               name="dob"  
                               value={dob}
                               onChange={(e) => onInputChange(e)}
                               />
                    </div>

                    <div className="form-group mb-2">
                        <label className="form-label">Gender:</label>
                        <input type={"text"} 
                        placeholder="Enter your gender" 
                        name="gender"  
                        value={gender}
                        onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label">Phone No:</label>
                        <input type={"text"}
                               placeholder="Enter your password" 
                               name="phoneNo"  
                               value={phoneNo}
                               onChange={(e)=>onInputChange(e)}
                               />
                    </div>
                    <button className="btn btn-success" onClick={(e)=>onSubmit(e)}>Submit</button>
                    {/* <button className="btn btn-success" onClick={() => {
                        history.push("/memberList")
                    }}
                    >Submit</button> */}
                    {/* <form onSubmit={handleSubmit}>
                       <button type="submit">Submit</button>
                    </form> */}

                    {/* <button className="btnc btn-success"><Link to="/memberList">Submit</Link></button> */}
        </form>   
        </>
        )
}

 export default AddMembers;