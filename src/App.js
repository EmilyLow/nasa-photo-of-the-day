import React, { useState, useEffect } from "react";
import "./App.css";
//Note: Had to seperately install axios with 'npm install axios --save'. See if this is a recurring problem
import axios from 'axios';
import NasaPage from "./components/NasaPage.js"

function App() {
  const [photo, setPhoto] = useState([]);
  
  useEffect(() => {
    //axios
    axios
    .get("")
    .then( res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });


  }, []);
  
  
  return (
    // <div className="App">
    //   <p>
    //     Read through the instructions in the README.md file to build your NASA
    //     app! Have fun <span role="img" aria-label='go!'>🚀</span>!
    //   </p>
    // </div>
    <div>
      <h1>Nasa Picture</h1>
       <NasaPage />
    </div>
    
  );
}

export default App;
