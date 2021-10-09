// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    return valueInEuro * 1.2;
}

// function fromDollarToYen
const fromDollarToYen = function(valueInEuro){
    return (valueInEuro / 1.2) * 127.9;
}

// function fromYenToPound
const fromYenToPound = function (valueInEuro){
    return (valueInEuro / 127.9) * 0.8;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};