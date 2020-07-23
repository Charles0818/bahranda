import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Cards, Carousels, Spinners } from '../../components';
import { actions } from '../helpers'
import { ThumbnailCarousel, FillInvestment } from '../components';
import tomatoes from '../../../assets/tomatoes.png';
import rice from '../../../assets/rice.png';
import soyabean from '../../../assets/soyabean.png';
const { CommodityCard } = Cards;
const { PaddedCarousel } = Carousels;
const { SectionSpinner } = Spinners;
const { commodityActions: { getRelatedCommoditiesRequest, getSingleCommodityRequest } } = actions;

const CommodityDetails = ({
  getSingleCommodityRequest, token, loading, match: { params }
}) => {
  const [details, setDetails] = useState({})
   const slides = [
    tomatoes, rice, soyabean
  ];
  useEffect(() => {
    getSingleCommodityRequest(token, setDetails, params.id)
  }, [token, setDetails, params.id]);
  if(loading) return <SectionSpinner isLoading={loading} />;
  const { image, description, ...rest } = details;
  return (
    <article className="d-flex column" style={{width: '100%'}}>
      {/* <h1 className="font-lg margin-bottom-sm">Commodity Details</h1> */}
      <div className="d-flex justify-content-s-between thumbnail-details margin-bottom-md" style={{width: '100%'}}>
        <div className="thumbnail-slider margin-right-md">
          <ThumbnailCarousel autoSlide={false} thumbnails={[image]} />
          {/* <img src={image} alt="commodity thumbnail" /> */}
        </div>
        <section className="details flex-equal">
          <FillInvestment details={rest} />
        </section>
      </div>
      <main className="product-details" style={{width: '100%'}}>
        <h2 className="uppercase font-md">description</h2>
        <div className="bg-white slim-border">
          <p className="font-sm padding-horizontal-md padding-vertical-md">
            {description}
          </p>
        </div>
        <RelatedCommodities token={token} />
      </main>
    </article>
  )
}

const mapDispatchToRelatedCommodities = dispatch =>
  bindActionCreators({ getRelatedCommoditiesRequest }, dispatch);
const mapIndicatorToProps = state => {
  const { loadingIndicators: { relatedCommodity: loading } } = state.commodityReducer;
  return { loading }
}
const RelatedCommodities = connect(mapIndicatorToProps, mapDispatchToRelatedCommodities)(({
  token, loading, getRelatedCommoditiesRequest
}) => {
  const [state, setState] = useState([])
  useEffect(() => {
    getRelatedCommoditiesRequest(token, setState)
  }, [token])
  if(loading) return (
    <div className="bg-gray bg-color1 padding-horizontal-md margin-top-md padding-vertical-md" style={{width: '100%'}}>
      <h3 className="font-lg margin-bottom-md">Related Commodities</h3>
      <SectionSpinner isLoading={loading} />
    </div>
  )
  return (
    <div className='padding-vertical-lg' style={{width: '100%'}}>
      <div className="bg-gray bg-color1 padding-horizontal-md padding-vertical-md" style={{width: '100%'}}>
        <h3 className="font-lg margin-bottom-md">Related Commodities</h3>
        <PaddedCarousel
          slides={state.map(commodity => <CommodityCard commodity={commodity} />)}
          cardAlign={true}
          autoSlide={false}
        />
        <div className="d-flex justify-content-center">
          <button className="btn-color1 ripple color-white font-sm">VIEW ALL</button>
        </div>
      </div>
    </div>
  )
})
const mapStateToProps = state => {
  const { loadingIndicators: { singleCommodity: loading }, error, details } = state.commodityReducer;
  const { token } = state.authReducer;
  return { token, loading, error, details }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators({ getSingleCommodityRequest }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CommodityDetails)
