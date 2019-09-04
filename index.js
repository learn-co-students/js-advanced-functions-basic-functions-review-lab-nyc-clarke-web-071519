// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(parameter="*") {
    return function(adjective="special") {
        return `You are ${parameter}${adjective}${parameter}!`
    }
}

let Calculator = {
    add: function(a,b) {
        return a + b;
    },
    subtract: function(a,b) {
        return a - b;
    },
    multiply: function(a,b) {
        return a * b;
    },
    divide: function(a,b) {
        return a / b;
    }
}

function actionApplyer(a,array) {
    let x = a;
    array.forEach(f => {
        x = f(x);
    })
    return x;
}