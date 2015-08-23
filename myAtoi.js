// implement atoi to convert a string to an integer.

// Hint: Carefully consider all possible input cases. If you want a challenge, please do not see below and ask yourself what are the possible input cases.

// Notes: It is intended for this problem to be specified vaguely (ie, no given input specs). You are responsible to gather all the input requirements up front.

// Update (2015-02-10):
// The signature of the C++ function had been updated. If you still see your function signature accepts a const char * argument, please click the reload button  to reset your code definition.

// spoilers alert... click to show requirements for atoi.

// Requirements for atoi:
// The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

// The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

// If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

// If no valid conversion could be performed, a zero value is returned. If the correct value is out of the range of representable values, INT_MAX (2147483647) or INT_MIN (-2147483648) is returned.

var myAtoi = function(str) {
    if(!str || !str.match(/\d+/g)){
        return 0
    }else{
        var alphaNum = str.replace(/^\s+|\s+$/g, "").match(/\d+[a-zA-Z]/g)
        var alpha = str.replace(/^\s+|\s+$/g, "").match(/[a-zA-Z]/g)
        var symbols=str.replace(/^\s+|\s+$/g, "").match(/[^0-9]/g)
        var num = str.match(/\d+/g)[0];
        var sum =0; 
        var factor = 1;
        if(alpha && !alphaNum){
            return 0
        }
        for(var i=num.length-1; i>-1; i--){
            sum = sum+(num[i].charCodeAt(0)-48)*factor
            factor = factor*10;
        }
    }
    if(symbols){
        if((symbols[0]==='+' && symbols[1]==='-') || (symbols[0]==='-' && symbols[1]==='+') || (symbols[0]==='-' && symbols[1]===" ") || (symbols[0]==='+' && symbols[1]===" ") || (symbols[0]==='+' && symbols[1]==='+')|| (symbols[0]==='-' && symbols[1]==='-')){
            return 0*sum
        }else if(symbols[0]==='-') {
            if(sum>2147483648){
                return -1*2147483648
            }else{
                return -1*sum
            }
        }else{
            if(sum>2147483647){
                return 2147483647
            }else{
                return sum
            }
            
        }
    }else{
         if(sum>2147483647){
                return 2147483647
        }else{
                return sum
        }
    }
    
};