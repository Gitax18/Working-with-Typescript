/** STRATEGY TO MAKE REUSABLE CODE:
 *
 * Create funcitons that accept arguments that are typed with interfaces.
 *
 * Objects/Classes can decide to 'implement' a given interfcae to work with a function.
 */

interface Summarizables {
  getSummary(): void;
}

const car = {
  cname: "lambo",
  owner: "gitanshu",
  maxSpeed: 380,
  getSummary: function () {
    console.log(`${this.cname} is owns by ${this.owner}`);
  },
};

const apples = {
  batchId: 120054,
  origin: "kashmir",
  destination: "jodhpur",
  expiry: new Date(Date.now() + 3 * 86400000), // date 3 days away from today
  getSummary: function () {
    console.log(
      `Apples with batchId ${
        this.batchId
      } will expire on ${this.expiry.getDate()}`
    );
  },
};

const printSummary = (item: Summarizables): void => {
  item.getSummary();
};

printSummary(car);
printSummary(apples);
