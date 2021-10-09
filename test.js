// import the function sum from the app.js file
const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});


test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its supposed to be used
    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)

    const expected = 3.5 * 1.2;
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2);
})

test("One dollar should be ___ yens", function(){
    const { fromDollarToYen } = require('./app.js'); 
    const expected = (3.5 / 1.2) * 127.9;
     expect(fromDollarToYen(3.5)).toBe(expected); 
})

test("One yen should be __ pounds", function(){
    const { fromYenToPound } = require('./app.js');
    const expected = (3.5 / 127.9) * 0.8;
    expect(fromYenToPound(3.5)).toBe(expected);
})