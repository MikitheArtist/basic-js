const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.chain.push(``);
    } else this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position <= 0) {
      this.chain = [];
      throw new Error('Error');
    }
    else this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;   
  },
  finishChain() {
    let arr = this.chain.join('~~');
    this.chain = [];
    return arr;
  } 
};

module.exports = chainMaker;
