import { connect } from 'react-redux'

function CartCountDisplay(props) {
    return (
        <>
        {props.allCartItems.length}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        allCartItems: state.cartRed.cart
    }
}

export default connect(mapStateToProps)(CartCountDisplay)