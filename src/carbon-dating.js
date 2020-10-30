const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof(sampleActivity)!=='string'||
  sampleActivity===''||
  sampleActivity===' '||
  sampleActivity===' \n\t\r'||
  isNaN(parseInt(sampleActivity))||
  parseFloat(sampleActivity)>15||
  parseFloat(sampleActivity)<1){
    return false;
}
else{
  sampleActivity = parseFloat(sampleActivity);
}
 return (Math.trunc(Math.ceil((Math.log(MODERN_ACTIVITY/sampleActivity)/(Math.log(2)/HALF_LIFE_PERIOD)))));
};