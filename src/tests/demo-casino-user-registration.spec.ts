import { test } from '@playwright/test';
import DemoCasinoHomePage from '../page-objects/demo-casino-home.page';
import DemoCasinoSignUpPage from '../page-objects/demo-casino-signup.page';
import DemoCasinoConfirmationPage from '../page-objects/demo-casino-confirmation.page';
import DemoCasinoProfilePage from '../page-objects/demo-casino-profile.page';
import randomIntFromInterval from '../helpers/random-number-generator';
import DemoCasinoSignInPage from '../page-objects/demo-casino-signin.page';
import constants from '../../data/constants.json'

test.describe('DEMO CASINO USER FEATURES TEST SCENARIOS', () => {

    const demoCasinoEmailUsername = `${constants.testScripConstants.latmobilePrefixUsername}${randomIntFromInterval(0, 999)}${constants.testScripConstants.latmobileSuffix}`

    test('DEMO-001: Demo Casino - User Registration Completion', async ({ page }) => {
        const homePage = new DemoCasinoHomePage(page);
        const signUpPage = new DemoCasinoSignUpPage(page);
        const confirmationPage = new DemoCasinoConfirmationPage(page);
        await homePage.navigateToDemoCasino();
        await homePage.isUserNavigatedToHomePage();
        await homePage.clickOnInitialPopupButton();
        await homePage.clickOnSignUpButton();
        await signUpPage.clickOnEmailRegistrationOption();
        await signUpPage.typeOnEmailRegistrationInput(demoCasinoEmailUsername);
        await signUpPage.checkOnAgreeUponTermsAndConditions();
        await signUpPage.checkOnNoBonusesRadioButton();
        await signUpPage.selectRandomCurrencyOption();
        await signUpPage.typeIntoPasswordInput(constants.testScripConstants.password);
        await signUpPage.typeIntoConfirmPasswordInpupt(constants.testScripConstants.password);
        await signUpPage.clickOnCreateAccountButton();
        await confirmationPage.isConfirmationMessagePresent();
    });

    test('DEMO-002: Demo Casino - Update User Information', async ({ page }) => {
        const homePage = new DemoCasinoHomePage(page);
        const signInPage = new DemoCasinoSignInPage(page);
        const profilePage = new DemoCasinoProfilePage(page);
        await homePage.navigateToDemoCasino();
        await homePage.isUserNavigatedToHomePage();
        await homePage.clickOnInitialPopupButton();
        await homePage.clickOnSignInPopupButton();
        await homePage.clickOnSignInButton();
        await signInPage.typeOnUsernameInput(demoCasinoEmailUsername)
        await signInPage.typeOnPasswordInput(constants.testScripConstants.password);
        await signInPage.clickOnSignInButton();
        await homePage.isUserInfoWrapperPresent();
        await homePage.clickOnProfileArrowButton();
        await homePage.clickOnProfileSettingsButton();
        await profilePage.isMyProfileHeaderVisible();
    });
})