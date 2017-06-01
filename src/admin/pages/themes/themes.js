import React from 'react';
import LeftSidebar from '../../../../src/components/LeftSidebar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ThemeList from '../../../../src/components/ThemesList';

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
      colorLists:[{ 
        name:'Lime',
        sample:'../../src/images/themes/lime.png'
      }, {
        name:'Blue',
        sample:'../../src/images/themes/blue.png'
      }, {
        name:'Purple',
        sample:'../../src/images/themes/lime.png'
      }, {
        name:'green',
        sample:'../../src/images/themes/blue.png'
      }]
    }
  }
  render() {
    return (
      <ul className="themeColorList">
        {
          this.state.colorLists.map((colorList, index) => {
               return <ThemeList key={colorList.name} detail={colorList} />
          })
        } 
      </ul>
    );
  }
}

export default themes