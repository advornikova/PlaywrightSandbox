import {test, expect} from '@playwright/test';

test('Demo Login Test 1', async({page}) => {

    await page.goto('https://demo.applitools.com/');
    await page.locator('#username').fill('TestUser');
    await page.locator('#password').fill('Pa55word');
    await page.locator('#log-in').click();
    await page.locator('text=ACME').isVisible();

});