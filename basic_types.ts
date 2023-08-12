//numbers
let value = 123

//booleans
let active: boolean
active = true

//string

let firstName = 'Rafael'
let lastName = 'Silva'
let fullName: string = `Nome completo é: ${firstName} ${lastName}`

// enums
enum ROLES {
    ADMIN = 'admin',
    DEVELOPER = 'desenvolvedor',
    CTO = 'cto',
};

//arrays
let names = ['Rafael', 'Rodrigo', 'Felipe'] // apadrao
let names1: string[] = ['Rafael', 'Rodrigo'] //esta definido que dentro do array só aceitara strings
let names2: Array<string> = ['Rafael', 'Rodrigo'] // segundo jeito de fazer para array só aceitar strings
let name3: Array<any> = ['Rafael', 'Rodrigo', true, 0] // rray sem restrição

