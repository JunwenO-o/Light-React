// import { currentRole } from '../../utils/Authorized';
// TODO: HARD CODE FOR CURRENT RULO WILL CHANGE AFTER INCLUDE REDUX
const currentRole = ['admin'];

/**
 * format authorization into string[]
 * @param {function | string | string[] | undefined} authorized
 * @returns {string[]} formatted authorzied
 */
const formatAuthorized = (authorized) => {
  let formattedAuthorized = ['NULL'];
  if (authorized) {
    if (typeof authorized === 'function') {
      formattedAuthorized = formatAuthorized(authorized());
    }
    if (typeof authorized === 'string') {
      formattedAuthorized = [authorized];
    }
    if (
      Object.prototype.toString.call(authorized) === '[object String]' ||
      Array.isArray(authorized)
    ) {
      formattedAuthorized = authorized;
    }
  }
  return formattedAuthorized;
};

const CheckPermisson = (
  authority,
  current,
  targetComponent,
  exceptionComponent
) => {
  const formattedAuthority = formatAuthorized(authority);
  const formattedCurrent = formatAuthorized(current);
  if (formattedCurrent.some((item) => formattedAuthority.includes(item))) {
    return targetComponent;
  }
  return exceptionComponent;
};

const Check = (authority, targetComponent, exceptionComponent) =>
  CheckPermisson(authority, currentRole, targetComponent, exceptionComponent);

export { CheckPermisson };
export default Check;
