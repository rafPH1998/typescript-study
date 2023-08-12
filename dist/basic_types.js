"use strict";
//numbers
let value = 123;
//booleans
let active;
active = true;
//string
let firstName = 'Rafael';
let lastName = 'Silva';
let fullName = `Nome completo é: ${firstName} ${lastName}`;
console.log(fullName);
// enums
var ROLES;
(function (ROLES) {
    ROLES["ADMIN"] = "admin";
    ROLES["DEVELOPER"] = "desenvolvedor";
    ROLES["CTO"] = "cto";
})(ROLES || (ROLES = {}));
;
//arrays
let names = ['Rafael', 'Rodrigo', 'Felipe']; // apadrao
let names1 = ['Rafael', 'Rodrigo']; //esta definido que dentro do array só aceitara strings
let names2 = ['Rafael', 'Rodrigo']; // segundo jeito de fazer para array só aceitar strings
let name3 = ['Rafael', 'Rodrigo', true, 0]; // rray sem restrição
