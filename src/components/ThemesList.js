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
  width:360
};

class ThemeList extends React.Component {
  render() {
    return (
      <Row>
        <ul className="themeColorList">
          {this
            .props
            .colorLists
            .map((colorList, index) => {
              return <Card style={style} key={colorList.colorTxt}>
                <li
                  className="cursor"
                  id={colorList.colorClass}
                  onClick={this.props.handleClick}>
                  <CardMedia
                    overlay={< CardTitle title = {
                    colorList.colorTxt
                  } />}>
                    <img className="themeImages" src={colorList.sample}/>
                  </CardMedia>
                </li>
              </Card>

            })
           }
        </ul>
      </Row>
    )
  }
}

export default ThemeList