import React ,{ useEffect, useState } from "react";
import Nav from "./Nav";
import StaffNav from "./StaffNav";
import { Link } from "react-router-dom";
import axios from "axios";

const BookDetailPage = () => {

    const [users, setUsers] = useState([]);

    useEffect(() =>{
        loadUsers();
        // console.log(" Hello");
    },[]);


    const loadUsers= async () => {
        const result = await axios.get("http://localhost:8085/book");
        setUsers(result.data);
    }
    return (
        <>
         <StaffNav/>
        <h1 className="title">BookDetailPage</h1> 
        <table className="table" >
            <thead>
            <tr>
                <th>Bookid</th>
                <th>BookTitle</th>
                <th>Author</th>
                <th>category</th>
                <th>Keyword</th>
                <th>Issue</th>
                

            </tr> <br/>
            </thead>
            <tbody>
                {
                    users.map((user,index) => (
                        <tr>
                            {/* <th key={index}> {index+1} </th> */}
                            <td>{user.bookid} </td>
                            <td>{user.bookTitle} </td>
                            <td>{user.author} </td>
                            <td>{user.category} </td>
                            <td>{user.keyword} </td>
                            <td><Link to="/issue" className="btn btn-success">Issue</Link> </td>
                          
                        </tr>
                        
                    )
                    )
                }
                
                
            </tbody>
        </table>
        <Link to="/addBooks"><button>Add Book</button></Link>
        
        </>
        )
}

 export default BookDetailPage;