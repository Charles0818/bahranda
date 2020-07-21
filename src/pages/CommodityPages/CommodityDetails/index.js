import React from 'react';
import  { useState, useEffect } from 'react';
import { Cards, Carousels } from '../../components';
import { ThumbnailCarousel, FillInvestment } from '../components';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {actions} from "../helpers"
import thumbnail from '../../../assets/soyabean.png';
import tomatoes from '../../../assets/tomatoes.png';
import rice from '../../../assets/rice.png';
import soyabean from '../../../assets/soyabean.png';
const { CommodityCard } = Cards;
const {commodityActions: {getSingleCommodityRequest}} = actions;

const { PaddedCarousel } = Carousels;
const CommodityDetails = ({ getSingleCommodityRequest, token, match: {params}
 }) => {
  const [details, setDetails] = useState()
   const slides = [
    tomatoes, rice, soyabean
  ];
  useEffect(() => {
    console.log("this is useEffect")
    console.log(params.id)
    console.log(token)


    getSingleCommodityRequest(token, setDetails, params.id)
  }, [token, setDetails, params.id]);
  const relatedCommodities = [
    <CommodityCard commodity={{thumbnail: rice, name: 'rice'}} />,
    <CommodityCard commodity={{thumbnail: soyabean, name: 'soyabeans'}} />,
    <CommodityCard commodity={{thumbnail: tomatoes, name: 'tomatoes'}} />,
    <CommodityCard commodity={{thumbnail: rice, name: 'rice'}} />,
    <CommodityCard commodity={{thumbnail: soyabean, name: 'soyabeans'}} />,
    <CommodityCard commodity={{thumbnail: tomatoes, name: 'tomatoes'}} />
  ]
  return (
    <article className="d-flex column" style={{width: '100%'}}>
      <h1 className="font-lg margin-bottom-sm">Commodity Details</h1>
      <div className="d-flex align-items-center justify-content-s-between thumbnail-details margin-bottom-md" style={{width: '100%'}}>
        <div className="thumbnail-slider margin-right-md">
          <ThumbnailCarousel autoSlide={false} thumbnails={slides} />
        </div>
        <section className="details flex-equal">
          <FillInvestment />
        </section>
      </div>
      <main className="product-details" style={{width: '100%'}}>
        <h2 className="uppercase font-md">description</h2>
        <div className="bg-white slim-border">
          <p className="font-sm padding-horizontal-md padding-vertical-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Praesent interdum sem non fermentum interdum. Vivamus sit
            amet iaculis nibh, vel commodo leo. Vestibulum id tristique enim.
            Suspendisse quis augue vel odio vehicula euismod. Nulla convallis luctus odio,
            non malesuada velit gravida vitae. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia curae; Proin convallis elit vitae
            lacus euismod venenatis. Vivamus varius rutrum justo, a laoreet lorem luctus vel. 
            Suspendisse pellentesque velit et odio accumsan commodo non sed lacus. 
            Praesent non aliquam velit, pretium placerat ligula. Nam vehicula massa lectus, 
            non sodales tellus posuere sed. Maecenas ut dictum justo. 
            Nullam in placerat metus, ut porta diam. Mauris molestie tellus urna, 
            ac imperdiet dui blandit et. Etiam fringilla et nisi malesuada efficitur. 
            Fusce molestie ipsum non condimentum tempor.
          </p>
        </div>
        <div className='padding-vertical-lg' style={{width: '100%'}}>
          <div className="bg-gray bg-color1 padding-horizontal-md padding-vertical-md" style={{width: '100%'}}>
            <h3 className="font-lg margin-bottom-md">Related Commodities</h3>
            <PaddedCarousel slides={relatedCommodities} cardAlign={true} autoSlide={false} />
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn-color1 ripple color-white font-sm">VIEW ALL</button>
          </div>
        </div>
      </main>
    </article>
  )
}
const mapStateToProps = state => {
  const { isLoading, error, details } = state.commodityReducer;
  const { token } = state.authReducer;
  return { token, isLoading, error, details }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators({ getSingleCommodityRequest }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CommodityDetails)


