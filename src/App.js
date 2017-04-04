import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from '../src/components/Products/MyAwesomeReactComponent';
import {Link} from 'react-router';
import Header from '../src/components/header/Header';
import Footer from '../src/components/footer/Footer';
class App extends React.Component{
  render(){
    return (
      <div>
      	<Header/>
		{this.props.children}
		<Footer/>
		 <h2>{this.props.params.repoName}</h2>
		  <MuiThemeProvider>
    			<MyAwesomeReactComponent />
  		  </MuiThemeProvider>
      </div>
    )
  }
}

export default App;