import React ,{ useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { facartshopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'font-awesome/css/font-awesome.min.css';

const Homepage = () => {

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
        <div class="background">
        <h1 className="title">Platform for Library</h1>

        <div className="link col-md-2">
        <Link to="/signup" className="signup">Signup</Link>
        <Link to="/login" className="login">Login</Link>
        </div>

        <div>
        <table className="table" >
            <thead>
            <tr>
                <th>Bookid</th>
                <th>BookTitle</th>
                <th>Author</th>
                <th>category</th>
                <th>Keyword</th>
                {/* <th>Issue</th>
                <th>cart</th> */}
                

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
                            {/* <td><Link to="/issue" className="btn btn-success">Issue</Link> </td>
                            <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                            <i class="fa-solid fa-cart-shopping"></i> */}
                        </tr> 
                    )
                    )
                }
                
                
            </tbody>
        </table>
        </div>
        </div>
        )
}

 export default Homepage;