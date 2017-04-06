import React from 'react';
import LeftSidebar from '../../../src/components/LeftSidebar';
import DashboardHeaderAdmin from '../../../src/admin/pages/dashboardHeaderAdmin';
import RightContainer from '../../../src/components/RightContainer';

class dashboardPageAdmin extends React.Component{	
  render(){
    return (
     <div>
       <DashboardHeaderAdmin />	
       <div className="container">
       <LeftSidebar />
       <RightContainer />
       </div>
     </div>	
    )
  }
}

export default dashboardPageAdmin