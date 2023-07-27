import React from 'react';

const DeleteButton = ({ id }) => {
  const handleDelete = () => {
    // Assuming your Rails API endpoint is '/api/books/:id', where :id is the ID of the book to be deleted
    fetch(`http://127.0.0.1:3000/books/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data as needed
        // For example, you can trigger a callback to update the state in the parent component
        console.log("book deleted", data);
      })
      .catch((error) => {
        console.error('Error deleting book:', error);
        // Add logic to show an error message to the user if needed
      });
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
};

export default DeleteButton;
