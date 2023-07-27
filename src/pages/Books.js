
import DeleteButton from "./DeleteButton";
import { Link } from "react-router-dom";

function Book(props) {
    
    return (
    <div>
    <h1>Books</h1>
    <table>
        <tr>
            <th>
                Books Name
            </th>
            <th>
                Edit
            </th>
            <th>
                Delete
            </th>
        </tr>
        {props.books.map((book) =>  
        <tr key={book.id}>        
            <td>
            <Link to={`/show/${book.id}`}>
            {book.name}
            </Link>
           
            </td> 
            <td>
            <Link to={`/edit/${book.id}`}>
                        Edit
            </Link>
            </td>
            <td>
            <DeleteButton id={book.id} />   
            </td>       
        </tr>
           )} 
    </table>
    
    <Link to={`/addBook`}>
                        ADD New Book
            </Link>
    </div>
     
    );
  }
  
  export default Book;