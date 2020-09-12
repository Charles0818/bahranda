import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowDown } from 'react-icons/md';
const PortraitCommodityCard = ({ commodity }) => {
  const { image, commodity_name, id } = commodity;
  return (
    <div className="portrait-commodity-card padding-horizontal-sm padding-vertical-sm bg-white margin-right-sm margin-bottom-sm">
      <Link to={`/commodities/${id}`}>
        <div className="thumbnail margin-bottom-sm">
          <img src={image} alt="Commodity thumbnail" />
        </div>
        <div className="d-flex justify-content-s-between align-items-center">
          <h3 className="color1 font-md">{commodity_name}</h3>
          <MdKeyboardArrowDown className="font-lg color1" />
        </div>
      </Link>
    </div>
  )
}

export default PortraitCommodityCard;
