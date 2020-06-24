import React, { useState, useEffect } from "react";
import "./App.css";
//Note: Had to seperately install axios with 'npm install axios --save'. See if this is a recurring problem
import axios from 'axios';
import NasaPage from "./components/NasaPage.js"

export default function App() {
  const [spaceData, setSpaceData] = useState();
  
  useEffect(() => {
    //axios
    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=YR2NA3Adi0auTkwDJqvQUhl9UOTT7SX3KkwCvdCn")
    .then( res => {
      let testVar = res.data;
      //console.log("Get result:", res);
      //console.log("Get data result:", res.data);
      console.log("Test var", testVar)
      setSpaceData(testVar);
      console.log("Space data after", spaceData);
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
       <NasaPage data/>
    </div>
    
  );
};

