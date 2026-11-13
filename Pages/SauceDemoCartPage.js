export class SauceDemoCartPage {
    constructor(page){
        this.page = page;
        this.addToCartButton = page.locator ('button#add-to-cart-sauce-labs-backpack').first();
        this.removeButton = page.locator('button#remove-sauce-labs-bike-light').first();
        this.cartBadge = page.locator('.shopping_cart_badge');
        this.checkoutButton = page.locator('button[name="checkout"]');
        this.firstNameInp = page.locator('input[name="firstName"]');
        this.lastNameInp = page.locator('input[name="lastName"]');
        this.postalcodeInp = page.locator('input[name="postalCode"]');
        this.contButton = page.locator('input[name="continue"]');

    }

    async addItem() {
        await this.addToCartButton.click();
        

    }

     async removeItem() {
        await this.removeButton.click();
        

    }
     async goToCheckout() {
        await this.checkoutButton.click();
    }

       async fillCheckoutInfo(firstName,lastName,postalCode) {
        await this.firstNameInp.fill(firstName);
        await this.lastNameInp.fill(lastName);
        await this.postalcodeInp.fill(postalCode);
        await this.contButton.click();
    }


}