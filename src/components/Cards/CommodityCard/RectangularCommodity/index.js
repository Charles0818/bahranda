import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md';
import { utils } from '../../../../helpers';

const { formatting: { formatCurrency } } = utils;
const CommodityCard = memo(({ commodity }) => {
  const { image, commodity_name, price, description, quantity_left_for_deal: inStock, id, profit_percentage } = commodity;
  console.log('parseInt', inStock)
  return (
    <div className="product-card margin-bottom-md margin-right-md">
      <div className="thumbnail position-relative margin-bottom-sm">
        <Link to={`/commodities/${id}`}><img src={image} alt="product thumbnail" /></Link>
        <span className={`font-sm ${parseInt(inStock, 10) >= 1 ? ' bg-yellow' : 'bg-danger'} in-stock color-white font-weight-600 padding-xsm uppercase position-absolute`}>
          {parseInt(inStock, 10) >= 1 ? 'SALE' : 'SOLD'}
        </span>
      </div>
      <div className="d-flex column details overflow-h">
        <h3 className="product-title font-md capitalize">{commodity_name}</h3>
        <span className="font-sm font-weight-500 color-gray categories">{profit_percentage} return</span>
        <h4 className="price font-md color1 font-weight-600">{formatCurrency(price)}</h4>
      </div>
    </div>
  )
});

export default CommodityCard;
