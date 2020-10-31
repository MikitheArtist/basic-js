const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  if(Array.isArray(members)) {
    return members.filter(input => typeof(input) === 'string').map(function(input){ input = input.trim().toUpperCase();return input[0]}).sort().join('');

  }else return false;
};

