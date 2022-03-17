const postfix = (input) => {
  let numbers = [];
  let tokens = input.split(' ');

  for ( let i = 0; i < tokens.length; i++){
    const token = tokens[i]
    console.log(token)
    if(isNaN(token)){
      if(numbers.length < 2){
        throw "malformed expression"
      }
      let val1 = numbers.shift()
      let val2 = numbers.shift()
      switch(token){
        case '+': 
          numbers.unshift(val2+val1);
          break;        
        case '-': 
          numbers.unshift(val2-val1);
          break;
        case '*': 
          numbers.unshift(val2*val1);
          break;
        case '/': 
          numbers.unshift(val2/val1);          
          break;
        default: console.log(token)
          throw "Unknown operator"
      }
    }else{
      numbers.unshift(Number(token))
      
    }
    console.log(numbers)

  } 
  return numbers[0] 
}
console.log(postfix('2 +'))












