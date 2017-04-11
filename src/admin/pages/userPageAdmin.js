import React from 'react';
import TableComponent from '../../../src/components/Table';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';

const style = {
  margin: 12,
};

class userPageAdmin extends React.Component{	
  render(){
    return (
    	 <div>
    	  <h3>All User List</h3>
    	      	  <hr/>
    	    <Link to="/admin/add-new-users">
                <RaisedButton label="Add New User" primary={true} style={style} />    
            </Link>
    	   <TableComponent />
    	 </div>
    )
  }
}

export default userPageAdmin