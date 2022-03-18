import { connect } from 'react-redux'
import Address from './Address'
import '../css/Landing.css'
import { GrLocation } from 'react-icons/gr'
import { BsArrowRightCircleFill } from 'react-icons/bs'
import background from '../images/landingbg.jpg'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Landing(props) {

    const navigate = useNavigate()

    return (
        <div>
            <div className="searchContainer" style={{backgroundImage: `url(${background})`,backgroundPosition:'center'}}>
                <h1 className="landingText">Waste not.</h1>
                    <div className="searchBoxContainer">
                        <GrLocation className="locationIcon"/>
                        <div className="addressSearch"><Address /></div>
                        <BsArrowRightCircleFill className="arrowIcon"/>
                    </div>
            </div>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
      address: state.addressRed.address
    }
}

export default connect(mapStateToProps)(Landing)