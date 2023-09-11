const assert = require('chai').assert;
// bringing in each function at time 
// const sayHello = require('../app').sayHello; 
// const addNumbers = require('../app').addNumbers;
// bring in all the functions in the app 
const app = require('../app');

// results 
sayHelloResult = app.sayHello(); 
addNumbersResult = app.addNumbers(5,5); 

describe('App', function(){
    it('sayHello should return hello', function(){
       // let result = app.sayHello(); 
        assert.equal(sayHelloResult, 'hello');
    });

    it('sayHello should return type string', function(){
      //  let result = app.sayHello(); 
        assert.typeOf(sayHelloResult, 'string'); 
    });

    it('addNumbers should be above 5', function (){
       // let result = app.addNumbers(5,5); 
        assert.isAbove(addNumbersResult, 5); 
    }); 
    
    it('sayHello should return type number', function(){
      //  let result = app.addNumbers(5,5); 
        assert.typeOf(addNumbersResult, 'number'); 
    });

});