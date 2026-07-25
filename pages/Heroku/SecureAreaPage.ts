import {Page , Locator} from '@playwright/test';
import { BasePage } from '../../pages/Heroku/BasePage';
import { HeaderComponent } from '../Heroku/HeaderComponent'

export class SecureAreaPage extends BasePage {

    readonly header: HeaderComponent;
    readonly flashMessage: Locator;

    constructor(page: Page) {
        super(page);

        this.header = new HeaderComponent(this.page);
        this.flashMessage = this.page.locator('#flash');
    }

}