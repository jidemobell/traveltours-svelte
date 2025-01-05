import {  customLoginUtility, customRegisterUtil } from './login';
import { LOGOUT } from './logout';



/** @type {import('./$types').Actions} */
export const actions = {
  login: customLoginUtility,
  logout: LOGOUT,
  register: customRegisterUtil
};
