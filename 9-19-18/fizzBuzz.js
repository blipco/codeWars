// Return an array
function fizzbuzz(n) {
  finishedArr = [];
    for(let i=1;i<=n;i++) {
      if(i%3==0 && i%5 ===0) {
        finishedArr.push('FizzBuzz');
      } else {
        if(i%3==0) {
          finishedArr.push('Fizz');
        } else {
          if(i%5==0) {
            finishedArr.push('Buzz');
          } else {
            finishedArr.push(i);
          };
        };
      };
    };
    return finishedArr;
  };
  