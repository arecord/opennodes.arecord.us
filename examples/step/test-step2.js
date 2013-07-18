var Step = require('step')
  , fs = require('fs');

/**
 * 順序印出Step1 - 3
 */
Step(
  function step1() {
    console.log('Step1...');
    //如果function有callback，需將callback以this替代
    fs.readFile('/etc/hosts', 'utf8', this); 
  },
  function step2() {
    console.log('Step2...');
    //觀察此時argument[1]將會接到callback的值
    //(PS:此部份callback的參數數量與位置將會與step2的arguments對應)
    console.log(arguments); //可以觀察接到的參數
    return 223;
  },
  function step3() {
    console.log('Step3...');
    console.log(arguments);
  }
);