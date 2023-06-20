import { test, expect } from '@playwright/test';

test('local test', async ({ page, baseURL }) => {
  await page.goto('/');
  await expect(page).toHaveURL(baseURL as string);

  // Step 1 - Is Homepage working
  await expect(page.locator('h2').locator('text=精選專案')).toBeVisible();
  await expect(page.locator('h2').locator('text=募資進行中')).toBeVisible();
  await expect(page.locator('h2').locator('text=長期贊助')).toBeVisible();
});

test('has category title and 3 projects each', async ({ page }) => {
  await page.goto('https://rabbitfund-frontend.vercel.app/');

  // Expect a title "to contain" a substring.
  await expect(page.locator('h2').locator('text=精選專案')).toBeVisible();
  await expect(page.locator('h2').locator('text=募資進行中')).toBeVisible();
  await expect(page.locator('h2').locator('text=長期贊助')).toBeVisible();
  await expect(
    page
      .locator('section')
      .filter({
        hasText: '精選專案'
      })
      .nth(1)
  ).toBeVisible();
  await expect(
    page
      .locator('section')
      .filter({
        hasText: '精選專案'
      })
      .nth(1)
      .locator('li')
  ).toHaveCount(3);

  await expect(
    page
      .locator('section')
      .filter({
        hasText: '募資進行中'
      })
      .nth(1)
  ).toBeVisible();
  await expect(
    page
      .locator('section')
      .filter({
        hasText: '募資進行中'
      })
      .nth(1)
      .locator('li')
  ).toHaveCount(3);

  await expect(
    page
      .locator('section')
      .filter({
        hasText: '長期贊助'
      })
      .nth(1)
  ).toBeVisible();
  await expect(
    page
      .locator('section')
      .filter({
        hasText: '長期贊助'
      })
      .nth(1)
      .locator('li')
  ).toHaveCount(3);
});
