import NewBookForm from "./NewBookForm";
import DeleteButton from "./DeleteButton";
import EditBookForm from './EditBookForm';



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
            {book.name}
            </td> 
            <td>
            <EditBookForm id = {book.id} />
            </td>
            <td>
            <DeleteButton id={book.id} />   
            </td>       
        </tr>
           )} 
    </table>
    
    <NewBookForm />
    </div>
     
    );
  }
  
  export default Book;