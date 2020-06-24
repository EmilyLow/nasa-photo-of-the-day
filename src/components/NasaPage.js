import React, { useState, useEffect } from "react";
import NasaPhoto from "./NasaPhoto";
import Description from "./Description";

// const NasaPage = props => {
    
//     console.log("Nasa Page props", props);
//     return (
        
//       <div>
//           <NasaPhoto image = {props.url}/>
//           {/* <NasaPhoto image = {props.passedData.url}/> */}
//           <Description description = {props.explanation}/>
//       </div>
//     );
//   };



const NasaPage = ({image, description}) => {
    
        console.log("Nasa Page props", image, description);
        return (
            
          <div>
              <NasaPhoto image = {image}/>
              {/* <NasaPhoto image = {props.passedData.url}/> */}
              <Description description = {description}/>
          </div>
        );
      };

      export default NasaPage;