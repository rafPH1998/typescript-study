interface UserInterface
{
    firstName: string;
    lastName: string;
    age: number;
}


const getUser = (user: UserInterface): string => {
    return `${user.firstName} ${user.lastName}, age: ${user.age}`
}

let userObject = {
    firstName: "Rafael",
    lastName: "Belch",
    age: 24,
}

console.log(getUser(userObject))