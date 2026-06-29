import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { CONSTANTS } from '../utils/constants';

test('Purchase products successfully', async ({ page }) => {

  const login = new LoginPage(page);
  const products = new ProductsPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  // Login
  await login.open();
  await login.login(CONSTANTS.username, CONSTANTS.password);

  // Add product to cart
  await products.addBackpack();
  await products.addBikeLight();

  // Go to cart
  await products.goToCart();

  // Remove a product
  await products.removeProduct();

  // Checkout
  await cart.checkout();  

  // Enter customer details
  await checkout.enterDetails(
    CONSTANTS.firstName,
    CONSTANTS.lastName,
    CONSTANTS.postcode
  );

  // Finish purchase
  await checkout.finish();

  // Verify successful order
  await checkout.verifyOrder();

});
