import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../store/creators/actionCreators'


function AddressDisplay(props) {

  const address = props.address.split(',')

  useEffect(() => {
    console.log(props.address)
    props.onFetchGeolocation(props.address)
  }, [])



  return (
    
    <div>
        {address[0]}
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
    onFetchGeolocation: (location) => dispatch(actionCreators.fetchGeolocation(location))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(AddressDisplay)