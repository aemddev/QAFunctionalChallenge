import { Given, When, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { fixture } from '../../hooks/pageFixture'


Given('Click on dropdown', async () => {
  await fixture.page.locator('.product_sort_container').click()
})

When('Select {string}',async (value) => {
  await fixture.page.selectOption('.product_sort_container', value)
})

Then('The list should be sorted {string}', async (option) => {
  expect(await fixture.page.locator('.active_option').innerText()).toBe(option)
})