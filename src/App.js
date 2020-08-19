import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

// All route props (match, location and history) are available to User
export default function User(props) {
  return <h1>Hello {props.match.params.username}!</h1>;
}