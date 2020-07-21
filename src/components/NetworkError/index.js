import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import networkErrorSvg from '../../assets/server_down.svg';
import { actions } from '../../helpers';

const { UIActions: { eraseNetworkError } } = actions;
const NetworkError = ({ networkError, eraseNetworkError, children }) => {
  const [state, setState] = useState(window.navigator.onLine)
  const { show, action } = networkError;
  // const dispatch = useDispatch
  useEffect(() => {
    const online = window.addEventListener('online', () => {
      setState(true)
      if(action) action();
      eraseNetworkError()
    }, true);
    // return () =>  window.removeEventListener('online')
  }, [])
  if(!show && !action || state) return children
  return (
    <section className="d-flex column align-items-center" style={{height: '100vh'}}>
      <div className="svg-container d-flex flex-center">
        <img src={networkErrorSvg} alt="404 Error display" className="svg" />
      </div>
      <div className="d-flex column align-items-center">
        <button onClick={action} className="padding-md border-r-5 bg-color1 color-white ripple">Retry</button>
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