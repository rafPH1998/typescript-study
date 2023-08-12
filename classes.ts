class User
{
    readonly firstName: string;
    readonly lastName: string;
    readonly age: number;

    constructor (firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

let user = new User('Rafael', 'Silva', 24)
console.log(user)