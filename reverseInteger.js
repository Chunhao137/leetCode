// Reverse digits of an integer.

// Example1: x = 123, return 321
// Example2: x = -123, return -321

// click to show spoilers.

// Have you thought about this?
// Here are some good questions to ask before coding. Bonus points for you if you have already thought through this!

// If the integer's last digit is 0, what should the output be? ie, cases such as 10, 100.

// Did you notice that the reversed integer might overflow? Assume the input is a 32-bit integer, then the reverse of 1000000003 overflows. How should you handle such cases?

// For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

// Update (2014-11-10):
// Test cases had been added to test the overflow behavior.
var reverse = function(x) {
    var symbol = (x).toString().match(/[^0-9]/g)
    var toStr = (x).toString().match(/\d+/g)[0].split('').reverse().join('');
    var factor = 1; 
    var sum = 0; 
    for(var i=toStr.length-1; i>-1; i--){
        sum = sum + (toStr[i].charCodeAt(0)-48)*factor
        factor = factor*10
        
    }
    if(symbol){
        if(sum>2147483641){
            return 0
        }
        else if(symbol[0]==='-'){
            return -1*sum
        }
    }else{
        if(sum>2147483641){
            return 0
        }else{
            return sum
        }
    }
};