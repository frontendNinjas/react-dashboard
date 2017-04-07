import React from 'react';
import ToDoList from '../../../src/components/ToDoList';
import TableComponent from '../../../src/components/Table';

class dashboardPageAdmin extends React.Component{	
  render(){
    return (
    	<div>
        <h3>Dashboard</h3>
      		<div className="col-md-4">
      	      <ToDoList />
      		</div>	
          <div className="col-md-5">
              <TableComponent />
          </div>  
          
		</div>
    )
  }
}

export default dashboardPageAdmin