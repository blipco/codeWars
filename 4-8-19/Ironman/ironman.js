function iTri(s){
  if(s==0) {
    return "Starting Line... Good Luck!";
  }else {
     if(s<=2.4){
       return {"Swim":`${(140.6-s).toFixed(2)} to go!`};
     }else {
       if(s<=114.4){
         return {"Bike":`${(140.6-s).toFixed(2)} to go!`};
       }else {
         if(s<=130.6){
           return {"Run":`${(140.6-s).toFixed(2)} to go!`};
         }else {
           if(s<140.6){
             return {"Run":"Nearly there!"};
           } else {
             return "You're done! Stop running!";
           }
         }
       }
     }
   }
};
