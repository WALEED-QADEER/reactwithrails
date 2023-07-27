import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Importbooks from './pages/Importbooks';
import EditBookForm from './pages/EditBookForm';
import NewBookForm from './pages/NewBookForm';
import ShowBook from './pages/ShowBook';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Importbooks />} />
      <Route path="/edit/:id" element={<EditBookForm />} />
      <Route path="/addBook" element={<NewBookForm />} />
      <Route path="/show/:id" element={<ShowBook />} />
      
    
     
    </Routes>
  </BrowserRouter>
  );
}

export default App;
