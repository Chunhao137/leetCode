// Write a program to check whether a given number is an ugly number.

// Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.
// For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.

// Note that 1 is typically treated as an ugly number.

// Credits:
// Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.

/**
 * @param {number} num
 * @return {boolean}
 */
 
var isUgly = function(num) {
    var primeFac = [2,3,5];
    for(var i=0; i<primeFac.length; i++){
      //check to see if there are any other prime factors
      while(num%primeFac[i]===0){
        num/=primeFac[i];
      }
    }
    return num===1
    
};