function factorial(n) {
  if (n === 0) { 
    return 1;
    } else { 
        if(n>12 || n<0) {
          throw new RangeError(["RangeError: Maximum call stack size exceeded"]);
        } else {
          return n * factorial(n - 1)};
      };
};