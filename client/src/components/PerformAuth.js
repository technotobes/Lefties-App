import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function PerformAuth({ComposedComponent}, props) {

    const navigate = useNavigate()

    if(!props.isAuthenticated) {
        navigate('/login')
    }

    return ComposedComponent
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.authenticateRed.isAuthenticated
    }
}

export default connect(mapStateToProps)(PerformAuth)