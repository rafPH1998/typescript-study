"use strict";
const getUser = (user) => {
    return `${user.firstName} ${user.lastName}, age: ${user.age}`;
};
let userObject = {
    firstName: "Rafael",
    lastName: "Belch",
    age: 24,
};
console.log(getUser(userObject));
