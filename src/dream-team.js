 const CustomError = require("../extensions/custom-error");
 module.exports = function createDreamTeam(a) {
  if (!(Array.isArray(a))){
    return false
  }
  else {
    let EmptyArray = []
    a.forEach(element => {
      if(typeof element === 'string' && element !==''){
        
        EmptyArray.push(element.trim()[0].toUpperCase())
      }
     
    })
    return EmptyArray.sort().join('')
  }

}
// let d = [1,2,3]
// let a = ['Hel', 'hui'];
// console.log(createDreamTeam(a))

// let g = ['Peter', 'Adam', 'Gary', 'Bobby', 'Philip', 'Andrea', 'Evelyn', 'Evelyn', 'Kimberly', 'Denise'];

// console.log(createDreamTeam(g))

