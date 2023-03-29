import React ,{ useState } from "react";
// import { Link } from "react-router-dom";
import StaffNav from "./StaffNav";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AddNewBook=()=>{

    let navigate= useNavigate();

    const [user,setUser]= useState({
        bookid:"",
        bookTitle:"",
        author:"",
        category:"",
        keyword:""
    })
    
    const{bookid,bookTitle,author,category,keyword}=user;
    
    const onInputChange =(e) => {
    setUser({...user, [e.target.name]:e.target.value });
    };
    
    const onSubmit =async(e) => {
        e.preventDefault();
        await axios.post("http://localhost:8085/book",user);
        navigate("/bookDetailPage");
    };
    



    return(
        <>
        <StaffNav/>
        <h1>Add New Book</h1>
        <form>
                    <div className="form-group mb-2">
                        <label className="form-label">id:</label>
                        <input type={"text"} 
                               placeholder="Enter your name" 
                               name="bookid"
                               value={bookid} 
                               onChange={(e) => onInputChange(e)}
                                />
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label">BookTitle:</label>
                        <input type={"text"} 
                               placeholder="Enter your BookTitle" 
                               name="bookTitle"
                               value={bookTitle} 
                               onChange={(e) => onInputChange(e)}
                               />
                    </div>

                    <div className="form-group mb-2">
                        <label className="form-label">Author:</label>
                        <input type={"text"} 
                               placeholder="Enter your gender" 
                               name="author"
                               value={author} 
                               onChange={(e) => onInputChange(e)}
                               />
                    </div>

                    <div className="form-group mb-2">
                        <label className="form-label">Category:</label>
                        <input type={"text"} 
                               placeholder="Enter your age" 
                               name="category"
                               value={category} 
                               onChange={(e) => onInputChange(e)}
                               />
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label">Keyword:</label>
                        <input type={"text"} 
                               placeholder="Enter your age" 
                               name="keyword"
                               value={keyword} 
                               onChange={(e) => onInputChange(e)}
                               />
                    </div>
                    
                    <button className="btn btn-success">Reset</button>
                    <button className="btn btn-success" onClick= {(e) => onSubmit(e)}>Submit</button>

                    {/* <button className="btn btn-success"><Link to="/login" className="login">Reset</Link></button> */}
                    {/* <button className="btn btn-success"><Link to="/login" className="login">Submit</Link></button> */}
                </form>  
        </>
        
    )
}

export default AddNewBook;