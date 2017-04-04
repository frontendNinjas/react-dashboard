import React from 'react';
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
		 
      </div>
    )
  }
}

export default App;