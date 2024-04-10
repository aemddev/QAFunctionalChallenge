import { Given, When, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { fixture } from '../../hooks/pageFixture'

Given('User navigates to the application', async () => {
  await fixture.page.goto('https://www.saucedemo.com/')
})

Given('User enter the username as {string}', async (username) => {
  await fixture.page.getByRole('textbox', { name: 'Username'}).fill(username)
})

Given('User enter the password as {string}', async (password) => {
  await fixture.page.getByRole('textbox', { name: 'Password'}).fill(password)
})

When('User click on the login button', async () => {
  await fixture.page.getByRole('button', {name: 'Login'}).click()
})

Then('User should logged in successfully', async () => {
  const pageContent = fixture.page.locator('[data-test="inventory-list"]')
  await expect(pageContent).toBeVisible()
})
