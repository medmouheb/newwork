import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import carouselReducer from './reducers/carouselReducer'
import menuReducers from './reducers/menuReducers'
import productReducer from './reducers/productReducer'
import FooterReducer from './reducers/footerReducer'
import discountProductReducer from './reducers/discountProductReducer' 
import sidemenuReducer from './reducers/sidemenuReducer'
import ZoomIMGReducer from './reducers/zoomReducer'
import BigSaleSRCReducer from './reducers/bigsaleReducer'
import CarouselPhotoReducer from './reducers/CarouselPhotoReducer'
import filterReducer from './reducers/filterReducer'
import ProductImagelistReducer from './reducers/ProductImage'
import currentUserReducer from './reducers/currentUserReducer'
import newUserReducer from './reducers/newUserReducer'
import "react-alice-carousel/lib/alice-carousel.css";

import { combineReducers,createStore,compose } from 'redux'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import 'react-bootstrap';

const rootReducer = combineReducers({
    carouselReducer,
    menuReducers,
    productReducer,
    FooterReducer,
    discountProductReducer,
    sidemenuReducer,
    ZoomIMGReducer,
    BigSaleSRCReducer,
    CarouselPhotoReducer,
    filterReducer,
    ProductImagelistReducer,
    currentUserReducer,
    newUserReducer
})
const store = createStore(rootReducer,compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
