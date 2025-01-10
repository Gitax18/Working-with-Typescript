// create a function which accepts 2 number value, adds them, and return string format of result.
// Below is example of type annotation (in inference it will guess the type of output)
const add: (a: number, b: number) => string = (a, b) => String(a + b);

console.log(add(3, 7)); // returns '10' not 10.

// ANOTHER WAY
const sub = (a: number, b: number): string => String(a - b);

console.log(sub(8, 2));

// Using 'never' datatype as function return
// `never` is a special keyword, which is used for those functions which never returns any value (not even null or undefined), this is used with those functions which either throws error or perform infinite loop;

function throwError(message: string): never {
  throw new Error(message);
}

// const chkOutput = throwError("just check the result of function");
// execution will come here as it will throws the error in above function call;
// console.log(chkOutput);

// Annotating object values pass as argument.
const myself = {
  name: "Gitanshu",
  age: 20,
};

// annotating the values of the object.
function aboutMe(myself: { name: string; age: number }): void {
  console.log(`I am ${myself.name}, and I am ${myself.age} years old.`);
}
aboutMe(myself);

//annotating the values of the object along with de-structuring it.
function aboutMe2({ name, age }: { name: string; age: number }): void {
  console.log(`I am ${name}, and I am ${age} years old.`);
}
aboutMe2(myself);
