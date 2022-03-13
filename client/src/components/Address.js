import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../store/creators/actionCreators'
import PlacesAutocomplete from 'react-places-autocomplete'
import '../css/Menu.css'


function Address(props) {

    const [address, setAddress] = useState("")

    // const handleTextChange = (e) => {
    //     setAddress({
    //       ...address,
    //       [e.target.name]: e.target.value
    //     })
    //   }
    
    // const handleSaveAddress = (state) => {
    // props.onSaveAddress(state)
    // }

    const handleSelect = async value => {
        props.onSaveAddress(value)
    };

    return (
        <div>
            <PlacesAutocomplete
            value={address}
            onChange={setAddress}
            onSelect={handleSelect}
            >{({ getInputProps, suggestions, getSuggestionItemProps, loading})=> (
            <div>
                <input {...getInputProps({placeholder: "Address"})} className="addressText"/>

                {/* Display Suggestions */}
                <div>
                    {loading ? <div>... loading</div> : null}

                    {suggestions.map((suggestion, index) => {

                        const style = {
                            backgroundColor: suggestion.active ? "#ffb6b9" : "#fae3d9"
                        }

                        return <div key={index} {...getSuggestionItemProps(suggestion, { style })}>{suggestion.description}</div>
                    })}
                </div>
            </div>
            )}</PlacesAutocomplete>
        </div>
    )

}

const mapDispatchToProps = (dispatch) => {
    return {
      onSaveAddress: (address) => dispatch(actionCreators.saveAddress(address))
    }
  }

export default connect(null, mapDispatchToProps)(Address);