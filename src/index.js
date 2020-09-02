// documentation
// http://marak.github.io/faker.js/#toc9__anchor
// https://momentjs.com/docs/

const faker = require('faker');
const moment = require('moment');

// configs
moment.locale('es');
faker.locale = 'es_MX';

const accounts = [];
for (let i = 0; i < 100; i++) {
    let name = faker.name.firstName();
    let lastName = faker.name.lastName();
    let email = `${name.toLowerCase()}.${lastName.toLowerCase()}.${faker.name.lastName().toLowerCase()}.${faker.random.number({min:1980, max:1990})}@hotmail.com`;
    let birthday = moment(faker.date.between('1980-01-01', '1990-01-01')).format('DD/MM/YYYY');
    accounts.push({
        name,
        lastName,
        email,
        birthday
    });
}
console.log(accounts);
