import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'


function AddListing(props) {

    const [listing, setListing] = useState({})
    const [lat, setLat] = useState('')
    const [lng, setLng] = useState('')

    console.log(props.address)

    useEffect(() => {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDLGK5HZ52V33C4nbX8kXQ-IIveo_A0QpM&address=${props.address}`)
        .then(response => response.json())
        .then(function(response){
            setLat(response.results[0].geometry.location.lat)
            setLng(response.results[0].geometry.location.lng)
           
        })
    }, [])

    console.log(lat)

    const handleTextChange = (e) => {
        setListing({
            ...listing,
            [e.target.name]: e.target.value,
            userId: localStorage.getItem('userId'),
            address: props.address,
            lat: lat,
            lng: lng
        })
    }

    const handleCheckboxChange = (e) => {       
        const { checked } = e.target    
        setListing({
            ...listing,
            [e.target.name]: checked
        })   
    }

    const handleSaveListing = (state) => {
        fetch('http://localhost:8080/listings', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(state)
        }).then(response => response.json())
        .then(result => {
            console.log(result)
        })
    }

    return (
        <div>
            <h1>Add Listing</h1>
            <input type="text" placeholder="Title" name="title" onChange={handleTextChange}/>
            <input type="text" placeholder="Description" name="description" onChange={handleTextChange}/>
            <input type="text" placeholder="Price" name="price" onChange={handleTextChange}/>
            <input type="text" placeholder="Quantity" name="quantity" onChange={handleTextChange}/>
            <input type="text" placeholder="Size" name="size" onChange={handleTextChange}/>
            <input type="checkbox" name="pickup" onChange={handleCheckboxChange}/>
            <input type="checkbox" name="delivery" onChange={handleCheckboxChange}/>
            <button onClick={() => handleSaveListing(listing)}>Add Listing</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        address: state.addressRed.address
    }
}

export default connect(mapStateToProps)(AddListing)