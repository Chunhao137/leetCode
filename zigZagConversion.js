// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"
// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string text, int nRows);
// convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".


var convert = function(s, numRows) {
    if(numRows===1){
        return s
    }
    var pos = 0;
    var down = false;
    var str = new Array(numRows+1).join('.').split('.');
    for(var i=0; i<s.length;i++){
        str[pos]=str[pos]+s[i];
        if(pos===numRows-1){
            pos--;
            down=false;
        }else if(pos===0){
            pos++;
            down=true;
        }else if(down){
            pos++
        }else{
            pos--
        }
        
    }
    return str.join('')
};