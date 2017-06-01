import React from 'react';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import {Grid, Row, Col} from 'react-flexbox-grid';

const style = {
	margin: 12,
};

const ThemeList = (props) => {
  return (
    <Card style={style}>
      <li>
        <CardMedia
          overlay={< CardTitle title = {props.detail.name} subtitle = "Click here to apply" />}>
           <img className="themeImages" src={props.detail.sample}/>
        </CardMedia>
      </li>
    </Card>
  )
}

export default ThemeList