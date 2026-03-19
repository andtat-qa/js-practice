// Person object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

// Add a new email property
person.email = "john.doe@example.com";

// Remove the age property
delete person.age;

// Output
console.log(person);