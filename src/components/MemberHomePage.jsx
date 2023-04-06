import React ,{ useEffect, useState } from "react";
import Nav from "./Nav";
// import { Link } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
// import thumbnail from "../assests/thumbnail.jfif";
import axios from "axios";


const MemberHomePage = () => {

    const [users, setUsers] = useState([]);

    const navigate= useNavigate();

    useEffect(() =>{
        loadUsers();
        // console.log(" Hello");
    },[]);


    const loadUsers= async () => {
        const result = await axios.get("http://localhost:8085/book");
        setUsers(result.data);
    }

    const onSubmit =async(e) => {
        e.preventDefault();
        // await axios.post("http://localhost:8085/member",users);
        navigate('/cartPage');
    };
    

    return (
        <>
        <Nav/>
        <h1 className="title">  Member Welcome Page</h1> 
        

        <table className="table" >
            <thead>
            <tr>
                <th>Bookid</th>
                <th>BookTitle</th>
                <th>Author</th>
                <th>category</th>
                <th>Keyword</th>
                <th>cart</th>
                

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
                            {/* <td><Link to="/issue" className="btn btn-success">Add to Cart</Link> </td> */}
                            <td><button className="btn btn-success" onClick={(e)=>onSubmit(e)}>Add to Cart</button></td>
                     
                            {/* <FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> */}
                            {/* <i class="fa-solid fa-cart-shopping"></i> */}
                        </tr> 
                    )
                    )
                }
                
                
            </tbody>
        </table>

       
        </>
        )
}

 export default MemberHomePage;
 