import React from 'react';
import ToDoList from '../../../src/components/ToDoList';
import TableComponent from '../../../src/components/Table';

class dashboardMain extends React.Component{	
  render(){
    return (
    	<div>
        <h3>Dashboard</h3>
      		<div className="col-md-4">
      	      <ToDoList />
      		</div>	
		</div>
    )
  }
}

export default dashboardMain