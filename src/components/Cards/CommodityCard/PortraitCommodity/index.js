import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowDown } from 'react-icons/md';
const PortraitCommodityCard = ({ commodity }) => {
  const { image, commodity_name } = commodity;
  return (
    <div className="portrait-commodity-card padding-horizontal-md padding-vertical-md bg-white margin-right-sm margin-bottom-sm">
      <div className="thumbnail margin-bottom-md">
        <img src={image} alt="Commodity thumbnail" />
      </div>
      <div className="d-flex justify-content-s-between align-items-center">
        <h3 className="color1 font-lg">{commodity_name}</h3>
        <Link to={"/commodities/1"}>
          <MdKeyboardArrowDown className="font-lg color1" />
        </Link>
      </div>
    </div>
  )
}

export default PortraitCommodityCard;
