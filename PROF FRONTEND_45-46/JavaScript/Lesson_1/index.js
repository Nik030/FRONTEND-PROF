function calculate(func, argX, argY) {
    return func(argX, argY);
  }
  
  function sum(x, y) {
    return x + y;
  }
  
  function multiply(x, y) {
    return x * y;
  }
  
  function divide(x, y) {
    return x / y;
  }
  
  console.log(calculate(sum, 1, 3));
  console.log(calculate(multiply, 5, 10));