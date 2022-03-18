import Menu from "./Menu";
import '../css/Menu.css'
import { connect } from 'react-redux'
import Footer from "./Footer";


function BaseLayout(props) {
    return (
        <div>
            <div id="main">
                <Menu />
                {/* {!props.address ? <div><Address /></div> : <div><AddressDisplay /></div>} */}
                {props.children}
                <Footer />
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