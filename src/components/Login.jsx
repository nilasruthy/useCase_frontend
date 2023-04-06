import React ,{ useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";

 const Login=()=>{
    const navigate= useNavigate();

    const [user,setUser]= useState({
        userName:"",
        password:"",
        role:""
    })

    // const[role, setRole]= useState('');
    
    const{userName,password,role}=user;
    
    const onInputChange =(e) => {
    setUser({...user, [e.target.name]:e.target.value });
    };
    
    const onSubmit =async(e) => {
        e.preventDefault();
        await axios.post("http://localhost:8085/login/add",user);

        if(role=="member"){
        navigate('/memberHomePage');
        }
        else if(role == "staff"){
            navigate('/staffHomePage');
        }
        else{
            navigate('/login');
            // console.log("Incorrect credentials")
            // Popup.alert('I am alert, nice to meet you');

        }


    };

    return(
        <div class="loginComp">
            <h1>Login</h1>
            <form>
                    <div class="row mb-3">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Name:</label>
                        <div class="col-sm-1">
                        <input type="text" 
                        placeholder="Enter your name" 
                        name="userName"
                        value={userName} 
                        onChange={(e) => onInputChange(e)}></input>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Role:</label>
                        <div class="col-sm-1">
                            <input type="text" 
                            placeholder="Enter your role" 
                            name="role"
                            value={role} 
                            onChange={(e) => onInputChange(e)}
                                />
                            {/* <select name="role"
                                    value={role} 
                                    onChange={(e) => onInputChange(e)} 
                                    id="role">
                                <option value="Staff">Staff</option>
                                <option value="Member">Member</option>
                
                            </select> */}
                           {/* <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="member" onChange={(e)=> setRole(e.target.value)}/>
                                    <label class="form-check-label" for="inlineRadio1">Member</label>
                            </div>

                            <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="staff" onChange={(e)=> setRole(e.target.value)}/>
                                    <label class="form-check-label" for="inlineRadio2">Staff</label>
                            </div> */}

                           
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="inputPassword3" class="col-sm-2 col-form-label"> Password:</label>
                        <div class="col-sm-1">
                        <input type="password" 
                               placeholder="Enter your password" 
                               name="password"
                               value={password} 
                               onChange={(e) => onInputChange(e)}></input>
                        {/* <input type="password" class="form-control" id="inputPassword3"/> */}
                        </div>
                    </div>

                 <button className="btn btn-success" onClick={(e)=>onSubmit(e)}>Submit</button>
                 {/* <Link to={`/issueEdit/${user.issueid}`}> <button className="btn btn-success" onClick={(e)=>onSubmit(e)}>Submit</button></Link> */}
                 
            </form>   

        </div>
        
    )
 }

 export default Login;