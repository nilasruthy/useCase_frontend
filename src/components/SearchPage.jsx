import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Nav from "./Nav";

function SearchPage() {
  const [bookid, setBookId] = useState("");
  const [booktitle, setBooktitle] = useState("");
  const [Category, setBookCategory] = useState("");
  const [Author, setBookAuthor] = useState("");
  const [Keyword, setBookKeyword] = useState("");
  const [books, setBooks] = useState([]);

 
  const handleFormSubmit = (event) => {
    event.preventDefault();
    axios
      .get(`http://localhost:8085/book/${bookid}`)
      .then((response) => {
        const data = Array.isArray(response.data) ? response.data : [response.data];
        setBooks(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleFormSubmit1 = (event) => {
    event.preventDefault();
    axios
      .get(`http://localhost:8085/book/title/${booktitle}`)
      .then((response) => {
        const data = Array.isArray(response.data) ? response.data : [response.data];
        setBooks(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleFormSubmit2 = (event) => {
    event.preventDefault();
    axios
      .get(`http://localhost:8085/book/category/${Category}`)
      .then((response) => {
        const data = Array.isArray(response.data) ? response.data : [response.data];
        setBooks(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleFormSubmit3 = (event) => {
    event.preventDefault();
    axios
      .get(`http://localhost:8085/book/author/${Author}`)
      .then((response) => {
        const data = Array.isArray(response.data) ? response.data : [response.data];
        setBooks(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleFormSubmit4 = (event) => {
    event.preventDefault();
    axios
      .get(`http://localhost:8085/book/keyword/${Keyword}`)
      .then((response) => {
        const data = Array.isArray(response.data) ? response.data : [response.data];
        setBooks(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };


  return (
    <>
      <Nav/>
      <br></br>
      <form onSubmit={handleFormSubmit} >
        <label htmlFor="id-input">Enter book ID:</label>
        <input
          id="id-input"
          type="text"
          value={bookid}
          onChange={(event) => setBookId(event.target.value)}
        
        />
        <br></br>
        <button type="submit">Submit</button>
      </form>
       <br></br>
      <form onSubmit={handleFormSubmit1} >
        <label htmlFor="id-input">Enter book Title:</label>
        <input
          id="id-input"
          type="text"
          value={booktitle}
          onChange={(event) => setBooktitle(event.target.value)}
        
        />
        <br></br>
        <button type="submit" onSubmit={handleFormSubmit1}>Submit</button>
      </form>
      <br></br>
      <form onSubmit={handleFormSubmit2}>
        <label htmlFor="id-input">Enter book Category:</label>
        <input
          id="id-input"
          type="text"
          value={Category}
          onChange={(event) => setBookCategory(event.target.value)}
          
        />
        <br></br>
        <button type="submit" onSubmit={handleFormSubmit2}>Submit</button>
      </form>
      <br></br>
      <form onSubmit={handleFormSubmit3}>
        <label htmlFor="id-input">Enter book Author:</label>
        <input
          id="id-input"
          type="text"
          value={Author}
          onChange={(event) => setBookAuthor(event.target.value)}
          
        />
        <br></br>
        <button type="submit">Submit</button>
      </form>
      <br></br>
      <form onSubmit={handleFormSubmit4}>
        <label htmlFor="id-input">Enter book Keyword:</label>
        <input
          id="id-input"
          type="text"
          value={Keyword}
          onChange={(event) => setBookKeyword(event.target.value)}
        
        />
        <br></br>
        <button type="submit">Submit</button>
      </form>

      <table className="table">
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Keyword</th>
         
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td>{book.bookid}</td>
              <td>{book.bookTitle}</td>
              <td>{book.author}</td>
              <td>{book.category}</td>
              <td>{book.keyword}</td>

              </tr>
            )
            )
          }

              </tbody>
      </table>

    </>
  );
}

export default SearchPage; 