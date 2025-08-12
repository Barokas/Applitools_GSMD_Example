import { test, expect, eyes } from '@applitools/eyes-playwright/fixture';

// URL for the Esure Group contact page
const GSMD_URL = 'https://www.gsmd.ac.uk/';

test.describe('GSMD', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(GSMD_URL);
    await page.locator('#ccc-notify-accept').click({ timeout: 2000 }).catch(() => {
      // Element not found or not clickable, continue without failing
    });
    

  });

  test('Hope Page without Popup ', async ({ page, eyes }) => { 
    await eyes.check('full page', {
    fully: true,
    target: 'window',
    lazyLoad: { scrollLength: 1500, waitingTime: 750, maxAmountToScroll: 5000 },
  });

  });

  test('Hope Page without Popup Whats On', async ({ page, eyes }) => { 
    await page.goto("https://www.gsmd.ac.uk/whats-on");
    await page.fill('#search-1', 'decentred');
    await page.locator('button[type=submit]').click({ timeout: 2000 }).catch(() => {
      // Element not found or not clickable, continue without failing
    });
    

    await eyes.check('Filtered Search', {
    fully: true,
    target: 'window',
    lazyLoad: { scrollLength: 500, waitingTime: 2000, maxAmountToScroll: 5000 },
  });

  });
  
});