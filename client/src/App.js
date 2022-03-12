import { useEffect } from "react";
import { connect } from 'react-redux'
import DisplayListings from "./components/DisplayListings";
import * as actionCreators from './store/creators/actionCreators'

function App(props) {

  useEffect(() => {
    props.onFetchListings()
  })

  return (
    <div>
      <h1>Home</h1>
      <DisplayListings />
    </div>
  );

}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchListings: () => dispatch(actionCreators.fetchListings())
  }
}

export default connect(null, mapDispatchToProps)(App);
