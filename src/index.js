import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import RouteApp from './router/Route';
import 'semantic-ui-css/semantic.min.css'
import './index.css'

ReactDOM.render(
    <RouteApp />,
  document.getElementById('root')
);


