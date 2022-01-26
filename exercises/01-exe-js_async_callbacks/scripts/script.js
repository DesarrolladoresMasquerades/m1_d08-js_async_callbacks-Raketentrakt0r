//Exercise 1: What is the expected output? And why?

function print() {
    console.log(1);
    setTimeout(() => console.log(2), 1000);
    setTimeout(() => console.log(3), 0);
    console.log(4);
  }
  
  print(console.log);
  
  
  // ------------------------------------------------------------------------
  
  
  //Exercise 2: Write a function blast() , which loops over the numbers 1 to 15. every 1 second  
  function blast(){
   
    for (let i = 0; i < 15; i++){
      if (3 % 15 === 0){
        return BOOM
      } else if (5 % 15 === 0){
        return BANG
      }
    }
  }
  // - For every number divisible by 3 it prints BOOM!!
  // - For every number divisible by 5 it prints a BANG!!
  // - Forevery number divisible for 3 and 5 it prints BOOM BANG!! 
  
  
