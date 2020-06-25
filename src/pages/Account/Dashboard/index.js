import React from 'react';

const Dashboard = () => {
  return (
    <div className="margin-horizontal-xlg margin-top-md bg-white activity">
     <div className="d-flex column">
       <div className="margin-top-md margin-left-md"><h2>Activity</h2></div>
       {/* <div className="slim-border-bottom margin-horizontal-xlg"></div> */}
       <div className="button" ><button>Sort: Most recent</button></div>
       <div className="d-flex">
         <h2>REMARK</h2>
         <h2>DATE</h2>
         <h2>AMOUNT</h2>
         <h2>STATUS</h2>
       </div>
       
       <div className="slim-border-bottom"></div>
     </div>
    </div>
  )
}

export default Dashboard;
