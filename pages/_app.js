import React from 'react';

import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import App from "next/app";
import withRedux from "next-redux-wrapper";

import { PageTransition } from 'next-page-transitions'

import dropdownReducer from '../reducers/dropdown-reducers'
import inspectionReducer from '../reducers/inspection-reducer'
import formReducer from '../reducers/form-reducers'
import workOrderReducer from '../reducers/work-order-reducer'

const allReducers = combineReducers({
    navigation: dropdownReducer,
    inspections: inspectionReducer,
    forms: formReducer,
    workOrders: workOrderReducer
})


/**
* @param {object} initialState The store's initial state (on the client side, the state of the server-side store is passed here)
* @param {boolean} options.isServer Indicates whether makeStore is executed on the server or the client side
* @param {Request} options.req Node.js `Request` object (only set before `getInitialProps` on the server side)
* @param {Response} options.res Node.js `Response` object (only set before `getInitialProps` on the server side)
* @param {boolean} options.debug User-defined debug flag
* @param {string} options.storeKey The key that will be used to persist the store in the browser's `window` object for safe HMR
*/

const initialState = {
  dropdowns: '',
  inspections: '',
  forms: '',
  workOrders:''
}

const makeStore = (initialState, options) => {
    return createStore(allReducers, initialState);
};

class TciiApp extends App {
  
  static async getInitialProps({ Component, router, ctx }) {
    
    //let pageProps = {}

    // ctx.store.dispatch({type: 'FOO', payload: 'foo'});

    
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    

    return { pageProps }
  }


  render() {

    const {Component, pageProps, store, router} = this.props;
    
    return (
           
          <Provider store={store}>           
              <PageTransition timeout={300} classNames="page-transition">
                <Component {...pageProps} key={router.route} />                     
              </PageTransition>          
              <style jsx global>{`
                .page-transition-enter {
                  opacity: .5;
                  transform:translate3d(-100%,0,0);
                  transition: all 300ms;
                }
                .page-transition-enter-active {
                  opacity: 1;
                  transform:translate3d(0%,0,0);
                  transition: all 300ms;                  
                }
                .page-transition-enter-done {                  
                  transition: all 300ms;                  
                }                
                .page-transition-exit {
                  opacity: 1;
                  transform:translate3d(0%,0,0);
                }
                .page-transition-exit-active {
                  opacity: .5;
                  transform:translate3d(0%,0,0);
                  transition: all 300ms;
                }
              `}</style>
          </Provider>  
        
    );
  }
}

export default withRedux(makeStore)(TciiApp);