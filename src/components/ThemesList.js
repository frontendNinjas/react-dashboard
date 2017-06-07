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
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
  width: 360
};

const btnstyle = {
  width: 360
};

const ThemeList = (props) => {
	return (
	        <Card style={style}>
          <div id={props.id} >
            <CardMedia
              overlay={< CardTitle title = {
              props.colorTxt
            } />}>
              <img className="themeImages" src={props.sampleImage}/>
            </CardMedia>
          </div>
            <RaisedButton style={btnstyle} label="Apply" secondary={true} onClick={() => props.handleClick(props.themes.colorClass)}/>
        </Card>
	)
}

export default ThemeList


