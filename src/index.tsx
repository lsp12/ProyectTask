import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from 'react-redux'
import {Store} from './Store/Store'



const clientID = process.env.REACT_APP_AUTH0_CLIENT!;
const domain = process.env.REACT_APP_AUTH0_DOMAIN!;

ReactDOM.render(
    <Auth0Provider
      domain={domain}
      clientId={clientID}
      redirectUri={window.location.origin}
    >
      <Provider store={Store}>
      <App />
      </Provider>
    </Auth0Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
