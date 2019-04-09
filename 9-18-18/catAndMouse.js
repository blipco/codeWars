function catMouse(x){
  let cat = x.indexOf('C');
  let mouse = x.indexOf('m');
  if((cat-mouse)>= -4) {
    return 'Caught!'
  } else { 
      return 'Escaped!'
    };
};
