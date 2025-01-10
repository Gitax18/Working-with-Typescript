const carBrands: string[] = ["ford", "toyota", "kia"];

const cars: string[][] = [];

cars.push(["scross", "alto", "fortuner"]);
cars.push(["wagonr", "innova", "dzire"]);

console.table(carBrands);
console.log("------------------");
console.table(cars);
// cars.forEach((car) => console.table(car));

const dates: (Date | string)[] = [new Date()];
dates.push("2034/12/11");
