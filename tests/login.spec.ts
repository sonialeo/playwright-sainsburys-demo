import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CONSTANTS } from '../utils/constants';

test('Valid Login', async ({ page }) => {

  const login = new LoginPage(page);

  await login.open();

  await login.login(
    CONSTANTS.username,
    CONSTANTS.password
  );

  await expect(page).toHaveURL(/inventory.html/);
  await expect(page.locator('.inventory_list')).toBeVisible();
});