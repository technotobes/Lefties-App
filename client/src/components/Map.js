import React, { useMemo, useCallback, useRef, useState } from 'react'
import home from '../images/home.svg'
import { connect } from 'react-redux'
import { GoogleMap, InfoWindow, Marker } from '@react-google-maps/api'
import "../css/Listing.css"



function Map(props) {

    const [selectedListing, setSelectedListing] = useState(null)

    const mapRef = useRef()

    const options = useMemo(() => ({
        disableDefaultUI: false,
        clickableIcons: true
    }), [])

    const onLoad = useCallback(map => (mapRef.current = map), [])


    return (
        <div>
            <GoogleMap
            zoom={13}
            center={{lat: props.latitude, lng: props.longitude}}
            mapContainerClassName="mapContainer"
            options={options}
            onLoad={onLoad}
            >
                {props.listings.map((listing) => (
                    <Marker 
                    key={listing.id} 
                    position={{lat: listing.lat, lng: listing.lng}} 
                    onClick={() => setSelectedListing(listing)} 
                    />
                ))}

                {selectedListing ? (
                    <InfoWindow 
                        position={{lat:selectedListing.lat, lng: selectedListing.lng}}
                        onCloseClick={() => {
                            setSelectedListing(null)
                        }}
                    >
                        <div>
                            <h3>{selectedListing.title}</h3>
                        </div>
                    </InfoWindow>): null}

                <Marker 
                position={{lat: props.latitude, lng: props.longitude}} 
                icon={{
                    url: home, 
                    scaledSize: new window.google.maps.Size(30,30),
                    origin: new window.google.maps.Point(0, 0),
                    anchor: new window.google.maps.Point(15, 15)
                    }}/>
            </GoogleMap>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
    address: state.addressRed.address
  }
}

export default connect(mapStateToProps)(Map)