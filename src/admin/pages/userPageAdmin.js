import React from 'react';
import TableComponent from '../../../src/components/Table';
import {Link} from 'react-router';
import Buttons from '../../../src/components/Buttons';

class userPageAdmin extends React.Component{	

  constructor(props) {
    super(props);
      this.state =({
        title:"Products",
        buttonLabel:"Add new user"
      })
  }

  render(){
    return (
    	 <div>
    	  <h3>All User List</h3>
    	      	  <hr/>
    	    <Link to="/admin/add-new-users">
                <Buttons label={this.state.buttonLabel} />     
            </Link>
            <br/>
    	   <TableComponent />
    	 </div>
    )
  }
}

export default userPageAdmin