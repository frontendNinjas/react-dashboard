import React from 'react';
import LeftSidebar from '../../../../src/components/LeftSidebar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ThemeList from '../../../../src/components/ThemesList';
import {Grid, Row, Col} from 'react-flexbox-grid';

const styles = {
  block: {
    maxWidth: 250
  },
  checkbox: {
    marginBottom: 16
  }
};

class themes extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      colorLists: [
        {
          name: 'Lime',
          sample: '../../src/images/themes/lime.png'
        }, {
          name: 'Blue',
          sample: '../../src/images/themes/blue.png'
        }, {
          name: 'Deep Purple',
          sample: '../../src/images/themes/purple.png'
        }, {
          name: 'Teal',
          sample: '../../src/images/themes/green.png'
        }
      ]
    }
  }
  render() {
    return (
      <ul className="themeColorList">
        <Row>
          {this
            .state
            .colorLists
            .map((colorList, index) => {
              return <ThemeList key={colorList.name} detail={colorList}/>
            })
         }
        </Row>
      </ul>

    );
  }
}

export default themes