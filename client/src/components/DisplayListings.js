import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../store/creators/actionCreators'
import Modal from 'react-modal'
import '../css/Listing.css'
import distance from '../distance'
import Countdown from "react-countdown";



function DisplayListings(props) {

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [modalData, setModalData] = useState({})
    
    const listings = props.allListings.map((listingItem, index) => {
        
        const distanceResults = distance(props.latitude, props.longitude, listingItem.lat, listingItem.lng)
        const formattedDistance = (Math.round(distanceResults * 100) / 100).toFixed(2);
        console.log(formattedDistance)
        
        return <li key={index}>
                <button className="clickListing" onClick={() => {setModalIsOpen(true); setModalData(listingItem)}}>
                <div>{listingItem.title}</div>
                <div>{formattedDistance} mi</div>


                
                </button>
                

                {/* Inside Modal */}
                <Modal className="Modal" overlayClassName="Overlay" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                    <h2>{modalData.title}</h2>
                    <p>{modalData.description}</p>
                    <p>{modalData.price}</p>
                    <div>
                        <button onClick={() => props.onAddToCart(modalData)}>Add To Cart</button>
                        <button onClick={() => setModalIsOpen(false)}>Close</button>
                    </div>
                </Modal>
            </li>
    })
    
    return (
        <div>
          <h1>Listings</h1>
          <div className="listingContainer">
            {listings}
          </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddToCart: (listing) => dispatch(actionCreators.addToCart(listing)),
    }
}

const mapStateToProps = (state) => {
    return {
        allListings: state.listingsRed.listings,
        longitude: state.addressRed.longitude,
        latitude: state.addressRed.latitude
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayListings) 

    //countdown timer

    // const Completionist = () => <span>Listing Expired</span>;

    // const renderer = ({ hours, minutes, seconds, completed }) => {
    //     if (completed) {
    //       // Render a complete state
    //       return <Completionist />;
    //     } else {
    //       // Render a countdown
    //       return (
    //         <span>
    //           {hours}:{minutes}:{seconds}
    //         </span>
    //       );
    //     }
    //   };
      
    //   <Countdown date={Date.now() + 5000} renderer={renderer} />

    // concat error~~~~
    // const [listing, setListings] = useState([])

    // useEffect(() => {
    //     // console.log(props)
    //     props.allListings.map(listingItem => {
    //         // console.log(listingItem)
    //         fetchGeoLoc (listingItem.address, (result) => {

    //             let myListing = {
    //                 ...listingItem, 
    //                 lat: result.results[0].geometry.location.lat, 
    //                 lng: result.results[0].geometry.location.lng
    //             }
                
    //             console.log(myListing)
    //             setListings(listing.concat(myListing))
                
    //             })
    //     })
    // }, [props.allListings])

    // const fetchGeoLoc = (address, callback) => {
    //     fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDLGK5HZ52V33C4nbX8kXQ-IIveo_A0QpM&address=${address}`)
    //     .then(response => response.json())
    //     .then(function(response){
    //         const lat = response.results[0].geometry.location.lat
    //         const lng = response.results[0].geometry.location.lng


    //         callback(response)
    //     })
    // }


    
    // const listingsWithDistance = listing.map((listingItem, index )=> {

    //     const distance = (lat1, lon1, lat2, lon2, unit) => {
    //         if ((lat1 == lat2) && (lon1 == lon2)) {
    //             return 0;
    //         }
    //         else {
    //             var radlat1 = Math.PI * lat1/180;
    //             var radlat2 = Math.PI * lat2/180;
    //             var theta = lon1-lon2;
    //             var radtheta = Math.PI * theta/180;
    //             var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    //             if (dist > 1) {
    //                 dist = 1;
    //             }
    //             dist = Math.acos(dist);
    //             dist = dist * 180/Math.PI;
    //             dist = dist * 60 * 1.1515;
    //             if (unit=="K") { dist = dist * 1.609344 }
    //             if (unit=="N") { dist = dist * 0.8684 }
    //             return dist;
    //         }
    //     }
    //     const distanceCalculated = distance(props.latitude, props.longitude, listingItem.lat, listingItem.lng)

    //     console.log(distanceCalculated)
    //     return <li key={index}>
    //         {listingItem.title}
    //         {distance}
    //     </li>
        
    // }) 





