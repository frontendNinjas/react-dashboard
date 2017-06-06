import React from 'react';
import LeftSidebar from '../../../../src/components/LeftSidebar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ThemeList from '../../../../src/components/ThemesList';
import {Grid, Row, Col} from 'react-flexbox-grid';
import securedPageAdmin from '../../../../src/admin/pages/securedPageAdmin';

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
          colorTxt: 'Lime',
          sample: '../../src/images/themes/lime.png',
          colorClass: 'lime'
        }, {
          colorTxt: 'Blue',
          sample: '../../src/images/themes/blue.png',
          colorClass: 'blue'
        }, {
          colorTxt: 'Deep Purple',
          sample: '../../src/images/themes/purple.png',
          colorClass: 'purple'
        }, {
          colorTxt: 'Teal',
          sample: '../../src/images/themes/green.png',
          colorClass: 'teal'
        }
      ]
    }
    this.handleClick = this.handleClick.bind(this)
  }

  
  handleClick(e) {
   event.preventDefault()
    const el = event.target
     console.log("colorLists class", this.state.colorLists[0].colorClass); 
  }

  render() {
    return (
      <div>
       <ThemeList colorLists={this.state.colorLists} handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default themes
