import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../store/creators/actionCreators'
import '../css/Menu.css'

function AddressDisplay(props) {

  const address = props.address.split(',')


  useEffect(() => {
    props.onFetchGeolocation(props.address)
  }, [])

  



  return (
    
    <div className="addressTextContainer">
        <div>{address[0]}</div>
        <button className="addressBtn" onClick={() => props.onSaveAddress(null)}>Change Address</button>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    address: state.addressRed.address
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchGeolocation: (location) => dispatch(actionCreators.fetchGeolocation(location)),
    onSaveAddress: (address) => dispatch(actionCreators.saveAddress(address))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(AddressDisplay)