import React from 'react';

const TeamCard = () => {
  return (
    <div className="d-flex column border-r-10 card" style={{width: '300px'}}>
      <img src="../../../assets/customer.png" alt="Team member" style={{flex: .6}} />
      <div className=" d-flex column justify-content-center bg-white padding-md" style={{flex: .4}} >
        <h2 className="font-md">Toyin Tomato</h2>
        <span className="font-m">Director</span>
      </div>
    </div>
  )
}

export default TeamCard;
