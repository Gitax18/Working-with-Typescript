function printNumbers(nums: number[]): void {
  for (let e of nums) console.log(e);
}

function printCharacters(strs: string[]): void {
  for (let e of strs) console.log(e);
}

// Reducing redundency with generic functinons
function printItems<T>(ele: T[]): void {
  for (let e of ele) console.log(e);
}

const itemss: string[] = ["a", "b", "c", "d"];
const itemsn: number[] = [1, 5, 3, 4, 5];

printItems<string>(itemss);
printItems<number>(itemsn);
