import { Locator, Page } from '@playwright/test';
import { BasePage } from '../Heroku/BasePage';

export class HeaderComponent extends BasePage {
    readonly logoutButton : Locator;

    constructor(page:Page){
        super(page);

        this.logoutButton = this.page.getByRole('link' , {name : 'Logout'});

    }

         async logout() {
        await this.logoutButton.click();

    }

}