import React ,{ useState } from "react";
// import { Link } from "react-router-dom";
import StaffNav from "./StaffNav";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const StaffProfile=()=>{
    const navigate= useNavigate();

    const [user,setUser]= useState({
        userName:"",
        phoneNo:"",
        gender:"",
        dob:"",
        mailId:""
    })
    const id= useParams();
    const userid=Object.values(id);
    console.log(userid);

    return(
        <>
        <ul>
            <li>
                Name:
            </li>
            <li>
                DOB:
            </li>
            <li>
                Gender:
            </li>
            <li>
                PhoneNumber:
            </li>
            <li>
                MailId:
            </li>
        </ul>
        </>
    )
}

export default StaffProfile;