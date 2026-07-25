import {test as base} from '@playwright/test';
import { LoginPage } from '../../pages/Heroku/LoginPage';
import { SecureAreaPage } from '../../pages/Heroku/SecureAreaPage';
// import { DropDownPage } from '../../pages/Heroku/DropDownPage';

type MyFixtures = {
    secureAreaPage: SecureAreaPage;
};

export const test = base.extend<MyFixtures>({

    secureAreaPage: async ({ page } , use) => {

        const loginPage  = new LoginPage(page);

        await loginPage.open();

        const secureAreaPage = await loginPage.login('tomsmith' , 'SuperSecretPassword!');

        //await expect (loginPage.flashMessage).toContainText(/You logged into a secure area!/i);

        await use(secureAreaPage);

    }

});


