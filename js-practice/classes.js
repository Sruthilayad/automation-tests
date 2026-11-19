class LoginPage{
    constructor(username){
        this.username=username;

    }
    greet(){
        return `Hello,${this.username}`;
    }
    fillCredentials(password){
        return `${this.username}/${password}`;
    }
}
const page = new LoginPage('standard_user');
console.log(page.greet());
const page1 = new LoginPage('problem_user');
console.log(page1.greet());

class CartPage{
    constructor(){
        this.count =0;
    }
    addItem(){
        this.count = this.count + 1;
        return this.count;
    }
}
const cart = new CartPage();
console.log(cart.addItem());
console.log(cart.addItem());
console.log(cart.addItem());
console.log(cart.addItem());
