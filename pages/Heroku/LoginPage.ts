import { Page, Locator } from '@playwright/test';
import { BasePage } from '../../pages/Heroku/BasePage';
import { AccountServicesPage } from '../../pages/ParaBank/AccountServicesPage';

export class LoginPage extends BasePage {

    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        super(page);
        

    this.username = this.page.locator('#username');
    this.password = this.page.locator('#password');
    this.loginButton = this.page.getByRole('button', { name: 'Login' });
    }

    async open() {
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }

    async login(username: string, password: string): Promise<AccountServicesPage> {

        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();

        return new AccountServicesPage(this.page);
    }

}