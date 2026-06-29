import { test, expect } from '@playwright/test';

test('Get Users API', async ({ request }) => {

  const response = await request.get(
    'https://reqres.in/api/users?page=2',
    {
      headers: {
        'x-api-key': 'reqres_78937f34eb3c4dc380c02ae979ea75f9'
      }
    }
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.page).toBe(2);
  expect(Array.isArray(body.data)).toBe(true);
  expect(body.data.length).toBeGreaterThan(0);
});