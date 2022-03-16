import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../store/creators/actionCreators'
import PlacesAutocomplete from 'react-places-autocomplete'
import '../css/Menu.css'
import { useNavigate } from 'react-router-dom'


function Address(props) {

    const [address, setAddress] = useState("")

    const navigate = useNavigate()


    const handleSelect = async value => {
        props.onSaveAddress(value)
        navigate('/home')
    };

    // console.log(address)

    return (
        <div>
            <PlacesAutocomplete
            value={address}
            onChange={setAddress}
            onSelect={handleSelect}
            >{({ getInputProps, suggestions, getSuggestionItemProps, loading})=> (
            <div>
                <div>
                    <input {...getInputProps({placeholder: "Address"})} className="addressText"/>
                </div>
                
                {/* Display Suggestions */}
                <div>
                    {loading ? <div>... loading</div> : null}

                    {suggestions.map((suggestion, index) => {

                        const style = {
                            backgroundColor: suggestion.active ? "#fd7979" : "#ffffff",
                            color: suggestion.active ? "#ffffff" : "#000000",
                            borderRadius: "5px"
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