import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from '../src/components/Products/MyAwesomeReactComponent';
import {Link} from 'react-router';
import Header from '../src/components/header/Header';
import Footer from '../src/components/footer/Footer';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends React.Component{
  render(){
    return (
      <div>
	    <MuiThemeProvider>
	    	<Header/>
	    </MuiThemeProvider>	
      	<MuiThemeProvider>
			{this.props.children}
		</MuiThemeProvider>
		<MuiThemeProvider>
			<Footer/>
		</MuiThemeProvider>			
      </div>
    )
  }
}

export default App;