import { test as base } from '@playwright/test';
import { LoginPage } from '../../pages/ParaBank/LoginPage'
import { AccountServicesPage } from '../../pages/ParaBank/AccountServicesPage';
import { Logger } from '../../utils/Logger';

type ParaBankFixtures = {
    accountServicesPage : AccountServicesPage
};

export const test = base.extend<ParaBankFixtures>({
    accountServicesPage: async ({page} ,use) => {
        const loginpage = new LoginPage(page);
        Logger.info("Launching Website");
         await loginpage.open();
         Logger.success("Launched Successfully")
         Logger.info("Logging in")
         await loginpage.login();

         const accountServicesPage = new AccountServicesPage(page);
         await use(accountServicesPage);
    }
});