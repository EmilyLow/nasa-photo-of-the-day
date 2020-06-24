import React from "react";

const Description = props => {

        console.log("Props from Description", props);

        return  (
        <div>
                <h3>Description:</h3>
                <p>{props.description}</p>
         </div>
        
        
        );



};

export default Description;