import { expect} from '@playwright/test';
import {test} from '../../fixtures/Heroku/login.fixture';

test ('Successful Logout' , async({ secureAreaPage }) => {
    await secureAreaPage.header.logout();
    await expect(secureAreaPage.flashMessage).toContainText(/You logged out of the secure area!/i);

    });
