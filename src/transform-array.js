const CustomError = require("../extensions/custom-error");

module.exports = function change(arr) {
  let newArray = []
  function transform(arr){
  if (!(Array.isArray(arr))){
      throw "Error";
  }
   newArray = [...arr]
  newArray.forEach((item,ind)=>{
  if (item === '--double-prev'&&ind!==0){
       newArray.splice(ind, 1 , newArray[ind-1]); 
     
  }
  else if (item === '--double-prev'&&ind===0){
      newArray.splice(ind, 1 );
    
  }
 if (item ==='--double-next'&&ind!==arr.length-1) {
  newArray.splice(ind+1, 0 , newArray[ind+1]); 
  newArray.splice(ind, 1 );
 
 }
 else if(item ==='--double-next'&&ind===arr.length-1){
  newArray.splice(ind, 1 );
 
 }
 if (item ==='--discard-next'&&ind!==arr.length-1) {
  newArray.splice(ind, 2 );
 
 }
 else if(item ==='--discard-next'&&ind===arr.length-1){
  newArray.splice(ind, 1 );

 }
 if (item ==='--discard-prev'&&ind!==0) {
  newArray.splice(ind-1, 2 );
 
 }
 else if (item ==='--discard-prev'&&ind===0){
  newArray.splice(ind, 1 );
 
 }
  
 
})
  }
  transform(arr)
return newArray;
};