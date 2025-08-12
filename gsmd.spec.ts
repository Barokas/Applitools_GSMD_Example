import { test, expect } from '@applitools/eyes-playwright/fixture';

const GSMD_URL = 'https://www.gsmd.ac.uk/';

test.describe('Guildhall School of Music & Drama Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(GSMD_URL);
  });

  test('Header and main navigation are visible', async ({ page }) => {
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.locator('a[aria-label*="Guildhall"], a[title*="Guildhall"]')).toBeVisible();
    await expect(page.locator('a:has-text("Study")')).toBeVisible();
    await expect(page.locator('a:has-text("About")')).toBeVisible();
    await expect(page.locator('a:has-text("Events")')).toBeVisible();
    await expect(page.locator('a:has-text("Research")')).toBeVisible();
    await expect(page.locator('a:has-text("Alumni")')).toBeVisible();
  });

  test('Hero/banner section is visible', async ({ page }) => {
    const hero = page.locator('section[role="banner"], .hero, .homepage-hero');
    await expect(hero).toBeVisible();
  });

  test('Search functionality is present', async ({ page }) => {
    const search = page.locator('input[type="search"], [aria-label*="search"]');
    await expect(search).toBeVisible();
  });

  test('Featured news or events section is visible', async ({ page }) => {
    const news = page.locator('section:has-text("News"), .news, [data-testid="news"]');
    const events = page.locator('section:has-text("Events"), .events, [data-testid="events"]');
    await expect(news.or(events)).toBeVisible();
  });

  test('Footer is visible and contains links', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    await expect(footer.locator('a')).toHaveCountGreaterThan(0);
    await expect(footer).toContainText('Guildhall School of Music & Drama');
  });

  test('Contact and accessibility links are present', async ({ page }) => {
    await expect(page.locator('a:has-text("Contact")')).toBeVisible();
    await expect(page.locator('a:has-text("Accessibility")')).toBeVisible();
    await expect(page.locator('a:has-text("Privacy")')).toBeVisible();
  });

  test('Social media links are present in the footer', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer.locator('a[href*="twitter"], a[href*="facebook"], a[href*="instagram"], a[href*="youtube"]')).toBeVisible();
  });
});