import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { CONSTANTS } from '../utils/constants';

test.describe('Purchase Flow - E2E', () => {

  test('User completes purchase journey successfully', async ({ page }) => {

    const login = new LoginPage(page);
    const products = new ProductsPage(page);
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);

    // 1. Login
    await login.open();
    await login.login(CONSTANTS.username, CONSTANTS.password);

    await expect(page).toHaveURL(/inventory.html/);

    // 2. Product selection
    await products.sortPriceLowToHigh();

    await products.addProductByName('Sauce Labs Backpack');
    await products.addProductByName('Sauce Labs Bike Light');

    await expect(page.locator('.shopping_cart_badge')).toHaveText('2');

    // 3. Go to cart
    await products.goToCart();

    await expect(page).toHaveURL(/cart.html/);

    // 4. Remove product
    await cart.removeProduct('Sauce Labs Bike Light');

    await expect(page.locator('.cart_item')).toHaveCount(1);

    // 5. Checkout
    await cart.checkout();

    // 6. Fill checkout details
    await checkout.fillCheckoutForm({
      firstName: CONSTANTS.firstName,
      lastName: CONSTANTS.lastName,
      postalCode: CONSTANTS.postcode
    });

    await expect(page).toHaveURL(/checkout-step-two/);

    // 7. Finish order
    await checkout.finishOrder();

    // 8. Verify order success
    await checkout.verifyOrderComplete();
  });

});