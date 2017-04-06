import React from 'react';
import LeftSidebar from '../../../src/components/LeftSidebar';
import DashboardHeaderAdmin from '../../../src/admin/pages/dashboardHeaderAdmin';
import RightMainContainer from '../../../src/components/RightMainContainer';

class dashboardPageAdmin extends React.Component{	
  render(){
    return (
     <div>
       <DashboardHeaderAdmin />	
       <div className="container">
       <LeftSidebar />
       <RightMainContainer />
       </div>
     </div>	
    )
  }
}

export default dashboardPageAdmin