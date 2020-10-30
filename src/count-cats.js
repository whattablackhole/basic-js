const CustomError = require("../extensions/custom-error");
module.exports = function countCats(array) {
    let count=0;
    array.forEach(element => {
        element.map(function (item){
            if(item==='^^'){
                count+=1;
            }
        })
    });
    return count;
};

