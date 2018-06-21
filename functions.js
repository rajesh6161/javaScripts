


function square (number) {
    return number * number; 
  }
  
  console.log(square(5));

function divide (int1, int2) {
    if (int1>int2){
        return int1/int2;
    }else{
        return int2/int1;
    }
    
   
}
  console.log(divide(4,8));
  ///////////////////////////////////////////
  function testGreaterOrEqual(val) {
    if (val >= 20) {  // Change this line
      return "20 or Over";
    }
    
    if (val >= 10) {  // Change this line
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  // Change this value to test
  console.log(testGreaterOrEqual(0));

  ///////////////////////////&& operator
  function testLogicalAnd(val) {
    // Only change code below this line
  
    if (val<=50 && val>=25) {
  
      
        return "Yes";
      
    }
  
    // Only change code above this line
    return "No";
  }
  
  // Change this value to test
 console.log (testLogicalAnd(10));
  


