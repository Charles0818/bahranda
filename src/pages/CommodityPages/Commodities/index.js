import React, { memo, useEffect, useCallback, useRef } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SyncLoader from 'react-spinners/SyncLoader'
import { actions } from '../helpers';
import { Cards, Spinners } from '../../components';
import tomatoes from '../../../assets/tomatoes.png';
import rice from '../../../assets/rice.png';
import soyabean from '../../../assets/soyabean.png';
const { CommodityCard } = Cards;
const { SectionSpinner } = Spinners;
const { commodityActions: { getCommoditiesRequest,  incrementPageNum } } = actions;
const Commodities = ({ 
  token, isLoading, firstFetch, commodities, pageNum, hasNextPage, error, getCommoditiesRequest, incrementPageNum
}) => {
  useEffect(() => {
    getCommoditiesRequest(pageNum, token)
  }, [pageNum, token]);
  const observer = useRef();
  const lastCommodity = useCallback(node => {
    if(isLoading) return;
    if(observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting && hasNextPage) {
        console.log('is intereacting');
        incrementPageNum()
      }
    })
    if(node) observer.current.observe(node)
  }, [isLoading, hasNextPage])
  if(firstFetch) return <SectionSpinner isLoading={firstFetch} />
  return (
    <div>
      <main className="d-flex justify-items-self padding-vertical-lg">
      {commodities.map((commodity, index) => {
        if(index + 1 === commodities.length) {
          return <div ref={lastCommodity}><CommodityCard commodity={commodity} key={commodity.id} /></div>
        } else {
          return <CommodityCard commodity={commodity} key={commodity.id} />
        }
      })}
        {/* <CommodityCard commodity={{thumbnail: rice, name: 'rice'}} />
        <CommodityCard commodity={{thumbnail: soyabean, name: 'soyabeans'}} />
        <CommodityCard commodity={{thumbnail: tomatoes, name: 'tomatoes'}} />
        <CommodityCard commodity={{thumbnail: rice, name: 'rice'}} />
        <CommodityCard commodity={{thumbnail: soyabean, name: 'soyabeans'}} />
        <CommodityCard commodity={{thumbnail: tomatoes, name: 'tomatoes'}} />
        <CommodityCard commodity={{thumbnail: rice, name: 'rice'}} />
        <CommodityCard commodity={{thumbnail: soyabean, name: 'soyabeans'}} />
        <CommodityCard commodity={{thumbnail: tomatoes, name: 'tomatoes'}} />
        <CommodityCard commodity={{thumbnail: rice, name: 'rice'}} />
        <CommodityCard commodity={{thumbnail: soyabean, name: 'soyabeans'}} />
        <CommodityCard commodity={{thumbnail: tomatoes, name: 'tomatoes'}} />
        <CommodityCard commodity={{thumbnail: rice, name: 'rice'}} />
        <CommodityCard commodity={{thumbnail: soyabean, name: 'soyabeans'}} />
        <CommodityCard commodity={{thumbnail: tomatoes, name: 'tomatoes'}} />
        <CommodityCard commodity={{thumbnail: rice, name: 'rice'}} />
        <CommodityCard commodity={{thumbnail: soyabean, name: 'soyabeans'}} />
        <CommodityCard commodity={{thumbnail: tomatoes, name: 'tomatoes'}} /> */}
      </main>
      <div className="margin-bottom-sm d-flex justify-content-center">
        <SyncLoader size={15} color={"#069801"} loading={isLoading} />
      </div>
    </div>
  )
};

const mapStateToProps = state => {
  const { isLoading, commodities, pageNum, hasNextPage, firstFetch, error } = state.commodityReducer;
  const { token } = state.authReducer;
  return { token, isLoading, commodities, pageNum, hasNextPage, firstFetch, error }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getCommoditiesRequest, incrementPageNum, }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Commodities)
