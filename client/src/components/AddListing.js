import React, { useState } from 'react'


function AddListing() {

    const [listing, setListing] = useState({})

    const handleTextChange = (e) => {
        setListing({
            ...listing,
            [e.target.name]: e.target.value,
            userId: localStorage.getItem('userId')
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

export default AddListing