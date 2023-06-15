const sum = (a,b) => {
    return a+b;
}
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
function fromDollarToYen (dollar){
    return dollar/oneEuroIs.USD*oneEuroIs.JPY;
}
function fromEuroToDollar(euro){
    return euro*oneEuroIs.USD;
}
function fromYenToPound(yen){
    return yen/oneEuroIs.JPY*oneEuroIs.GBP;
}
module.exports= {sum,fromEuroToDollar};