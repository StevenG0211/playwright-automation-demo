import { expect, type Locator, type Page } from '@playwright/test'
import constants from '../../data/constants.json'

class DemoCasinoProfilePage {
    readonly page: Page
    readonly profileSettingsHeader: Locator

    constructor(page: Page) {
        this.page = page;
        this.profileSettingsHeader = page.getByRole("heading",{name: "My Profile"})
        }

    /**
     * @function isMyProfileHeaderVisible It makes and assertion to check whether the Profile Header is visible
     */
    async isMyProfileHeaderVisible():Promise<void>{
        await expect(this.profileSettingsHeader).toBeVisible({timeout:constants.timeoutConstants.implicitTimeout});
    }

}

export default DemoCasinoProfilePage;