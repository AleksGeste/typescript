// objects
// object, array

// const person: {
//   name: string;
//   age: number;
// } = {
const person = {
  name: "Aleks",
  age: 38,
  hobbies: ["Sport", "Music"],
};

let favActivities: string[];
favActivities = ["coffie", "salat"];
// let favActivities: any[];
// favActivities = ['coffie', 'salat', 1, false]

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toLocaleUpperCase());
}
