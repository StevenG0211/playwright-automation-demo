import { expect, type Locator, type Page } from '@playwright/test'
import constants from '../../data/constants.json'

class DemoCasinoConfirmationPage {
    readonly page: Page
    readonly confirmationMessage: Locator


    constructor(page: Page) {
        this.page = page
        this.confirmationMessage = page.locator("p").filter({ hasText: " Registration successfully finished! " })
    }
    /**
     * @function isConfirmationMessagePresent It makes an assertion to check whether the account creation message is present
     */
    async isConfirmationMessagePresent(): Promise<void> {
        await expect(this.confirmationMessage).toBeVisible({timeout:constants.timeoutConstants.implicitTimeout})
        expect(await this.confirmationMessage.innerText()).toContain(constants.testScripConstants.registrationCompleteText);
    }


}

export default DemoCasinoConfirmationPage;