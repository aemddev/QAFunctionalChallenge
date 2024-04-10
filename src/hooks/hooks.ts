import { chromium } from "@playwright/test"
import { Before, After } from "@cucumber/cucumber";
import { fixture } from "./pageFixture";


Before(async () => {
    const browser = await chromium.launch({ headless: true })
    const context = await browser.newContext()
    const page = await context.newPage();
    fixture.page = page
})

After(async () => {
    await fixture.page.close()
})
