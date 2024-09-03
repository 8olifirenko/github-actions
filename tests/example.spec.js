import { test, expect } from '@playwright/test';

test('check navigation', async ({ page }) => {
  await page.goto('https://my-bike-six.vercel.app/');

  await expect(page.getByText('BIKE', { exact: true })).toBeVisible();
  await page.getByText('BIKE', { exact: true }).click();

  await expect(page.getByRole('heading', { name: 'Take the Streets' })).toBeVisible();
  await page.getByRole('heading', { name: 'Take the Streets' }).click();

  await expect(page.getByRole('img', { name: 'Phone Icon' })).toBeVisible();
  await page.getByRole('img', { name: 'Phone Icon' }).click();

  const bannerButton = page.getByRole('banner').getByRole('button');
  await expect(bannerButton).toBeVisible();
  await bannerButton.click();

  await expect(page.getByText('HomeAbout UsCompare')).toBeVisible();
  await page.getByText('HomeAbout UsCompare').click();

  await expect(bannerButton).toBeVisible();
  await bannerButton.click();
});


test('check contact us', async ({ page }) => {
  await page.goto('https://my-bike-six.vercel.app/');

  await expect(page.getByText('Contact us')).toBeVisible();
  await page.getByText('Contact us').click();

  const nameInput = page.getByPlaceholder('Name');
  await expect(nameInput).toBeVisible();
  await nameInput.click();

  const emailInput = page.getByPlaceholder('Email');
  await expect(emailInput).toBeVisible();
  await emailInput.click();

  const messageInput = page.getByPlaceholder('Message');
  await expect(messageInput).toBeVisible();
  await messageInput.click();

  const sendButton = page.getByRole('button', { name: 'Send' });
  await expect(sendButton).toBeVisible();
  await sendButton.click();
});