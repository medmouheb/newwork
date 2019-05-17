import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import carouselReducer from './store/reducers/carouselReducer'
import menuReducers from './store/reducers/menuReducers'
import productReducer from './store/reducers/productReducer'
import FooterReducer from './store/reducers/footerReducer'
import discountProductReducer from './store/reducers/discountProductReducer' 
import sidemenuReducer from './store/reducers/sidemenuReducer'
import ZoomIMGReducer from './store/reducers/zoomReducer'
import BigSaleSRCReducer from './store/reducers/bigsaleReducer'
import CarouselPhotoReducer from './store/reducers/CarouselPhotoReducer'
import filterReducer from './store/reducers/filterReducer'
import ProductImagelistReducer from './store/reducers/ProductImage'
import currentUserReducer from './store/reducers/currentUserReducer'
import newUserReducer from './store/reducers/newUserReducer'
import MegaMenuReducers from './store/reducers/megaMenu'
import "react-alice-carousel/lib/alice-carousel.css";
import DataTableReducer from './store/reducers/dataTableReducer'
import ShoppingCartReducer from './store/reducers/shoppingCart'

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
    newUserReducer,
    MegaMenuReducers,
    DataTableReducer,
    ShoppingCartReducer
})
const store = createStore(rootReducer,compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
