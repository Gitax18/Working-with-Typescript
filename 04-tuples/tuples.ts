// tuples : array like structure where each element represents some property of a record.
/**Example: Object represents a drink:
 * {
 *  color : "brown",
 *  carbonated: true,
 *  sugar: 50
 * }
 *
 * An tuple for above will look like this:
 * ["brown", true, 50];
 *
 * As a devloper we have to memorised that what index value represents what property of the object.
 *
 */

const myDrink = {
  color: "green",
  carbonated: false,
  sugar: 30,
};

// Now let make an tuple which also indicate a type of drink

const thumbsUp = ["brown", true, 50];
// But it has a problem, look below:
thumbsUp[0] = 40;
thumbsUp[2] = "brown";
// Now, the order has changed, but it should be immutable.

// Creating actual tuple
const pepsi: [string, boolean, number] = ["brown", true, 40];
// pepsi[0] = true; // Not allowd

// It would be headache to create multiple tuples, as we have write that long 'type annotation' everytime.
// To deal with it we can create a type alias.
type Drink = [string, boolean, number];

const sprite: Drink = ["transparent", true, 50];
const coffee: Drink = ["black", false, 0];

// **NOT VERY USEFUL IN REAL WORLD SITUATION**
