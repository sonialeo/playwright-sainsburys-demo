import { Page } from '@playwright/test';

export class Helpers {

  // safer wait strategy
  static async waitForPageStable(page: Page) {
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(500);
  }

  static async waitForElement(page: Page, selector: string) {
    await page.locator(selector).waitFor({ state: 'visible' });
  }

  static generateRandomEmail(): string {
    return `user_${Date.now()}@test.com`;
  }
}