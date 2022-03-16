import { useEffect } from "react";
import { connect } from 'react-redux'
import Address from "./components/Address";
import AddressDisplay from "./components/AddressDisplay";
import DisplayListings from "./components/DisplayListings";
import Search from "./components/Search";
import * as actionCreators from './store/creators/actionCreators'
import "./css/Listing.css"

function App(props) {

  useEffect(() => {
    props.onFetchListings()
  })

  return (
    <div className="mainContainer">

      <div className="filterContainer">
        <Search />
        {!props.address ? <div><Address /></div> : <div><AddressDisplay /></div>}
      </div>

      <div>
        <DisplayListings />

      </div>
    </div>
  );

}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchListings: () => dispatch(actionCreators.fetchListings())
  }
}

const mapStateToProps = (state) => {
  return {
    address: state.addressRed.address
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
