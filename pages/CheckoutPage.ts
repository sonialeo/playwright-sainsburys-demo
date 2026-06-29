import { Page, expect } from '@playwright/test';

export class CheckoutPage {

  constructor(private page: Page) {}

  async enterDetails(firstName: string, lastName: string, postcode: string) {
    await this.page.fill('#first-name', firstName);
    await this.page.fill('#last-name', lastName);
    await this.page.fill('#postal-code', postcode);

    await this.page.locator('#continue').click();
  }

  async finish() {
    await this.page.locator('#finish').click();
  }

  async verifyOrder() {
    await expect(this.page.locator('.complete-header'))
      .toHaveText('Thank you for your order!');
  }
}