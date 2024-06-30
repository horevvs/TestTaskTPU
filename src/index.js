import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Store from './Store'



const reducer = (state = Store, action) => {
  switch (action.type) {
    case 'close': {
      return {...state, shows:!state.shows  }
    }
    // case 'add': {
    //   return {...state, result:state.result+1 }
    // }
    default: return state
  }
};


const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
