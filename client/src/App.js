import { useEffect } from "react";
import { connect } from 'react-redux'
import { useLoadScript } from '@react-google-maps/api'
// Components
import Address from "./components/Address";
import AddressDisplay from "./components/AddressDisplay";
import DisplayListings from "./components/DisplayListings";
import Search from "./components/Search";
import Map from "./components/Map";

import * as actionCreators from './store/creators/actionCreators'
import "./css/Listing.css"

function App(props) {

  useEffect(() => {
    props.onFetchListings()
  }, [])
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDLGK5HZ52V33C4nbX8kXQ-IIveo_A0QpM"
  })

  if (!isLoaded) return <div>Loading...</div>

  return (
    <div className="rootContainer">
        <div className="mainContainer">
          <div className="filterContainer">
            <div className="filters"><Search /></div>
            {!props.address ? <div><Address /></div> : <div><AddressDisplay /></div>}
          </div>
          <div>
            <DisplayListings />
          </div>
        </div>
        <Map latitude={props.lat} longitude={props.lng} listings={props.listings}/>
          
    </div>
  );

}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchListings: () => dispatch(actionCreators.fetchListings()),
  }
}

const mapStateToProps = (state) => {
  return {
    address: state.addressRed.address,
    lat: state.addressRed.latitude,
    lng: state.addressRed.longitude,
    listings: state.listingsRed.listings,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
