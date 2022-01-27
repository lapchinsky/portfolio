import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {State} from "./State/State";
import './index.scss'

const app = <State><App /></State>

ReactDOM.render(
    app,
  document.getElementById('root')
);