import './App.css';
import Header from './components/Header';
import { TextField, Button, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);
  const addData = () => {
    if(name && email !==''){
      setData([...data, {name, email}]);
      setName("");
      setEmail("");
    }
  }
  const removeItem = (index) => {
    let arr = data;
    arr.splice(index,1);
    setData([...arr]);  
  }
  return (
    <div className="App">
      <Header />
      <div className='form'>
        <Stack direction="row" spacing={2}>
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            id="outlined-basic" 
            label="Email" 
            variant="outlined" 
          />
          <Button 
            onClick={addData}
            variant="contained">
            <AddIcon />
          </Button>
        </Stack>
      </div>

      <div className='data'>
        <div className='data_set'>
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {
          data.map((e, index) => {
            return(
              <div key={index} className='data_set'>
              <h4>{e.name}</h4>
              <h4>{e.email}</h4>
              <h4>
                <Stack>
                <Button 
                  onClick={() => removeItem(index)}
                  color='error'
                  variant='contained'>
                  <DeleteIcon />
                </Button>
                </Stack>
              </h4>
            </div>
              )
          })
        }
      </div>
    </div>
  );
}

export default App;
