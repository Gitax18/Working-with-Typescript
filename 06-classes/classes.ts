class Vehicle {
  /*color: string;
  constructor(color: string){
    this.color = color;
  }*/

  // this is equavalent to above code, it will initialise the first parameter to the first argument, with the same name.
  constructor(public color: string) {}

  protected drive(): void {
    console.log("moving.......");
  }

  protected honk(): void {
    console.log("beep beep.....");
  }
}

class Car extends Vehicle {
  constructor(public brand: string, color: string) {
    super(color);
  }

  private describe(): void {
    console.log("Initiating " + this.color + " " + this.brand);
  }

  public startCar(): void {
    this.describe();
    this.honk();
    this.drive();
  }
}

const myVehi: Car = new Car("bmw", "red");
myVehi.startCar();
