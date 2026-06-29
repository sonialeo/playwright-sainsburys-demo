import { Page } from '@playwright/test';

export class Helpers {

    static async waitForLoading(page: Page) {

        await page.waitForLoadState('networkidle');

    }

    static generateRandomEmail() {

        return `user${Date.now()}@test.com`;

    }

}