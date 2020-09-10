import React from 'react';
import { withRouter, Redirect, Route } from 'react-router-dom';
import Check from './CheckPermission';
import Unauthorized from './Unauthorized';
// import { getAuthentication } from '../../utils/Authorized';
const getAuthentication = true;

/**
 * @param { undefined | string | boolean | () => (string | boolean)} authentication
 */
const isAuthenticated = (authentication) => {
  if (authentication === undefined) return true;
  if (typeof authentication === 'function') {
    return isAuthenticated();
  }
  return authentication;
};

/**
 * @param { boolean | undefined | array } needAuthentication
 * @description if user has login or not, if not pass redirect to redirect path
 * @param {function | string | string[] | undefined} authority
 * @description user role, if not pass show no Match Component
 */
const Authorized = ({
  children,
  needAuthentication,
  redirectPath,
  authority,
  noMatch = <Unauthorized />,
  ...rest
}) => {
  const childrenRender = typeof children === 'undefined' ? null : children;
  if (!needAuthentication) return childrenRender;
  const isPass = isAuthenticated(getAuthentication);
  const unAuthed = (
    <Route
      {...rest}
      render={() => <Redirect to={{ pathname: redirectPath }} />}
    />
  );
  if (!isPass) return unAuthed;
  const dom = Check(authority, childrenRender, noMatch);
  return <>{dom}</>;
};

export default withRouter(Authorized);
