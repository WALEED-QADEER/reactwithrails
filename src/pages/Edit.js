import { useState } from 'react';

function Edit() {
    const [inputs, setInputs] = useState({});
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert("Book Added");
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>Enter your Book Name:
        <input 
          type="text" 
          name="name" 
          value={inputs.name || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Enter your description:
          <input 
            type="text" 
            name="description" 
            value={inputs.description || ""} 
            onChange={handleChange}
          />
          </label>
          <input type="submit" />
      </form>
    )
  }
  export default Edit;