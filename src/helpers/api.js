import axios from 'axios';

/**
 * @desc get users
 * @param  {Number}   [number=10]
 * @return {Promise}
 */
export const apiGetUsers = (number = 10) =>
  axios.get(`https://randomuser.me/api?results=${number}`);
