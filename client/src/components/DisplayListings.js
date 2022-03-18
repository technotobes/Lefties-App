import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../store/creators/actionCreators'
import Modal from 'react-modal'
import '../css/Listing.css'
import distance from '../distance'
import { FaShoppingBag } from 'react-icons/fa'
import { MdDeliveryDining, MdOutlineLocalFireDepartment } from 'react-icons/md'



function DisplayListings(props) {

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [modalData, setModalData] = useState({})
    const [fListings, setFilteredListings] = useState([])


    const filteredListings = () => { 
        if(props.delivery === true && props.pickup === false) {
           const deliveryListings = props.allListings.map(listingItem => {
                if(listingItem.delivery === true) {
                    const distanceResults = distance(props.latitude, props.longitude, listingItem.lat, listingItem.lng)
                    const formattedDistance = (Math.round(distanceResults * 100) / 100).toFixed(2);
                    // console.log(formattedDistance)
                    
                    return <li className="listing" key={listingItem.id}>
                    <button className="clickListing" onClick={() => {setModalIsOpen(true); setModalData(listingItem)}}>
                        <div className="listingInfoContainer">
                            <h2 className="listingTitle">{listingItem.title} <div className="listingIcons">{listingItem.delivery ? <><MdDeliveryDining size="1.4em"/></>:null}{listingItem.pickup ? <><FaShoppingBag /></>:null}</div></h2>
                            <div className="servings">Servings Available: {listingItem.quantity}</div>
                            <div className="distanceContainer">
                            <div>
                                $ {listingItem.price}
                            </div>
                            {props.address ? <div>{formattedDistance} mi</div> : null}</div>
                        </div>
                    </button>
                    {/* Inside Modal */}
                    <Modal className="Modal" overlayClassName="Overlay" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                        <h2>{modalData.title}</h2>
                        <p className="modalDescription">{modalData.description}</p>
                        <p className="modalPrice">$ {modalData.price}</p>
                        <p>{modalData.quantity} Servings Available</p>
                        <p>{modalData.pickup ? <div>Pickup at: {modalData.address}</div>: null}</p>
                        <div className="modalBtns">
                            <button onClick={() => props.onAddToCart(modalData)}>Add To Cart</button>
                            <button onClick={() => setModalIsOpen(false)}>Close</button>
                        </div>
                    </Modal>
                </li>
                }
            })
            return deliveryListings
        } else if (props.pickup === true && props.delivery === false) {
            const pickupListings = props.allListings.map(listingItem => {
                if(listingItem.pickup === true) {
                    const distanceResults = distance(props.latitude, props.longitude, listingItem.lat, listingItem.lng)
                    const formattedDistance = (Math.round(distanceResults * 100) / 100).toFixed(2);
                    // console.log(formattedDistance)
                    
                    return <li className="listing" key={listingItem.id}>
                    <button className="clickListing" onClick={() => {setModalIsOpen(true); setModalData(listingItem)}}>
                        <div className="listingInfoContainer">
                            <h2 className="listingTitle">{listingItem.title} <div className="listingIcons">{listingItem.delivery ? <><MdDeliveryDining size="1.4em"/></>:null}{listingItem.pickup ? <><FaShoppingBag /></>:null}</div></h2>
                            <div className="servings">Servings Available: {listingItem.quantity}</div>
                            <div className="distanceContainer">
                            <div>
                                $ {listingItem.price}
                            </div>
                            {props.address ? <div>{formattedDistance} mi</div> : null}</div>
                        </div>
                    </button>
                    {/* Inside Modal */}
                    <Modal className="Modal" overlayClassName="Overlay" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                        <h2>{modalData.title}</h2>
                        <p className="modalDescription">{modalData.description}</p>
                        <p className="modalPrice">$ {modalData.price}</p>
                        <p>{modalData.quantity} Servings Available</p>
                        <p>{modalData.pickup ? <div>Pickup at: {modalData.address}</div>: null}</p>
                        <div className="modalBtns">
                            <button onClick={() => props.onAddToCart(modalData)}>Add To Cart</button>
                            <button onClick={() => setModalIsOpen(false)}>Close</button>
                        </div>
                    </Modal>
                </li>
                }
            })
            return pickupListings
        } else if (props.pickup === true && props.delivery === true) {
            const dnpListings = props.allListings.map(listingItem => {
                if(listingItem.pickup === true && listingItem.delivery === true) {
                    const distanceResults = distance(props.latitude, props.longitude, listingItem.lat, listingItem.lng)
                    const formattedDistance = (Math.round(distanceResults * 100) / 100).toFixed(2);
                    // console.log(formattedDistance)
                    
                    return <li className="listing" key={listingItem.id}>
                    <button className="clickListing" onClick={() => {setModalIsOpen(true); setModalData(listingItem)}}>
                        <div className="listingInfoContainer">
                            <h2 className="listingTitle">{listingItem.title} <div className="listingIcons">{listingItem.delivery ? <><MdDeliveryDining size="1.4em"/></>:null}{listingItem.pickup ? <><FaShoppingBag /></>:null}</div></h2>
                            <div className="servings">Servings Available: {listingItem.quantity}</div>
                            <div className="distanceContainer">
                            <div>
                                $ {listingItem.price}
                            </div>
                            {props.address ? <div>{formattedDistance} mi</div> : null}</div>
                        </div>
                    </button>
                    {/* Inside Modal */}
                    <Modal className="Modal" overlayClassName="Overlay" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                        <h2>{modalData.title}</h2>
                        <p className="modalDescription">{modalData.description}</p>
                        <p className="modalPrice">$ {modalData.price}</p>
                        <p>{modalData.quantity} Servings Available</p>
                        <p>{modalData.pickup ? <div>Pickup at: {modalData.address}</div>: null}</p>
                        <div className="modalBtns">
                            <button onClick={() => props.onAddToCart(modalData)}>Add To Cart</button>
                            <button onClick={() => setModalIsOpen(false)}>Close</button>
                        </div>
                    </Modal>
                </li>
                }
            })
            return dnpListings
        } else {
            const Listings = props.allListings.map(listingItem => {
                const distanceResults = distance(props.latitude, props.longitude, listingItem.lat, listingItem.lng)
                const formattedDistance = (Math.round(distanceResults * 100) / 100).toFixed(2);
                // console.log(formattedDistance)
                
                return <li className="listing" key={listingItem.id}>
                        <button className="clickListing" onClick={() => {setModalIsOpen(true); setModalData(listingItem)}}>
                            <div className="listingInfoContainer">
                                <h2 className="listingTitle">{listingItem.title} <div className="listingIcons">{listingItem.delivery ? <><MdDeliveryDining size="1.4em"/></>:null}{listingItem.pickup ? <><FaShoppingBag /></>:null}</div></h2>
                                <div className="servings">Servings Available: {listingItem.quantity}</div>
                                <div className="distanceContainer">
                                <div>
                                    $ {listingItem.price}
                                </div>
                                {props.address ? <div>{formattedDistance} mi</div> : null}</div>
                            </div>
                        </button>
                        {/* Inside Modal */}
                        <Modal className="Modal" overlayClassName="Overlay" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                            <h2>{modalData.title}</h2>
                            <p className="modalDescription">{modalData.description}</p>
                            <p className="modalPrice">$ {modalData.price}</p>
                            <p>Serving Size: {modalData.size}</p>
                            <b>{modalData.quantity} Servings Available</b>
                            <p>{modalData.pickup ? <div>Pickup at: {modalData.address}</div>: null}</p>
                            <div className="modalBtns">
                                <button onClick={() => props.onAddToCart(modalData)}>Add To Cart</button>
                                <button onClick={() => setModalIsOpen(false)}>Close</button>
                            </div>
                        </Modal>
                    </li>
    
            })
            return Listings
        }

    }


    return (
        <div className="mainListingContainer">
          <h1>Listings</h1>
          <div className="listingContainer">
              {filteredListings()}
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
        latitude: state.addressRed.latitude,
        delivery: state.filterRed.delivery,
        pickup: state.filterRed.pickup,
        address: state.addressRed.address,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayListings) 

    // const filteredListing = [];

    // for (let i=0; i<props.allListings.length; i++) {
    // const listing = props.allListings[i];

    //         if(props.delivery === true && props.pickup === false && listing.delivery === true) {
    //             console.log(listing)
    //             filteredListing.push(listing);
    //         } else if(props.pickup === true && props.delivery === false && listing.pickup === true) {
    //             console.log(listing)
    //             filteredListing.push(listing);
    //         } else if(props.pickup === true && props.delivery === true && listing.delivery === true && listing.pickup === true) {
    //             filteredListing.push(listing);
    //         } else {
    //             filteredListing.push(listing);
    //         }
    // }

    // const displayFilteredListings = filteredListing.map(listingItem => {
    //     return <li key={listingItem.id}>{listingItem.title}</li>
    //     })


    //     console.log(filteredListing)

    // props.allListings.map(listingItem => {
    //     if(listingItem.delivery) {
    //         // return all the listings where delivery true
    //         console.log(listingItem.title)
    //         return <li key={listingItem.id}>{listingItem.title}</li>
    //     } else if (listingItem.pickup) {
    //         // return all the listings where pick up is true
    //         console.log(listingItem.title)
    //         return <li key={listingItem.id}>{listingItem.title}</li>
    //     } else {
    //         // return all listings
    //         console.log(listingItem.title)
    //         return <li key={listingItem.id}>{listingItem.title}</li>
    //     }
        
    // })


    
    // const listings = props.allListings.map((listingItem, index) => {
        
    //     const distanceResults = distance(props.latitude, props.longitude, listingItem.lat, listingItem.lng)
    //     const formattedDistance = (Math.round(distanceResults * 100) / 100).toFixed(2);
    //     // console.log(formattedDistance)
        
    //     return <li key={index}>
    //             <button className="clickListing" onClick={() => {setModalIsOpen(true); setModalData(listingItem)}}>
    //             <div>{listingItem.title}</div>
    //             <div>{formattedDistance} mi</div>


                
    //             </button>
                

    //             {/* Inside Modal */}
    //             <Modal className="Modal" overlayClassName="Overlay" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
    //                 <h2>{modalData.title}</h2>
    //                 <p>{modalData.description}</p>
    //                 <p>{modalData.price}</p>
    //                 <div>
    //                     <button onClick={() => props.onAddToCart(modalData)}>Add To Cart</button>
    //                     <button onClick={() => setModalIsOpen(false)}>Close</button>
    //                 </div>
    //             </Modal>
    //         </li>
    // })
    

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





