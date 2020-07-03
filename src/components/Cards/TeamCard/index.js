import React from 'react';
import customer from '../../../assets/customer.png';
const TeamCard = () => {
  return (
    <div className="team-card d-flex column border-r-10 margin-right-sm margin-bottom-sm card">
      <img src={customer} alt="Team member" className="border-top-r-inherit" style={{flex: .6}} />
      <div className=" d-flex column align-items-center bg-white padding-md" style={{flex: .4, width: '100%'}} >
        <h2 className="font-md">Toyin Tomato</h2>
        <span className="font-m">Director</span>
      </div>
    </div>
  )
}

export default TeamCard;
