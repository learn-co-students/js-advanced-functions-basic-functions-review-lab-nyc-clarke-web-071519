// // Your code here

// **LAB**: Implement a function called `saturdayFun`. It should return a `String` like
// `"This Saturday, I want to ....!"` Fill in the `...` with the activity that's
// passed in as the first parameter. If nothing is passed in, default to
// `"roller-skate"`. Use the `learn` program to verify you've gotten a working
// implementation. Come back here once you've gotten just this set of tests passing.

function saturdayFun(parameter = "roller-skate") {
    return `This Saturday, I want to ${parameter}!`
}

// **LAB**: Implement a function called `mondayWork`. It should return a `String` like
// `"This Monday, I will ... ."` Fill in the `...` with the activity that's
// passed in as the first parameter. If nothing is passed in, default to
// `"go to the office"`. Use the `learn` program to verify you've gotten a working
// implementation. Come back here once you've gotten just this set of tests passing.

function mondayWork(parameterOne = "go to the office") {
    return `This Monday, I will ${parameterOne}.`
}

// * Implement a function called `wrapAdjective`.
//   * It should return a function
//     * This "inner" function should:
//       * take a single parameter that should default to `"special"`. Name it
//         however you wish.
//       * return a `String` of the form "You are ..." where `...` should be the
//         adjective this function received wrapped in visual flair
//   * It should take as parameter a `String` that will be used to create visual flair
//   * You may call the parameter whatever you like, but its default value should
//     be `"*"`
//   * Call example: `let encouragingPromptFunction = wrapAdjective("!!!")`
// * Thus a total call should be:
//       `wrapAdjective("%")("a dedicated programmer") //=> "You are %a dedicated programmer%!"`

function wrapAdjective(outerParam = "*") {
    function innerFunction(innerParam = "special") {
        return `You are ${outerParam}${innerParam}${outerParam}!`
    }
    return innerFunction
}

// defines an object called Calculator
// 1) has a JavaScript Object called Calculator as a local variable
// that has a function called add
//   2) Calculator.add exists
//   3) calculates 1 + 3
// that has a function called subtract
//   4) Calculator.subtract exists
//   5) calculates 1 - 3
// that has a function called multiply
//   6) Calculator.multiply exists
//   7) calculates 1 * 3
// that has a function called divide
//   8) Calculator.divide exists
//   9) calculates 10 / 5

const Calculator = {
    add: function(a,b) {
        return a + b
    },
    subtract: function(a,b) {
        return a - b
    }, 
    multiply: function(a,b) {
        return a * b
    }, 
    divide: function(a,b) {
        return a / b
    }
}

let actionApplyer = function(string, array) {
    let x = string
        
        for (let i = 0; i < array.length; i++ ){
        x = array[i](x)
        }
    
    return x
}