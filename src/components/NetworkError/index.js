import React, { useCallback } from 'react';
import { connect, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BsExclamationTriangleFill } from 'react-icons/bs'
import networkErrorSvg from '../../assets/server_down.svg';
import { actions } from '../../helpers';
const { UIActions: { eraseNetworkError } } = actions;
const NetworkError = ({ networkError, eraseNetworkError, children }) => {
  const { show, dispatch: action } = networkError;
  const dispatch = useDispatch()
  const callback = useCallback(() => {
    eraseNetworkError();
    dispatch(action)
  },[action, eraseNetworkError])

  if(!show && !action) return children
  return (
    <section className="d-flex column flex-center bg-white">
      <div className="padding-horizontal-xlg d-flex column flex-center network-error">
        <div className="d-flex column flex-center">
          <div className="d-flex column flex-center round border-r-circle bg-gray margin-bottom-md">
            <BsExclamationTriangleFill className="font-xlg danger-text margin-bottom-sm" />
            <p className="font-md capitalize font-eright-600 danger-text">Page loading error</p>
          </div>
          <p className="font-md text-content font-weight-500 margin-bottom-md">Something went wrong. Please check the connection and the page URL</p>
        </div>
        <div className="d-flex justify-content-end" style={{width: '100%'}}>
          <button onClick={callback} className="cursor-pointer retry-btn padding-md padding-vertical-sm bg-color1 color-white ripple font-md font-weight-600">TRY AGAIN</button>
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = state => {
  const { networkError } = state.UIReducer
  return { networkError }
}

const mapDispatchToProps = dispatch => 
  bindActionCreators({ eraseNetworkError }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NetworkError)