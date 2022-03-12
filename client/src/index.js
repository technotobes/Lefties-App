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

// Importing Reducers
import authenticateReducer from './store/reducers/authenticate'
import listingReducer from './store/reducers/listings'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  authenticateRed: authenticateReducer,
  listingsRed: listingReducer,
})

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <BaseLayout>
          <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/add-listing" element={<AddListing />} />
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
