import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  firstName = () => this.page.getByPlaceholder('First Name');
  lastName = () => this.page.getByPlaceholder('Last Name');
  postalCode = () => this.page.getByPlaceholder('Zip/Postal Code');

  continueBtn = () =>
    this.page.getByRole('button', { name: 'Continue' });

  finishBtn = () =>
    this.page.getByRole('button', { name: 'Finish' });

  completeHeader = () =>
    this.page.locator('.complete-header');

  async fillCheckoutForm(data: any) {
    await this.firstName().fill(data.firstName);
    await this.lastName().fill(data.lastName);
    await this.postalCode().fill(data.postalCode);
    await this.continueBtn().click();
  }

  async finishOrder() {
    await this.finishBtn().click();
  }

  async verifyOrderComplete() {
    await expect(this.completeHeader()).toHaveText(/thank you/i);
  }
}