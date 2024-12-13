// Importar la función sum del archivo app.js
const { fromEuroToDollar,sum,fromDollarToYen,fromYenToPound } = require('./app.js');



test("One euro should be 1.07 dollars", function() {
   
 
    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
});

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
 
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test('3.5 dollar to Yen = 511,9158878504673',() =>{


    // Use the function like its supposed to be used
    const dollars = fromDollarToYen(3.5);

    const expected = (3.5 * 156.5)/1.07; 
    
    expect(fromDollarToYen(3.5)).toBeCloseTo(511.9158878504673);
});

//"JPY": 156.5, // japan yen
//    "USD": 1.07, // us dollar
//    "GBP": 0.87,

test('3.5 Yen to Pounds = 0,0194568690095847',() =>{


    // Use the function like its supposed to be used
    const dollars = fromYenToPound(3.5);

    const expected = (3.5 * 0.87)/156.5; 
    
    expect(fromYenToPound(3.5)).toBeCloseTo(0.0194568690095847);
});
