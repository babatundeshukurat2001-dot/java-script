//How to create an object

const user = {
  "firstName" : "Opeyemi",
  "lastName" : "Shukurat",
  "age" : 10,
 isFemale : true
};
   console.log(user)

//How to access in an object

console.log(user["firstName"] + " " + user.age)

//How to add

user.gender = "she male";
console.log(user)

//How to update

user.firstName = "Olamide";
console.log(user)

//How to delete

delete user.age
console.log(user)

//How to destruct
const {age,isValid} = user;
console.log(age)
console.log(isValid)






