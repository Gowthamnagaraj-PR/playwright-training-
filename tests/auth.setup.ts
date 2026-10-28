import { test as setup, expect } from '@playwright/test'
import { LoginPage } from '../pages/login'

setup('Login setup flow', async ({ page }) => {
  const login = new LoginPage(page);
  await login.navigateToUrl((process.env.BASE_URL || 'https://conduit.bondaracademy.com') + '/login');
  await login.authenticateUser({ username: process.env.USEREMAIL || 'gowthamm@presidio.com', password: process.env.PASSWORD || 'Savitar@12' })
  await expect(page.getByRole('link', { name: 'New Article' })).toBeVisible()
  await page.context().storageState({ path: 'auth/userdata.json' })
})