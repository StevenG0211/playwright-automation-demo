import { expect, type Locator, type Page } from '@playwright/test';
import randomIntFromInterval from '../helpers/random-number-generator';
import constants from '../../data/constants.json';

class DemoCasinoSignUpPage {

    readonly page: Page
    readonly emailRegistrationMethodOption: Locator
    readonly emailRegistrationInput: Locator
    readonly agreeTermsAndConditionsCheckbox: Locator
    readonly noBonusRadioButton: Locator
    readonly currencyDropdown: Locator
    readonly currencyListOptions: Locator
    readonly passwordInput: Locator
    readonly confirmPasswordInput: Locator
    readonly createAccountButton: Locator
    //Error locators
    readonly errorEmailMessage: Locator
    readonly errorTermsAndConditions: Locator
    readonly errorPasswordConfirmation: Locator

    constructor(page: Page) {
        this.page = page;
        this.emailRegistrationMethodOption = page.locator('li').filter({ hasText: 'E-mail' })
        this.emailRegistrationInput = page.locator('input[data-test="input-email"]');
        this.agreeTermsAndConditionsCheckbox = page.getByText('I unconditionally agree with')
        this.noBonusRadioButton = page.locator('label').filter({ hasText: "No Bonus" });
        this.currencyDropdown = page.locator('.input__wrapper .selectric-wrapper .selectric');
        this.currencyListOptions = page.locator(".input__wrapper .selectric-items ul > li");
        this.passwordInput = page.locator('input[data-test="input-password"]');
        this.confirmPasswordInput = page.locator('input[data-test="input-password_confirmation"]');
        this.createAccountButton = page.locator('button[data-test="control-submit"]');
        this.errorEmailMessage = page.locator('[data-test="error-email"]');
        this.errorTermsAndConditions = page.locator('[data-test="error-terms_and_conditions"]');
        this.errorPasswordConfirmation = page.locator('[data-test="error-password_confirmation"]');
    }

    /**
     * @function clickOnEmailRegistrationOption It clicks on the Email registration option
     */
    async clickOnEmailRegistrationOption(): Promise<void> {
        await this.emailRegistrationMethodOption.click();
    }

    /**
     * @function typeOnEmailRegistrationInput It types the Email username for sign up
     * @param emailUsername the Email to type
     */
    async typeOnEmailRegistrationInput(emailUsername: string): Promise<void> {
        await this.emailRegistrationInput.fill(emailUsername);
    }

    /**
     * @function checkOnAgreeUponTermsAndConditions It checks the terms and conditions
     */
    async checkOnAgreeUponTermsAndConditions(): Promise<void> {
        await this.agreeTermsAndConditionsCheckbox.check();
    }

    /**
     * @function checkOnNoBonusesRadioButton It checks the no bonuses radio button
     */
    async checkOnNoBonusesRadioButton(): Promise<void> {
        await this.noBonusRadioButton.check();
    }

    /**
     * @function selectRandomCurrencyOption It selects a random currency option
     */
    async selectRandomCurrencyOption(): Promise<void> {
        await this.currencyDropdown.click();
        const amountOfCurrencies = await this.currencyListOptions.count();
        this.currencyListOptions.nth(randomIntFromInterval(0, amountOfCurrencies - 1)).click();
    }

    /**
     * @function typeIntoPasswordInput It types the password on the password input
     * @param password The password value to type
     */
    async typeIntoPasswordInput(password: string): Promise<void> {
        await this.passwordInput.fill(password);
    }

    /**
     * @function typeIntoConfirmPasswordInpupt It types the password confirmation
     * @param confirmPassword The password confirmation to set as value
     */
    async typeIntoConfirmPasswordInpupt(confirmPassword: string): Promise<void> {
        await this.confirmPasswordInput.fill(confirmPassword);
    }

    /**
     * @function clickOnCreateAccountButton It clicks on the create account button
     */
    async clickOnCreateAccountButton(): Promise<void> {
        await this.createAccountButton.click();
    }

    /**
     * @function isEmailErrorMessagePresent It makes an assertion to check whether the valiation error for email is present
     */
    async isEmailErrorMessagePresent(): Promise<void> {
        await expect(this.errorEmailMessage).toBeVisible({ timeout: constants.timeoutConstants.implicitTimeout })
    }
    /**
     * @function isTermsAndConditionsErrorPresent It makes an assertion to check whether the validation 
     * error for terms and cons is present
     */
    async isTermsAndConditionsErrorPresent(): Promise<void> {
        await expect(this.errorTermsAndConditions).toBeVisible({ timeout: constants.timeoutConstants.implicitTimeout })
    }
    /**
     * @function isPasswordConfirmationErrorPresent It makes an assertion to check whether the validation 
     * error for password confirmation is present
     */
    async isPasswordConfirmationErrorPresent(): Promise<void> {
        await expect(this.errorPasswordConfirmation).toBeVisible({ timeout: constants.timeoutConstants.implicitTimeout })
    }

}

export default DemoCasinoSignUpPage