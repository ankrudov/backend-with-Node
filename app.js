const rectangle = require('./rectangle');

rect = require('./rectangle');

function solveRect(l,w){
    console.log(`solving for rectangle with dimensions: ${l}, ${w}`);

    rect(l,w, (err,rectangle)=>{
        if(err){
            console.log('ERROR: ', err.message)
        }else{
            console.log(`Area of the rectangle: ${rectangle.area()}`);
            console.log(`Perimeter of recatangle is: ${rectangle.perimeter()}`);
        }
    })
}

solveRect(2,4);
solveRect(4,7);
solveRect(9,7);