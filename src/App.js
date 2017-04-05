import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import './appStyle.css';


class App extends React.Component{
  render(){
    return (
      <div className="container">
			{this.props.children}
      </div>
    )
  }
}

export default App;