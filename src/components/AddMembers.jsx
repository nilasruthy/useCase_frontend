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
    userName:"",
    mailId:"",
    dob:"",
    gender:"",
    phoneNo:""
})

const{userName,mailId,dob,gender,phoneNo}=user;

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
        <form className="form">
        {/* onSubmit= {(e) => onSubmit(e)} */}
                   
                    <div className="form-group mb-2 row mb-3">
                        <label className="col-sm-1 col-form-label">Name:</label>
                        <div class="col-sm-1">
                        <input type={"text"} 
                               placeholder="Enter your name" 
                               name="userName" 
                               value={userName} 
                               onChange={(e) => onInputChange(e)}
                               />  
                        </div>
                    </div>
                    <div className="form-group mb-2 row mb-3">
                        <label className="col-sm-1 col-form-label">Email:</label>
                        <div class="col-sm-1">
                        <input type={"email"} 
                               placeholder="Enter your mail id" 
                            //    pattern=".+@gmail.com"
                               name="mailId" 
                               value={mailId} 
                               onChange={(e) => onInputChange(e)}
                               />  
                        </div>
                    </div>

                    <div className="form-group mb-2 row mb-3">
                        <label className="col-sm-1 col-form-label">DOB:</label>
                        <div class="col-sm-1">
                        <input type={"date"} 
                               placeholder="Enter your age" 
                               name="dob"  
                               value={dob}
                               onChange={(e) => onInputChange(e)}
                               />
                        </div>
                    </div>

                    <div className="form-group mb-2 row mb-3">
                        <label className="col-sm-1 col-form-label">Gender:</label>
                        <div class="col-sm-1">
                        <input type={"text"} 
                        placeholder="Enter your gender" 
                        name="gender"  
                        value={gender}
                        onChange={(e)=>onInputChange(e)}
                        />
                        </div>
                    </div>
                    <div className="form-group mb-2 row mb-3">
                        <label className="col-sm-1 col-form-label">Phone No:</label>
                        <div class="col-sm-1">
                        <input type={"text"}
                               placeholder="Enter your password" 
                               name="phoneNo"  
                               value={phoneNo}
                               onChange={(e)=>onInputChange(e)}
                               />
                        </div>
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