import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const NewBookForm = () => {
  const [book, setBook] = useState({
    name: ''
    // Add more fields as needed
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the function to send the book data to the server
    createBook(book);
    setBook({ name: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="name" value={book.name} onChange={handleChange} />
      </label>
        
      <button type="submit" onClick={() => navigate(-1)}>Create Book</button>
    </form>
  );
};

export default NewBookForm;
const createBook = (bookData) => {
    fetch('http://127.0.0.1:3000/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Book created:', data);
         // Handle the response data as needed
        // Add logic to update state or show a success message to the user
      })
      .catch((error) => {
        console.error('Error creating book:', error);
        // Add logic to show an error message to the user
      });
  };
  