import { expect, type Locator, type Page } from '@playwright/test';
import constants from '../../data/constants.json'

class DemoCasinoHomePage {

    readonly page: Page
    readonly closeInitialPopupButton: Locator
    readonly homePageSignUpButton: Locator
    readonly homePageRoute: string
    readonly signInPopupButton: Locator
    readonly signInButton: Locator
    readonly profileArrowButton: Locator
    readonly profileSettingsButton: Locator
    readonly userInformationWrapper: Locator

    constructor(page: Page) {
        this.page = page
        this.closeInitialPopupButton = page.getByRole('button', { name: '×' });
        this.homePageSignUpButton = page.locator('a[data-test="nav-reg-head"]');
        this.signInPopupButton = page.locator('div').filter({ hasText: /^Sign in$/ });
        this.signInButton = page.locator('[data-test="nav-login-head"]');
        this.profileArrowButton = page.locator('.icon-arrow-filled').first();
        this.profileSettingsButton = page.locator('[data-test="nav-reg-head"]');
        this.userInformationWrapper = page.locator('div.user-info__wrapper')
        this.homePageRoute = "/"
    }

    /**
     * @function navigateToDemoCasino It opens the Demo casino URL
     */
    async navigateToDemoCasino(): Promise<void> {
        await this.page.goto(this.homePageRoute);
    }

    /**
     * @function clickOnInitialPopupButton It closes the initial pop up button
     */
    async clickOnInitialPopupButton(): Promise<void> {
        await this.closeInitialPopupButton.click();
    }

    /**
     * @function isUserInfoWrapperPresent It makes an assertion to check whether the user info
     *  wrapper is present
     */
    async isUserInfoWrapperPresent(): Promise<void> {
        await expect(this.userInformationWrapper).toBeVisible({ timeout: 30000 })
    }

    /**
     * @function isUserNavigatedToHomePage It checks the navigated URL was the home page one - makes an assertion
     */
    async isUserNavigatedToHomePage(): Promise<void> {
        expect(this.page.url()).toEqual(constants.testScripConstants.demoCasinoURL);
    }

    /**
     * @function clickOnSignUpButton It clicks on the sign up button
     */
    async clickOnSignUpButton(): Promise<void> {
        await this.homePageSignUpButton.click();
    }

    /**
     * @function clickOnSignInPopupButton It clicks on the SignIn pop up button
     */
    async clickOnSignInPopupButton(): Promise<void> {
        await this.signInPopupButton.click();
    }

    /**
     * @function clickOnSignInButton It clicks on the Sign In button
     */
    async clickOnSignInButton(): Promise<void> {
        await this.signInButton.click();
    }

    /**
     * @function clickOnProfileArrowButton It clicks on the Profile Arrow button
     */
    async clickOnProfileArrowButton(): Promise<void> {
        await this.profileArrowButton.click();
    }

    /**
     * @function clickOnProfileSettingsButton It clicks on the Profile settings button
     */
    async clickOnProfileSettingsButton(): Promise<void> {
        await this.profileSettingsButton.click();
    }

}

export default DemoCasinoHomePage