const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(directM = true) {
      this.directM = directM;
      this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  
  encrypt(message, key) {
      
      if (message && key) {
          message = message.toUpperCase();
          key = key.toUpperCase();
          let count = 0;
          let array = message.split(' ');

          let newArr = array.map((item) => {
              let result = '';
              for (let i = 0; i < item.length; i++) {
                  if (this.alphabet.indexOf(item[i]) != -1) {
                      let indexMessage = this.alphabet.indexOf(item[i]);
                      if (!key[count]) count = 0;
                      let indexKey = this.alphabet.indexOf(key[count]);
                      count++;
                      if ((indexMessage + indexKey) > 25) {
                          result += this.alphabet[indexMessage + indexKey - this.alphabet.length];
                      } else {
                          result += this.alphabet[indexMessage + indexKey];
                      }
                  } else result += item[i];
              }
              if (this.directM == false) {
                  result = result.split('').reverse().join('');
              }
              return result;
          });
          if (this.directM == false) return newArr.reverse().join(' ');
          return newArr.join(' ');
      } else {
          throw new Error();
      }
  }


  decrypt(message, key) {
      
      if (message && key) {
          key = key.toUpperCase();
          let arr = message.split(' ');

          let count = 0;
          let newArr = arr.map((item) => {
              let result = '';
              for (let i = 0; i < item.length; i++) {
                  if (!key[count]) count = 0;
                  let indexKey = this.alphabet.indexOf(key[count]);
                  if (this.alphabet.indexOf(item[i]) != -1) {
                      let indexMessage = this.alphabet.indexOf(item[i]);
                      count++;
                      let index = Math.abs(indexMessage + this.alphabet.length - indexKey);
                      if (index > 25) index = index - this.alphabet.length;
                      result += this.alphabet[index];
                  } else result += item[i];
              }
              if (this.directM == false) {
                  result = result.split('').reverse().join('');
              }
              return result;
          });
          if (this.directM == false) return newArr.reverse().join(' ');
          return newArr.join(' ');
      } else {
          throw new Error();
      }
  }
}

module.exports = VigenereCipheringMachine;
