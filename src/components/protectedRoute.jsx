import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCurrentUserData, getIsLoggedIn } from "../store/users";
import config from "../config.json";
import UsersOrder from "../layouts/usersOrder";

const ProtectedRoute = ({ component: Component, children, ...rest }) => {
  const isLoggedIn = useSelector(getIsLoggedIn());
  const currentUser = useSelector(getCurrentUserData());
  const admin = currentUser?.email === config.admin.email;

  console.log(Component);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isLoggedIn) {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }

        return Component ? <Component {...props} /> : children;
      }}
    />
  );
};

export default ProtectedRoute;
