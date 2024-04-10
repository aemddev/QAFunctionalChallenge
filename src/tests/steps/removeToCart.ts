import { When, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { fixture } from '../../hooks/pageFixture'


When('User click on the remove button', async () => {
  await fixture.page.getByRole('button', { name: 'remove'}).click()
})

Then('The product should be remove from your cart', async () => {
  const pageContent = fixture.page.locator('[data-test="inventory-item"]')
  await expect(pageContent).toBeHidden()
})
