import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  cartItem = (name: string) =>
    this.page.getByText(name);

  removeBtn = (name: string) =>
    this.page.locator(`//div[text()="${name}"]/ancestor::div[@class="cart_item"]//button`);

  checkoutBtn = () =>
    this.page.getByRole('button', { name: 'Checkout' });

  async verifyItem(name: string) {
    await expect(this.cartItem(name)).toBeVisible();
  }

  async removeProduct(name: string) {
    await this.removeBtn(name).click();
  }

  async checkout() {
    await this.checkoutBtn().click();
  }
}