import React from "react";
import { Route, Redirect } from "react-router-dom"
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { ApplicationViews } from "./ApplicationViews";

export const PinballFinder = () => (
  <>
    <Route
      render={() => {
        if (sessionStorage.getItem("pinball_user")) {
          return (
            <>
              <NavBar />
              <ApplicationViews />
            </>
          )
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
)