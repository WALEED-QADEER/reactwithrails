import { useEffect, useState } from 'react';
import Books from "./Books";

const Importbooks = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Function to fetch data from Rails API
    const fetchItems = async () => {
      try {
        const response = await fetch('http://127.0.0.1:3000/books');
        
        const data = await response.json();
        
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchItems();
  },[items]); // Empty dependency array, so this effect runs only once on component mount.

return (
  
    <div>
      <Books books = { items }/>
    </div>
  );
};

export default Importbooks;
