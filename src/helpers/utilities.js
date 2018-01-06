/**
 * @desc capitalize string
 * @param  {String} [string]
 * @return {String}
 */
export const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

/**
 * @desc get age from date of birth
 * @param  {String} [dob]
 * @return {Number}
 */
export const getAge = dob => Math.floor((Date.now() - Date.parse(dob)) / 31557600000);
