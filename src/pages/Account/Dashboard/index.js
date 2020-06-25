import React from 'react';
import { AccountSummary, MonthlyExpenditure } from './components';
const Dashboard = () => {
  return (
<<<<<<< HEAD
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
=======
    <div>
      <h1 className="padding-bottom-sm">Dashboard</h1>
      <AccountSummary />
      <MonthlyExpenditure />
>>>>>>> e5122dcbed80ef5fdb4a4311d386eb1da20c67a2
    </div>
  )
}

export default Dashboard;
