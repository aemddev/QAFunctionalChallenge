import { Given, When, Then } from '@cucumber/cucumber'
import { expect, Locator } from '@playwright/test'
import { fixture } from '../../hooks/pageFixture'

let productChoice: Locator

Given('User choice the product', async () => {
  productChoice = fixture.page.locator('.inventory_item').first()
})

Given('User click on Add to cart', async () => {
  await productChoice.getByRole('button', { name: 'Add to cart'}).click()
})

When('User click on the cart icon', async () => {
  await fixture.page.locator('#shopping_cart_container').click()
})


Then('The product should be in your cart', async () => {
  const pageContent = fixture.page.locator('[data-test="inventory-item"]')
  await expect(pageContent).toBeVisible()
})
