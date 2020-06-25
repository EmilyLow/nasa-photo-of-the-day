import React, { useState, useEffect } from "react";
import NasaPhoto from "./NasaPhoto";
import Description from "./Description";
import Date from "./Date";
import Title from "./Title";
import Card from "./Card";

//Normal version
// const NasaPage = props => {
    
//     //console.log("Nasa Page props", props);
//     //console.log("Passed data", props.passedData);
    
//     if(!props.passedData.url) return <h3>Loading...</h3>;
    
//     return (
        
//       <div>
//          <Title title={props.passedData.title}/>
//           <NasaPhoto image = {props.passedData.url}/>
//           <Date date = {props.passedData.date}/>
//           <Description description = {props.passedData.explanation}/>
//       </div>
//     );
//   };


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


//Card Version
const NasaPage = props => {
    
  if(!props.passedData.url) return <h3>Loading...</h3>;
  return (
    <div>
       <Card allProps = {props.passedData}/>
    </div>
  );
};


      export default NasaPage;