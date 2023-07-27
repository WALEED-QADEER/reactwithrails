import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Importbooks from './pages/Importbooks';
import EditBookForm from './pages/EditBookForm';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Importbooks />}>
      <Route path="/:slug" element={<EditBookForm />} />
      
    
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
