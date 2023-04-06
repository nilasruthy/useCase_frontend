import React ,{ useEffect, useState } from "react";
import Nav from "./Nav";
import { useParams } from "react-router-dom";
import axios from "axios";

const CartPage = () => {
    const [user,setUser]= useState({
        bookid:"",
        bookTitle:"",
        author:"",
        category:"",
        keyword:""
    });

    const {id}=useParams();

    useEffect(() =>{
        loadUsers();
        // console.log(" Hello");
    },[]);

    const loadUsers= async () => {
        const result = await axios.get(`http://localhost:8085/book/${id}`);
        setUser(result.data);
    }

    // const{bookid,bookTitle,author,category,keyword}=user;

    return (
        <>
        <Nav/>
        <h1 className="title">Cart Page</h1> 
        <table className="table" >
            <thead>
            <tr>
                <th>Bookid</th>
                <th>BookTitle</th>
                <th>Author</th>
                <th>category</th>
                <th>Keyword</th>
                {/* <th>cart</th> */}
                

            </tr> <br/>
            </thead>
            <tbody>
                {
                    // user.map((user,index) => (
                        <tr>
                            {/* <th key={index}> {index+1} </th> */}
                            <td>{user.bookid} </td>
                            <td>{user.bookTitle} </td>
                            <td>{user.author} </td>
                            <td>{user.category} </td>
                            <td>{user.keyword} </td>  
                        </tr> 
                    // ))
                    
                }
                
                
            </tbody>
        </table>

        </>
        )
}

 export default CartPage;