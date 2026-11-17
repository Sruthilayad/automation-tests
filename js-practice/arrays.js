const  prices = [9.99,29.99,15.5,49.0];

const doubled = prices.map(p => p*2);
console.log(doubled);

const expensive = prices.filter(p => p>20);
console.log(expensive);

const products = [
    {name:'Backpack',price:29.99},
    {name:'BikeLight',price:9.99},
];
const bike = products.find(p => p.name ==='BikeLight');
console.log(bike);

const total = prices.reduce((sum,p) =>sum+p,0);
console.log(total.toFixed(2));

const names = ['standard_User','problem_User'];

const newnames =names.map(n => n.toUpperCase());
console.log(newnames);

const amount = prices.filter(p => p<20);
console.log(amount);

const bag = products.find(p =>p.name ==='Backpack');
console.log(bag);

const totals = products.reduce((sum,p) =>sum+p.price,0);
console.log(totals.toFixed(2));