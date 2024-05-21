import { expect, type Locator, type Page } from '@playwright/test'
import constants from '../../data/constants.json';

class DemoCasinoSignInPage {

    readonly page: Page
    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly signInButton: Locator
    readonly usernameErrorMessage: Locator

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('[data-test="input-username"]');
        this.passwordInput = page.locator('[data-test="input-password"]');
        this.signInButton = page.locator('[data-test="control-submit"]');
        this.usernameErrorMessage = page.locator('[data-test="error-username"]');
    }

    /**
     * @function typeOnUsernameInput It types on the username Input
     * @param username username to type
     */
    async typeOnUsernameInput(username: string): Promise<void> {
        await this.usernameInput.fill(username);
    }

    /**
     * @function typeOnPasswordInput It types on the Password Input
     * @param password the password value to type 
     */
    async typeOnPasswordInput(password: string): Promise<void> {
        await this.passwordInput.fill(password);
    }

    /**
     * @function clickOnSignInButton It clicks on the Sign In Button
     */
    async clickOnSignInButton(): Promise<void> {
        await this.signInButton.click();
    }

    /**
     * @function isErrorUsernamePresent It makes an assertion to check whether the username error is present 
     */
    async isErrorUsernamePresent(): Promise<void> {
        await expect(this.usernameErrorMessage).toBeVisible({ timeout: constants.timeoutConstants.implicitTimeout })
    }

}

export default DemoCasinoSignInPage