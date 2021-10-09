// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    return valueInEuro * oneEuroIs.USD;
}

// function fromDollarToYen
const fromDollarToYen = function(valueInDollar){
    return (valueInDollar / oneEuroIs.USD) * oneEuroIs.JPY;
}

// function fromYenToPound
const fromYenToPound = function (valueInYen){
    return (valueInYen / oneEuroIs.JPY) * oneEuroIs.GBP;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};