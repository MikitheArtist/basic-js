const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, {
  repeatTimes = 1,
  separator = '+',
   addition = '',
   additionRepeatTimes = 1,
  additionSeparator = '|'
} = {}) {

let a = '';
let b = '';

for ( let i = 0; i < additionRepeatTimes; i++ ) {

a += addition + additionSeparator;

}

a = a.slice(0, a.length-additionSeparator.length);

for ( let i = 0; i < repeatTimes; i++ ) {

  b += str + a + separator;

}

return b.slice(0, b.length-separator.length);

};
  