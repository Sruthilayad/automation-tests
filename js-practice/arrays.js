const prices = [10,30,15];

const doubled = prices.map(p => p*2);
console.log(doubled);

const expense =  prices.filter(p => p>20);
console.log(expense);

const total = prices.reduce((sum,p) => sum+p,0);
console.log(total);
