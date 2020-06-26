import React from "react";
import styled from "styled-components";

const DateBox = styled.p`
   height: 25px;
   width: 200px;
   background-color: white;
   color: 	#696969;
   margin-left: auto;
   margin-right: auto;
   margin-top: 20px;
`;



const Date = props => {
    //console.log("Props from Date", props);

    
    return (
        <DateBox>
            Date: {props.date}
        </DateBox>
    )
    


};

export default Date;