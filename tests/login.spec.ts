import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Valid Login', async ({ page }) => {

  const login = new LoginPage(page);

  await login.open();

  await login.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory.html/);
  await expect(page.locator('.inventory_list')).toBeVisible();
});