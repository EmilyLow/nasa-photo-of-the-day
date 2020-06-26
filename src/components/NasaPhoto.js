import React from "react";
import styled from "styled-components";

const SmallPic = styled.img`
    width: 80%;
`;

const NasaPhoto = props => {
    console.log("Props from NasaPhotos", props);

    return (
        <SmallPic
            src = {props.image} 
            alt = "A photo from NASA"
        />
      
    );
    


};

export default NasaPhoto;