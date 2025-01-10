const user = {
  name: "Gitanshu",
  age: 20,
  coords: {
    lat: 20.0948,
    lng: 16.9873,
  },
};

// de-struct object with proper annotation
const { age }: { age: number } = user;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = user;

console.log(age);
console.log(lat, lng);
