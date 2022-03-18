import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

// Importing Components
import BaseLayout from './components/BaseLayout';
import Login from './components/Login';
import Register from './components/Register';
import AddListing from './components/AddListing';
import Logout from './components/Logout';
import Landing from './components/Landing';
import Payment from './components/Payment'
import ProtectedRoute from './components/ProtectedRoute'

// Importing Reducers
import authenticateReducer from './store/reducers/authenticate'
import listingReducer from './store/reducers/listings'
import addressReducer from './store/reducers/address'
import cartReducer from './store/reducers/cart'
import filterReducer from './store/reducers/filter'



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  authenticateRed: authenticateReducer,
  listingsRed: listingReducer,
  addressRed: addressReducer,
  cartRed: cartReducer,
  filterRed: filterReducer,

})

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
))

const token = localStorage.getItem('jsonwebtoken')
store.dispatch({type: 'LOGIN', payload: token})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <BaseLayout>
          <Routes>
            <Route path="/" element={<Landing/>}></Route>
            <Route path="/listings" element={<App />}></Route>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/add-listing" element={
              <ProtectedRoute token={token}>
                <AddListing />
              </ProtectedRoute>
            } />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </BaseLayout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
