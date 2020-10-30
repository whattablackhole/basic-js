
const CustomError = require("../extensions/custom-error");
module.exports = function getSeason(a) {
  if(a===null){
    throw ('THROWN')
}
  if (Object.prototype.toString.call(a) === "[object Date]") {
    if (isNaN(a.getTime())) {  
      return 'Unable to determine the time of year!';
    } else {
      month = a.getMonth();
    console.log(month)
    season = 'a';
    switch(month) {
        case 11:
        case 0:
        case 1:
            season = 'winter';
        break;
        case 2:
        case 3:
        case 4:
            season = 'spring';
        break;
        case 5:
        case 6:
        case 7:
            season = 'summer';
        break;
        case 8:
        case 9: 
        case 10:
            season = 'fall';
        break;
    }
    return season
    }
  } else {
    return 'Unable to determine the time of year!';
  }
    
}

