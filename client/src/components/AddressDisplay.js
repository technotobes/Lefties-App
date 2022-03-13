import React from 'react'
import { connect } from 'react-redux'


function AddressDisplay(props) {

    const address = props.address.split(',')

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



export default connect(mapStateToProps)(AddressDisplay)