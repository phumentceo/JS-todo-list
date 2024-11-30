var fruits = ["Apple","Orange","Banana"];

console.log(fruits);
console.log("Size of Array : "+ fruits.length)
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

console.log("-----------Array with foreach-----------");

fruits.forEach((item) => {
    return console.log(item);
});

fruits.forEach(item => console.log(item));


fruits.forEach(item => (
    console.log(item)
));