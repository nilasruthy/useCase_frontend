import React ,{ useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

 const Signup=()=>{
   const navigate= useNavigate();

    // const [user,setUser]= useState({
    //     userName:"",
    //     // role:"",
    //     password:""
    // })

    const [password,setPassword]= useState('');
    const [userName,setUserName]= useState('');
    const [mailId,setmailId]= useState('');
    const [phoneNo,setphoneNumber]= useState('');    
    const [gender,setgender]= useState('');
    const [dob,setDOB]= useState('');
    const[role,setRole]=useState('Staff');

    // const{userName,password,role}=user;
    // const{userName,password}=user;
    const user= {userName,password,role,mailId,phoneNo,gender,dob};
   

    // const onInputChange =(e) => {
    //     setUser({...user, [e.target.name]:e.target.value });
        
    //     };

    //   const  handleChange=(e)=>{
    //         const inputValue=e.target.value;
    //         const regex=/^(member|staff)$/i;
    //         if(regex.test(inputValue)){
    //             setRole(inputValue);
    //         }
    //     };

        const onSubmit =async(e) => {

            e.preventDefault();
            if(role=='Staff'){
                await axios.post("http://localhost:8085/staff",user);
                navigate('/login');
            }
            else{
                await axios.post("http://localhost:8085/member",user);
            navigate('/login');
            }
            
    
        };


    return(
        <div className="signupComp">
            <h1>Signup</h1>

          
                    <form>
                    <div class="row mb-3">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Name:</label>
                        <div class="col-sm-1">
                        <input type="text" 
                               placeholder="Enter your name" 
                               name="userName"
                               value={userName} 
                            // onChange={(e) => onInputChange(e)}
                               onChange={(e) => setUserName(e.target.value)}></input>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label class="col-sm-2 col-form-label">MailId:</label>
                        <div class="col-sm-1">
                        <input type="text" 
                               placeholder="Enter your mailId" 
                               name="mailId"
                               value={mailId} 
                               onChange={(e) => setmailId(e.target.value)}></input>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label  class="col-sm-2 col-form-label">Gender:</label>
                        <div class="col-sm-1">
                        <input type="text" 
                               placeholder="Enter your gender" 
                               name="gender"
                               value={gender} 
                               onChange={(e) => setgender(e.target.value)}></input>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label class="col-sm-2 col-form-label">Phone Number:</label>
                        <div class="col-sm-1">
                        <input type="text" 
                               placeholder="Enter your phonenumber" 
                               name="phoneNo"
                               value={phoneNo} 
                               onChange={(e) =>setphoneNumber (e.target.value)}></input>
                        </div>
                    </div>

                    
                    <div class="row mb-3">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Create Password:</label>
                        <div class="col-sm-1">
                        <input type="password" 
                               placeholder="Enter your password" 
                               name="password"
                               value={password} 
                            //    onChange={(e) => onInputChange(e)}></input>
                            onChange={(e) => setPassword(e.target.value)}></input>
                        {/* <input type="password" class="form-control" id="inputPassword3"/> */}
                        </div>
                    </div>


                    <div class="row mb-3">
                        <label for="inputPassword3" class="col-sm-2 col-form-label"> DOB:</label>
                        <div class="col-sm-1">
                        <input type="date" 
                               placeholder="Enter your DOB" 
                               name="dob"
                               value={dob} 
                            //    onChange={(e) => onInputChange(e)}></input>
                            onChange={(e) => setDOB(e.target.value)}></input>
                        {/* <input type="password" class="form-control" id="inputPassword3"/> */}
                        </div>
                    </div>

                    <div class="Radio">Role:
                    <div class=" form-check form-check-inline">
                        <input class="form-check-input" type="radio"
                              name="inlineRadioOptions" id="inlineRadio1" 
                              value="Member" onChange={(e)=> setRole(e.target.value)}/>
                        <label class="form-check-label" for="inlineRadio1">Member</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" 
                               name="inlineRadioOptions" id="inlineRadio2" 
                               value="Staff" onChange={(e)=> setRole(e.target.value)}/>
                        <label class="form-check-label" for="inlineRadio2">Staff</label>
                    </div>
                    </div>
                    
                    <button type="submit" class="btn btn-primary" onClick={(e)=>onSubmit(e)}>Sign in</button></form>
            </div>
    )
 }

 export default Signup;