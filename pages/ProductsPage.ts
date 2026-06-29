import { Page, expect } from '@playwright/test';

export class ProductsPage{

constructor(private page:Page){}

async addBackpack(){

await this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

}

async addBikeLight(){
    await this.page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
}

async removeProduct(){
await this.page.locator('[data-test="remove-sauce-labs-bike-light"]').click();
}

async cancelProduct(){
await this.page.locator('[data-test="cancel"]').click();
}

async goToCart(){

await this.page.locator('.shopping_cart_link').click();

}

}