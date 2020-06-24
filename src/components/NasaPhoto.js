import React from "react";

const NasaPhoto = props => {
    console.log("Props from NasaPhotos", props);

    return (
        <img 
            src = {props.image} 
            alt = "A photo from NASA"
        />
      
    );
    


};

export default NasaPhoto;