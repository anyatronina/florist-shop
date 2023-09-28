import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCurrentUserData } from "../store/users";
import config from "../config.json";

const AdminRoute = ({ component: Component, children, ...rest }) => {
  const currentUser = useSelector(getCurrentUserData());
  const admin = currentUser?.email === config.admin.email;

  return (
    <Route
      {...rest}
      render={(props) => {
        if (admin) return Component ? <Component {...props} /> : children;

        return (
          <Redirect
            to={{
              pathname: "/",
              state: {
                from: props.location
              }
            }}
          />
        );
      }}
    />
  );
};

export default AdminRoute;
