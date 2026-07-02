import { Page, expect } from '@playwright/test';

export class ProductsPage {
  constructor(private page: Page) {}

  productTitle = (name: string) =>
    this.page.getByText(name);

  addToCartBtn = (name: string) =>
    this.page.locator(`//div[text()="${name}"]/ancestor::div[@class="inventory_item"]//button`);

  cartIcon = () =>
    this.page.locator('.shopping_cart_link');

  async verifyProductVisible(name: string) {
    await expect(this.productTitle(name)).toBeVisible();
  }

  async sortPriceLowToHigh() {
    await this.page.locator('.product_sort_container').selectOption('lohi');
  }

  async addProductByName(name: string) {
    await this.addToCartBtn(name).click();
  }

  async goToCart() {
    await this.cartIcon().click();
  }
}