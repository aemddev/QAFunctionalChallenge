import { Given, When, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { fixture } from '../../hooks/pageFixture'

Given('User click on checkout', async () => {
    await fixture.page.getByRole('button' , { name: 'Checkout' }).click()
});

Given('User fill first name with {string}', async (firstName) => {
    await fixture.page.getByRole('textbox', { name: 'First Name' }).fill(firstName)
});

Given('User fill last name with {string}', async (lastName) => {
    await fixture.page.getByRole('textbox', { name: 'Last Name' }).fill(lastName)

});

Given('User fill Postal code with {string}', async (postalCode) => {
    await fixture.page.getByRole('textbox', { name: 'Zip/Postal Code' }).fill(postalCode)

});

Given('User click on continue', async () => {
    await fixture.page.getByRole('button' , { name: 'continue' }).click()

});

When('User click on finish', async () => {
    await fixture.page.getByRole('button' , { name: 'finish' }).click()

});

Then('Should display a success message', async () => {
    await expect(fixture.page.locator('#checkout_complete_container')).toBeVisible()
});