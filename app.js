
// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}



function fromEuroToDollar(euros) {
    return euros*oneEuroIs.USD;
}
function fromDollarToYen(dollars) {
    return (dollars*oneEuroIs.JPY)/oneEuroIs.USD;
}
function fromYenToPound(yen) {
    return (yen*oneEuroIs.GBP)/oneEuroIs.JPY;
}

// Esta es mi función que suma dos números
function sum (a,b){
    return a + b
}


module.exports = {sum,fromEuroToDollar,fromDollarToYen,fromYenToPound};


