const {sum} = require('./app.js');
const {fromEuroToDollar} =require('./app.js');
const {fromDollarToYen} = require('./app.js');
const {fromYenToPound} = require('./app.js');
test('adds 14 + 9 equal to 23', ()=>{
    let total = sum(14,9);
    expect(total).toBe(23);
})
test("One euro should be 1.206 dollars", ()=>{  
    const euro = fromEuroToDollar(1)
    expect(euro).toBe(1.2);
})
test("One dolar should be 106.58 yen", ()=>{
    
    const dollars = fromDollarToYen(1);
    const expected = 1/1.2*127.9;
    expect(dollars).toBe(expected);
})
test("One Yen shoud be 0.006 Pounds", ()=>{
    
    const yen = fromYenToPound(1);
    const expected = 1/127.9*0.8;
    expect(yen).toBe(expected);
})
