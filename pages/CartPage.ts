import { Page, expect } from '@playwright/test';

export class CartPage{

constructor(private page:Page){}

async checkout(){

await this.page.locator('#checkout').click();

}

async removeProduct() {
    await this.page.locator('.cart_button').first().click();
  }

}