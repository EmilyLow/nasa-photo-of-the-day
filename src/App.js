import React, { useState, useEffect } from "react";
import "./App.css";
//Note: Had to seperately install axios with 'npm install axios --save'. See if this is a recurring problem
import axios from 'axios';
import NasaPage from "./components/NasaPage.js"






export default function App() {
  const [spaceData, setSpaceData] = useState([]);
  
  //Commented out while making
  useEffect(() => {
    
    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=YR2NA3Adi0auTkwDJqvQUhl9UOTT7SX3KkwCvdCn")
    .then( res => {
      
      setSpaceData(res.data);
      
    })
    .catch(err => {
    });


  }, []);
  
  //For testing only
  // useEffect(() => {
  //   setSpaceData(dummyData);
  // }, []);
 
  
  return (
    // <div className="App">
    //   <p>
    //     Read through the instructions in the README.md file to build your NASA
    //     app! Have fun <span role="img" aria-label='go!'>🚀</span>!
    //   </p>
    // </div>
    <div>
      <h1>Nasa Picture</h1>
       {/* <NasaPage passedData = {spaceData}/> */}
       <NasaPage image = {spaceData.url} description = {spaceData.explanation}/>
    </div>
    
  );
};

const dummyData = {
  "date": "2020-06-24",
  "explanation": "This is a fallback image used in the case where there is a missing/corrupted asset on apod.nasa.gov. Image source: https://en.wikipedia.org/wiki/File:Black_Hole_in_the_universe.jpg",
  "hdurl": "https://api.nasa.gov/planetary/apod/static/default_apod_image.jpg",
  "media_type": "image",
  "service_version": "v1",
  "title": "Default Image",
  "url": "https://api.nasa.gov/planetary/apod/static/default_apod_image.jpg"
  };