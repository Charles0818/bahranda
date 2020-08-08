import React from 'react';
const TeamCard = ({ member }) => {
  const { member_image, member_name, member_role } = member;
  return (
    <div className="team-card d-flex column border-r-10 margin-right-sm margin-bottom-sm overflow-h card">
      <div className="avatar">
        <img src={member_image} alt="Team member" className="border-top-r-inherit" style={{flex: .6}} />
      </div>
      <div className=" d-flex column align-items-center bg-white padding-md" style={{flex: .4, width: '100%'}} >
        <h2 className="font-md">{member_name}</h2>
        <span className="font-m">{member_role}</span>
      </div>
    </div>
  )
}

export default TeamCard;
