const { NotImplementedError } = require("../lib");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options = {}) {
  const s = String(str);
  const repeatTimes = options.repeatTimes || 1;
  const separator =
    options.separator !== undefined ? String(options.separator) : "+";
  const addition =
    options.addition !== undefined ? String(options.addition) : "";
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator =
    options.additionSeparator !== undefined
      ? String(options.additionSeparator)
      : "|";

  let additionStr = "";
  if (addition) {
    const additions = [];
    for (let i = 0; i < additionRepeatTimes; i += 1) {
      additions.push(addition);
    }
    additionStr = additions.join(additionSeparator);
  }

  const result = [];
  for (let i = 0; i < repeatTimes; i += 1) {
    result.push(s + additionStr);
  }

  return result.join(separator);
}

module.exports = {
  repeater,
};
