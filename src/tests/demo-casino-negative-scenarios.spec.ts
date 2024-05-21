import { test } from '@playwright/test';
import DemoCasinoHomePage from '../page-objects/demo-casino-home.page';
import DemoCasinoSignInPage from '../page-objects/demo-casino-signin.page';
import constants from '../../data/constants.json'
import DemoCasinoSignUpPage from '../page-objects/demo-casino-signup.page';


test.describe('DEMO CASINO: NEGATIVE TEST SCENARIOS', () => {

    test('DEMO-NEG-001: SUBMIT AN EMPTY REGISTRATION FORM - VERIFY ERROR MESSAGES', async ({ page }) => {
        const homePage = new DemoCasinoHomePage(page);
        const signUpPage = new DemoCasinoSignUpPage(page);
        await homePage.navigateToDemoCasino();
        await homePage.isUserNavigatedToHomePage();
        await homePage.clickOnInitialPopupButton();
        await homePage.clickOnSignUpButton();
        await signUpPage.clickOnCreateAccountButton();
        await signUpPage.isEmailErrorMessagePresent();
        await signUpPage.isTermsAndConditionsErrorPresent();
        await signUpPage.isPasswordConfirmationErrorPresent();
    })

    test('DEMO-NEG-002: LOGIN WITH INCORRECT CREDENTIALS - VERIFY ERROR MESSAGES', async ({ page }) => {
        const homePage = new DemoCasinoHomePage(page);
        const signInPage = new DemoCasinoSignInPage(page);
        await homePage.navigateToDemoCasino();
        await homePage.isUserNavigatedToHomePage();
        await homePage.clickOnInitialPopupButton();
        await homePage.clickOnSignInPopupButton();
        await homePage.clickOnSignInButton();
        await signInPage.typeOnUsernameInput(constants.testScripConstants.incorrectEmail);
        await signInPage.typeOnPasswordInput(constants.testScripConstants.incorrectPassword);
        await signInPage.clickOnSignInButton();
        await signInPage.isErrorUsernamePresent()
    })
});