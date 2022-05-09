import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import GifDisplay from './components/GifDisplay';


function App() {
  const [gf, setGf] = useState();

  const API_KEY = "DGCA1Z0itzKkJP03WMPS0lMbWB1xN0wn";

  const getGf = async () =>{
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`);

    const info = await response.json()

    setGf(info)
  }

  return (
    <div className="App">
     <Form getGf={getGf}/> 
     <GifDisplay gf={gf}/>
    </div>
  );
}

export default App;
