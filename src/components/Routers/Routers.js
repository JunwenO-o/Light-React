import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Authorized from '../Authorized/Authorized';
import NotFound from '../Authorized/NotFound';
import Pages from '../../pages';

const getRedirectPath = (furl, childPath, routes) => {
  let cPath = childPath;
  let rs = routes;
  while (cPath === furl) {
    cPath = rs[0].path;
    if (!rs[0].children) break;
    rs = rs[0].children;
  }
  return cPath;
};

const AuthRouter = ({ authority, children }) => (
  <Authorized
    needAuthentication={authority}
    redirectPath="/Login"
    authority={authority}
  >
    {children}
  </Authorized>
);

/**
 *
 * @param {routerArray} rs router config
 * @param {string} furl father url path
 */
const renderComponentRouter = (rs, furl) => {
  if (!rs) return null;
  const routers = rs.map((r) => {
    const { children, key, path, auth } = r;
    const ChildComponent = Pages[key];
    if (!ChildComponent) {
      console.error('Component not exist or not register!');
    }
    if (children && children.length > 0) {
      const child = (
        <Route path={path} key={key}>
          <AuthRouter authority={auth}>
            <ChildComponent>
              {renderComponentRouter(children, path)}
            </ChildComponent>
          </AuthRouter>
        </Route>
      );
      return child;
    }
    return (
      <Route
        path={r.path}
        key={key}
        render={(props) => (
          <AuthRouter authority={auth}>
            <ChildComponent {...props} />
          </AuthRouter>
        )}
      />
    );
  });
  const redirectRoute = (
    <Route
      exact
      path={furl}
      render={() => <Redirect to={getRedirectPath(furl, furl, rs)} push />}
      key="default"
    />
  );
  const notFoundRoute = <Route component={NotFound} key="404" />;
  return <Switch>{[redirectRoute].concat(routers, [notFoundRoute])}</Switch>;
};

export default renderComponentRouter;
