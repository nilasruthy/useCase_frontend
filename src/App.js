import React from "react";
import "./App.css";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import CartPage from "./components/CartPage";
import BookDetailPage from "./components/BookDetailPage";
import SearchPage from "./components/SearchPage";
import AddMembers from "./components/AddMembers";
import StaffHomePage from "./components/StaffHomePage";
import AddNewBook from "./components/AddNewBook";
import Issue from "./components/Issue";
import Return from "./components/Return";
import MemberHomePage from "./components/MemberHomePage";
import MemberList from "./components/MemberList";
import IssueList from "./components/IssueList";
import IssueEdit from "./components/IssueEdit";
// import Nav from "./components/Nav";



const App = () => {
  return (
    
    <div>
     
      <Router>
       <Routes>
        
        <Route exact path="/" Component={Homepage }/>

        <Route path="/signup" Component={ Signup }/>
        <Route path="/login" Component={ Login }/>
       
        <Route path="/staffHomePage" Component={ StaffHomePage }/>
        <Route path="/bookDetailPage" Component={ BookDetailPage }/>
        <Route path="/login/bookDetailPage" Component={ BookDetailPage }/>
        <Route path="/cartPage" Component={ CartPage }/>
        <Route path="/searchPage" Component={ SearchPage }/>
        <Route path="/searchPage/:id" Component={ SearchPage }/>
        <Route path="/addMembers" Component={ AddMembers }/>
        <Route path="/addBooks" Component={ AddNewBook }/>
        <Route path="/issue" Component={Issue}/>
        <Route path="/return" Component={Return}/>
        <Route path="/memberHomePage" Component={MemberHomePage}/>
        <Route path="/login/MemberHomePage" Component={MemberHomePage}/>
        <Route path="/memberList" Component={MemberList}/>
        <Route path="/issueList" Component={IssueList}/>
        <Route path="/issueEdit" Component={IssueEdit}/>
        <Route path="/issueEdit/:issueid" Component={IssueEdit}/>

       </Routes>
      </Router> 
      
      
    </div>
  )

}

export default App;