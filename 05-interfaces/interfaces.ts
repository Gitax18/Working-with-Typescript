const aCar = {
  name: "wagonr",
  year: 2021,
  broken: true,
};

const bCar = {
  name: "dzire",
  year: new Date().toISOString(),
  broken: false,
};

const printVehicle = (vehicle: {
  // 😭 this type annotation is pain in the assssss.
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(
    `${vehicle.name} was built in year ${vehicle.year}, and it ${
      vehicle.broken ? "cannot" : "can"
    } run.`
  );
};

printVehicle(aCar);

// Solving that pain with the interface
interface Vehicle {
  name: string;
  year: number | string;
  broken: boolean;
  // Can include functions like: `showSummary():string;`
}

// same same but different (and easy, offcourse).
const printVehicleV2 = (vehicle: Vehicle): void => {
  console.log(
    `${vehicle.name} was built in year ${vehicle.year}, and it ${
      vehicle.broken ? "cannot" : "can"
    } run.`
  );
};

printVehicleV2(bCar);
