import React ,{ useEffect, useState } from "react";
import StaffNav from "./StaffNav";
import { Link } from "react-router-dom";
import axios from "axios";

const MemberList = () => {

        const [users, setUsers] = useState([]);
    
        useEffect(() =>{
            loadUsers();
            // console.log(" Hello");
        },[]);
    
    
        const loadUsers= async () => {
            const result = await axios.get("http://localhost:8085/member");
            setUsers(result.data);
        }


    return (
        <>
         <StaffNav/>
        <h1 className="title">MemberDetailPage</h1> 
        <table className="table" >
            <thead>
            <tr>
                <th>Member Id</th>
                <th>Member Name</th>
                <th>Gender</th>
                <th>DOB</th>
                <th>PhoneNo</th>
                <th>MailId</th>
                <th>Action</th>

            </tr> <br/>
            </thead>

           
            <tbody>
            {
                    users.map((user,index) => (
                        <tr>
                            {/* <th key={index}> {index+1} </th> */}
                            <td>{user.memberid} </td>
                            <td>{user.membersName} </td>
                            <td>{user.gender} </td>
                            <td>{user.mailId} </td>
                            <td>{user.phoneNo} </td>
                            <td>{user.dob} </td>
                            <td><Link to="/issue" className="btn btn-success">Issue</Link> </td>
                        </tr>
                    )
                    )
                }
                {/* <tr>
                    <td>Kumar</td>
                    <td>kumar@gmail.com</td>
                    <td>HeartSurgen</td>
                    <td><Link to="bookingpage" className="btn btn-success">Issue</Link> </td>
                    <td><Link to="bookingpage" className="btn btn-success">Return</Link> </td>
                    <td><Link to="bookingpage" className="btn btn-success">Renew</Link> </td>
                </tr> 
                <tr>
                    <td>Kumar</td>
                    <td>kumar@gmail.com</td>
                    <td>HeartSurgen</td>
                    <td><Link to="bookingpage" className="btn btn-success">Issue</Link> </td>
                    <td><Link to="bookingpage" className="btn btn-success">Return</Link> </td>
                    <td><Link to="bookingpage" className="btn btn-success">Renew</Link> </td>
                </tr> 
                <tr>
                    <td>Kumar</td>
                    <td>kumar@gmail.com</td>
                    <td>HeartSurgen</td>
                    <td><Link to="bookingpage" className="btn btn-success">Issue</Link> </td>
                    <td><Link to="bookingpage" className="btn btn-success">Return</Link> </td>
                    <td><Link to="bookingpage" className="btn btn-success">Renew</Link> </td>
                </tr>  */}
            </tbody>
        </table>
        
        </>
        )
}

 export default MemberList;