import {React, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

function ShowBook() {
    const { id } = useParams();
    const [book, setBook] = useState(null);
  
    useEffect(() => {
      fetch(`http://127.0.0.1:3000/books/${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setBook(data);
        })
        .catch((error) => {
          console.error('Error fetching book:', error);
          // Add logic to show an error message to the user if needed
        });
    }, [id]);
  
    if (!book) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        <h1>Book Details</h1>
        <h4>Title: {book.name}</h4>
        <p>Created: {book.created_at}</p>
        <p>Updated: {book.updated_at}</p>
      
      </div>
    );
  };

export default ShowBook;