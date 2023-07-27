import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditBookForm = (props) => {
  const [book, setBook] = useState({
    name: ''
    // Add more fields as needed
  });
 
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
   
    // Fetch the book data for editing when the component mounts
    fetch(`http://127.0.0.1:3000/books/${id}`)
      .then((response) => response.json())
      .then((data) => setBook(data))
      .catch((error) => console.error('Error fetching book:', error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the function to update the book data on the server
    updateBook(book);
  };

  const updateBook = (bookData) => {
    fetch(`http://127.0.0.1:3000/books/${id}`, {
      method: 'PATCH', // Use 'PUT' if your API expects PUT requests for updates
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Book updated:', data); // Handle the response data as needed
        // Add logic to update state or show a success message to the user
      })
      .catch((error) => {
        console.error('Error updating book:', error);
        // Add logic to show an error message to the user
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="name" value={book.name} onChange={handleChange} />
      </label>
      
      <button type="submit" onClick={() => navigate(-1)}>Update Book</button>
    </form>
  );
};

export default EditBookForm;
