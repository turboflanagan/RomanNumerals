// Need to break the input number into an array of digits.  



   // ***** First Test ******
/*
function convert(num) {
  var inputArr = num.toString().split("");

  var romanNum = "";
  
  for(i = 1; i <= num; i++){
    if( num >= 1 ) {
      romanNum = romanNum + "I";
    }    
  }
  console.log(inputArr);
  return(romanNum);
}

convert(433);
*/


// ******* Second Test ********

// var inputArr = num.toString().split("");
// var romanArr = [ "","I","II","III","IV","V","VI","VII","VIII","IX","X",
// "XX","XXX","XL","L","LX","LXX","LXXX","XC",
// "C","CC","CCC","CD","D","DC","DCC","DCCC","CM",]

// for(i = 0; i <= num; i++){  // num should have been inputArr.length
//     if(num <= 10){
// 	  return(romanArr[num]);
//     } 
// }




// ******* Third Test ********

var romanNumsArr = [[ "","I","II","III","IV","V","VI","VII","VIII","IX","X"],
                ["XX","XXX","XL","L","LX","LXX","LXXX","XC"],
                ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM",]];


function makeRomNumbs(num){
  var romanNumerals = "";
  var inputArray = num.toString().split("").reverse();  //  .reverse() is what I was missing! :-)
  for(i = 0; i <inputArray.length; i++){
    romanNumerals = romanNumsArr[i][parseInt(inputArray[i])] + romanNumerals;
  }  
};


/*
Build an array of Roman numbers. 
Take each element in the array and apply it to the appropriate roman numeral.

ie- 357 = arr = [3, 5, 7]
arr[0] = "CCC"
arr[1] = "V"
arr[2] = "VII" 

Check length of arr.  arr.length -1 starts the Ones numbers. 
Build a check for 0 and set to 10.

arr.length -2 is the Tens.  
Build a check for 0 and set to 100.

arr.length -3 is the Hundreds.  
Build a check for 0 and set to 1000.





*/



