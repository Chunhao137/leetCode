
// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

// For example:

// Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

// Follow up:
// Could you do it without any loop/recursion in O(1) runtime?
//In constant time
var addDigits = function(num) {
    return 1+(num-1)%9
}


var addDigits = function(num) {
    var total = 0; 
    var recur = function(input){
        var sum =0;
        if(input/10<1){
            total = input
        }else{
            var strInput= input.toString();
            for(var i=0; i<strInput.length; i++){
                sum =sum+(strInput[i].charCodeAt(0)-48)
            }
            recur(sum);
        }
    }
    recur(num);
    return total
    
};

