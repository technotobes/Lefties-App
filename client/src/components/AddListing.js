import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Address2 from './Address2'
import AddressDisplay from './AddressDisplay'



function AddListing(props) {

    const [listing, setListing] = useState({})
    const [lat, setLat] = useState('')
    const [lng, setLng] = useState('')

    const navigate = useNavigate()

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
        fetch('https://lefties.herokuapp.com/listings', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(state)
        }).then(response => response.json())
        .then(result => {
            navigate("/listings")
            console.log(result)
        })
    }

    return (
        <div className="registerContainer">
            <div className="registerInput">
                <h1>Add a Listing</h1>
                <input type="text" placeholder="Title" name="title" onChange={handleTextChange}/>
                <input type="text" placeholder="Description" name="description" onChange={handleTextChange}/>
                <input type="text" placeholder="Price" name="price" onChange={handleTextChange}/>
                <input type="text" placeholder="Quantity" name="quantity" onChange={handleTextChange}/>
                <input type="text" placeholder="Size: (Small, Medium, Large)" name="size" onChange={handleTextChange}/>
                <div className="checkboxContainer">
                    <div className="boxContainer">Pickup:<input type="checkbox" className="box" name="pickup" onChange={handleCheckboxChange}/></div>
                    <div className="boxContainer">Delivery: <input type="checkbox" className="box" name="delivery" onChange={handleCheckboxChange}/></div>
                </div>
                <div className="addListingAddress">
                    {!props.address ? <div><Address2 /></div> : <div><AddressDisplay /></div>}
                </div>

                
                <button onClick={() => handleSaveListing(listing)}>Add Listing</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        address: state.addressRed.address
    }
}

export default connect(mapStateToProps)(AddListing)