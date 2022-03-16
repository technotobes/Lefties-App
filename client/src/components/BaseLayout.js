import Menu from "./Menu";
import '../css/Menu.css'
import Address from './Address'
import AddressDisplay from './AddressDisplay'
import { connect } from 'react-redux'


function BaseLayout(props) {
    return (
        <div>
            <div id="main">
                <Menu />
                {/* {!props.address ? <div><Address /></div> : <div><AddressDisplay /></div>} */}
                {props.children}
                <h6>Footer</h6>
            </div>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
      address: state.addressRed.address
    }
}

export default connect(mapStateToProps)(BaseLayout)