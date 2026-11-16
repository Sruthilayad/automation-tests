 const username ='standard_user';
 const password ='secret_sauce';

 const loginMessage = `Logging in as ${username}`;
 console.log(loginMessage);

 const add = (a,b) => a+b;
 console.log(add(1,2));

 function isValidUser(name) {
    return name.length > 0;
 }
 console.log(isValidUser(username));

 const isPositive = (n) => n>0;
 console.log (isPositive(3));

const productname = 'Backpack';
const price = '29.99'

function makeEmail(name) {
    return `${name}@test.com`; }
    console.log(makeEmail('Sruthilaya'));


const productdetails = `${productname} costs ${price}`;
console.log(productdetails);