function encrypt(text, n) {
  let splitText = text.split("");
  if(n> 0) {
    while(n>0) {
      let encrypted = [];
      for(let i=1;i<splitText.length;i+=2) {
        encrypted.push(splitText[i]);
      };
      for(let i=0;i<splitText.length;i+=2) {
        encrypted.push(splitText[i]);
      };
      splitText = encrypted;
      n--;
    }; 
    return splitText.join("");
  } else {return text};
};
