const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine( str ) {
  let strEnc = str.split('');
  let arrMain = [];
  let arrInterim=[];
  for(let i = 0; i < strEnc.length; i++){
    if(i === 0 || strEnc[i] === strEnc[i - 1]){
      arrInterim.push(strEnc[i]);
      if(i === strEnc.length - 1){
        arrMain.push(arrInterim);
      }
      console.log(arrInterim, 'if')
    }else {
      arrMain.push(arrInterim);
      arrInterim=[];
      arrInterim.push(strEnc[i]);
      if(i === strEnc.length - 1){
        arrMain.push(arrInterim);
      }
      console.log(arrInterim, 'else')
    }
  }
  let line = arrMain.map(el => `${el.length}` + `${el[0]}`).join('');
  let total = line.split('').filter(el => el !== '1').join('');
  console.log(strEnc, arrMain, line, total)
  return total
}

module.exports = {
  encodeLine
};
