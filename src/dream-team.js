const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam( members ) {
  if(!Array.isArray(members)) {
    return false    
  }

  const newMembers = members.map(un => {
    if(typeof un === 'string') {
      return un.trim()[0].toUpperCase()
    } 

    return ''
  }).sort().join('')
  
  return newMembers ? newMembers : false
}

module.exports = {
  createDreamTeam
};
