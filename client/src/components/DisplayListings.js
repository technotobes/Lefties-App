import React from 'react'
import { connect } from 'react-redux'


function DisplayListings(props) {


    const listingItems = props.allListings.map(listing => {
        return <li key={listing.id}>{listing.title}</li>
    })

    return (
        <div>
          <h1>Listings</h1>
          {listingItems}
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        allListings: state.listingsRed.listings,
    }
}

export default connect(mapStateToProps)(DisplayListings) 