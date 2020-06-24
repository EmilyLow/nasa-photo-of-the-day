import React, { useState, useEffect } from "react";
import NasaPhoto from "./NasaPhoto";
import Description from "./Description";

const NasaPage = props => {
    
    console.log("Nasa Page props", props);
    return (
        
      <div>
          <NasaPhoto image = {props.url}/>
          {/* <NasaPhoto image = {props.passedData.url}/> */}
          <Description description = {props.explanation}/>
      </div>
    );
  };

export default NasaPage;