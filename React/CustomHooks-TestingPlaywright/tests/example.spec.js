// @ts-check
import { test, expect } from '@playwright/test';

const LOCALHOST_URL = 'http://localhost:5173/'

test('comprobar que muestre una frase e imagen randoms', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const text = page.getByRole('paragraph') // recupera <p>
  const image = page.getByRole('img') // recupera <img>

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  expect(textContent).toBeTruthy() // comprueba que no sea null
  expect(imageSrc).toBeTruthy()
});
