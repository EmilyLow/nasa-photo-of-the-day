import React, { useState, useEffect } from "react";
import NasaPhoto from "./NasaPhoto";
import Description from "./Description";

const NasaPage = props => {
    
    //console.log("Nasa Page props", props);
    //console.log("Passed data", props.passedData);
    
    if(!props.passedData.url) return <h3>Loading...</h3>;
    
    return (
        
      <div>
         
          <NasaPhoto image = {props.passedData.url}/>
          <Description description = {props.passedData.explanation}/>
      </div>
    );
  };


//Individually passed version
// const NasaPage = ({image, description}) => {
    
//         console.log("Nasa Page props", image, description);
//         return (
            
//           <div>
             
//               {/* <NasaPhoto image = {props.passedData.url}/> */}

//                <NasaPhoto image = {image}/>
//               <Description description = {description}/>
//           </div>
//         );
//       };

      export default NasaPage;