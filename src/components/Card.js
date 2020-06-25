import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Example = (props) => {
    console.log(props);
    console.log(props.allProps.src);
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={props.allProps.url} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.allProps.title}</CardTitle>
          <CardSubtitle>{props.allProps.date}</CardSubtitle>
          <CardText>{props.allProps.explanation}</CardText>
          {/* <Button>Button</Button> */}
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;