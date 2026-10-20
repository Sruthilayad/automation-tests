export class SauceDemoCartPage {
    constructor(page){
        this.page = page;
        this.addToCartButton = page.locator ('button#add-to-cart-sauce-labs-backpack').first();
        this.removeButton = page.locator('button#remove-sauce-labs-bike-light').first();
        this.cartBadge = page.locator('.shopping_cart_badge');
        this.checkoutButton = page.locator('button[name="checkout"]');
    }

    async addItem() {
        await this.addToCartButton.click();
        

    }

     async removeItem() {
        await this.removeButtonButton.click();
        

    }
     async goToCheckout() {
        await this.checkoutButton.click();
        

    }

}