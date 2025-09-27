import { test, expect } from '@playwright/test';

test('Test 1', async ({ page }) => {
  
  console.log("Starting Test 1 ");
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
   await page.locator('//input[@name="username"]').fill("Admin");
   await page.locator('//input[@name="password"]').fill("admin123");
  await page.waitForTimeout(2000);
  await page.locator('//button[@type="submit"]').click()
   await page.waitForTimeout(2000);
  console.log("Ending Test 1 ");});

test('Test 2', async ({ page }) => {
  
  console.log("Starting Test 2 ");
  await page.waitForTimeout(2000);
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  await page.locator('//input[@name="username"]').fill("Admin");
   await page.locator('//input[@name="password"]').fill("admin123");
  await page.waitForTimeout(2000);
  await page.locator('//button[@type="submit"]').click()
   await page.waitForTimeout(2000);
  console.log("Ending Test 2 ");
});

  test('Test 3 @Dev', async ({ page }) => {
    
    console.log("Starting Test 3 ");
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator('//input[@name="username"]').fill("Admin");
    await page.locator('//input[@name="password"]').fill("admin123");
    await page.waitForTimeout(2000);
    await page.locator('//button[@type="submit"]').click()
    await page.waitForTimeout(2000);
    console.log("Ending Test 3 ");
  });