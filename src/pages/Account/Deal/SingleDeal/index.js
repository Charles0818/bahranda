import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../../helpers';
const { dealActions: { getSingleDealRequest } } = actions;
const Deal = ({ getSingleDealRequest, token, match: { params } }) => {
  const [state, setState] = useState({});
  useEffect(() => {
    getSingleDealRequest(token, setState, params.id)
  }, [token, params.id])
  return (
    <div className="investment d-flex padding-md margin-bottom-sm bg-white slim-border-2 bg-white ">
      <img src="" alt="commodity thumbnail" className="thumbnail margin-right-md" />
      <div className="details d-flex column">
        <h3 className="font-md font-weight-600">Soyabeans</h3>
        <span className="font-xsm color-gray">grain</span>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  const { token } = state.authReducer;
  return { token }
}
const mapDispatchToProps = dispatch => 
  bindActionCreators({ getSingleDealRequest }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Deal);
