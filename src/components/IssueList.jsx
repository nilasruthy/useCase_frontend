import React ,{useEffect, useState } from "react";
import StaffNav from "./StaffNav";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import IssueEdit from "./IssueEdit";

const IssueList=()=>{

    const [users, setUsers] = useState([]);
    const [issues, setIssues] = useState([]);
    const[currentDate, setCurrentDate] = useState(new Date());
    
    // const {id}= useParams()

    const navigate= useNavigate();

   useEffect(() =>{
        loadUsers();
        // console.log(" Hello");
       
    },[]);


    const loadUsers= async () => {
        const result = await axios.get("http://localhost:8085/issue");
        setUsers(result.data);
    }
    
    
    const onSubmitButton =async(e) => {
        e.preventDefault();
        // await axios.post("http://localhost:8085/issue",user);
        navigate('/IssueEdit');
    };

    const handleDeleteAll =()=>{
        axios.delete("http://localhost:8085/issue")
        .then((response) => {
            console.log(response.data);
          setIssues([]);
        })
        .catch((error)=> {
            console.error(error);
        });
    };

    const deleteUser=async(id) => {
        await axios.delete(`http://localhost:8085/issue/${id}`)
        loadUsers();
    }

    const updateDate = async (id) => {
        const date = new Date();
        console.log(id);
        await setCurrentDate(date);
        await axios.patch(`http://localhost:8085/issue/${id}/renew`, date);
        loadUsers();
      }


    

 return(
    
        <div>
         <StaffNav/>
             <br></br>  
             <br></br>
            <h1>Issued List</h1>   
            <br></br>
            <table className="table" >
                
                        <thead>
                            <tr>
                                <th>Issue Id</th>
                                <th>Member</th>
                                <th>Book Name</th>
                                <th>Issue Date</th>
                                <th>Edit</th>
                                {/* <th>Return</th>
                                <th>Renew</th>  */}
                            </tr> <br/>
                        </thead>
                        <tbody>
                           
                             {
                    users.map((user,index) => (
                        <tr>
                            {/* <th key={index}> {index+1} </th> */}
                            <td>{user.issueid} </td>
                            <td>{user.membersName} </td>
                            <td>{user.bookTitle} </td>
                            <td>{user.date} </td>
                            <td><Link to={`/issueEdit/${user.issueid}`}><button className="btn btn-success">Edit</button></Link></td>
                            {/* <td><button className="btn btn-success" onClick={() => deleteUser(user.id)}>Return</button></td>
                            <td><button className="btn btn-success" onClick={() => updateDate(user.id)}>Renew</button></td>  */}
                            
                        </tr> 
                    )
                    )
                }
                            
                        </tbody>
            </table>
               
        </div>
 )
}
export default IssueList;