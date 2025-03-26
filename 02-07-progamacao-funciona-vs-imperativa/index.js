var person = {
  age: 14,
  name: "William",
};

//função pura
function getRemainingYearsToMajority(person) {
  return 18 - person.age;
}
function increasePersonAge(person) {
 person.age = person.age + 1;
}
increasePersonAge(person);
//função impura

var remaningYears = getRemainingYearsToMajority(person);
console.log(remaningYears);
