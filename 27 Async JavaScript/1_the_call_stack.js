const mutiply = (x,y) => x*y;


const square = x => mutiply(x,x);


const isRightTriangle = (a,b,c) => (
    square(a) + square(b) === square(c)
);

console.log(isRightTriangle(3,4,5));
console.log(isRightTriangle(8,9,10));
console.log(isRightTriangle(12,13,15));

