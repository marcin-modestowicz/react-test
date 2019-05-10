import React, { ComponentType } from 'react';
import { Route, Redirect } from 'react-router-dom';

interface Props {
  component: ComponentType;
  [key: string]: any;
}

const Protected = ({ component: RouteComponent, ...rest }: Props) =>
  // update condition
  true ? (
    <RouteComponent {...rest} />
  ) : (
    <Redirect
      to={{
        pathname: '/login',
        state: { from: rest.location.pathname }
      }}
    />
  );

const PrivateRoute = ({ component: RouteComponent, path, exact }: Props) => (
  <Route
    path={path}
    exact={exact}
    render={props => <Protected component={RouteComponent} {...props} />}
  />
);

export default PrivateRoute;
