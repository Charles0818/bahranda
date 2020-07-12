import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md'
const CommodityCard = memo(({ product }) => {
  const { thumbnail, name } = product;
  return (
    <div className="product-card margin-bottom-md margin-right-md">
      <div className="thumbnail position-relative margin-bottom-sm">
        <Link to="/commodities/1"><img src={thumbnail} alt="product thumbnail" /></Link>
        <span className="font-md in-stock color-white font-weight-600 padding-sm uppercase position-absolute">SALE</span>
        <div className="add-to-cart-btn ripple bg-color1 padding-md cursor-pointer position-absolute">
          <MdShoppingCart className="color-white font-md" />
        </div>
      </div>
      <div className="d-flex column details overflow-h">
        <h3 className="product-title font-lg capitalize">{name}</h3>
        <span className="font-xsm color-gray uppercase categories">grain, rice</span>
        <h4 className="price font-lg color1 font-weight-600">N3,000</h4>
      </div>
    </div>
  )
});

export default CommodityCard;
