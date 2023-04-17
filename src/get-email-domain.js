const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain( email ) {

  const symbEmail = email.split('')

  const atSymbol = symbEmail.findIndex(el => el === '@')

  const modifySymEmail = symbEmail.slice(atSymbol + 1, symbEmail.length)
  if(modifySymEmail.find(el => el === '@') === '@'){
    const index = modifySymEmail.findIndex(el => el === '@')
    const modifySymb = modifySymEmail.slice(index + 1, modifySymEmail.length)

    return modifySymb.join('')
  }

  return modifySymEmail.join('')
}

module.exports = {
  getEmailDomain
};
