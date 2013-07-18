var Step = require('step')
  , fs = require('fs');

/**
 * 順序印出Step1 - 3
 */
Step(
  function step1() {
    console.log('Step1...');
    throw 'error..'; //這個會掉到step2的arguments[0]
    return 123; //有return才會往下走
  },
  function step2() {
    console.log('Step2...');
    console.log(arguments); //可以觀察接到的參數
    return 223;
  },
  function step3() {
    console.log('Step3...');
    console.log(arguments);
  }
);