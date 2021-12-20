// objects
// object, array
// const person: {
//   name: string;
//   age: number;
// } = {
var person = {
    name: "Aleks",
    age: 38,
    hobbies: ["Sport", "Music"]
};
var favActivities;
favActivities = ["coffie", "salat"];
// let favActivities: any[];
// favActivities = ['coffie', 'salat', 1, false]
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toLocaleUpperCase());
}
