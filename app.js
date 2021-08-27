rect = {
    perimeter: (x,y)=> 2 * (x+y),
    area: (x,y)=> x*y
};

function solveRect(l,w){
    console.log(`solving for rectangle with dimensions: ${l}, ${w}`);

    if (l <=0 || w<= 0){
        console.log(`Rectangle dimensions must be greater than 0. Received: ${l}, ${w}`);
    }else{
        console.log(`Area of the rectangle: ${rect.area(l,w)}`);
        console.log(`Perimeter of recatangle is: ${rect.perimeter(l,w)}`);

    }
}

solveRect(2,4);
solveRect(4,7);
solveRect(9,7);