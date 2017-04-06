import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import ActionHome from 'material-ui/svg-icons/action/home';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
import FileCloudDownload from 'material-ui/svg-icons/file/cloud-download';
import HardwareVideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';

const iconStyles = {
  marginRight:0,
};


class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle ()  {this.setState({open: !this.state.open});}

  render() {
    return (
      <div className="toggleIcon">
        <ActionHome onTouchTap={this.handleToggle} style={iconStyles} color={blue500}/>
        <Drawer open={this.state.open}>
          <MenuItem>Theme 1</MenuItem>
          <MenuItem>Theme 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default Sidebar;