import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux"//այս կոմպոնետը կմիացնի մեր ռեդաքսը ռեակտի նախադրյալնեին
//և չի ենթարկի փոփոխության
import {store} from '../src/redux/store'//Իմպորտ ենք արել store-ը store.js-ից։

const container = document.getElementById('root')

const root = ReactDOM.createRoot(container);
//փաթաթում ենք մեր նախադրյալները Provider-ի մեջ և փոխանցում ենք սթորը՝ պահեստանոցը
root.render(
<Provider store={store}>
    <App />
</Provider>
);