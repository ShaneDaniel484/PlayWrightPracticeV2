import { Page , Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { LoginPage } from './LoginPage';
import { OpenNewAccountPage } from '../../pages/ParaBank/OpenNewAccountPage';
import { TransferAmountPage } from '../../pages/ParaBank/TransferAmountPage';

export class AccountServicesPage extends BasePage{
    readonly welcomeText : Locator;
    readonly logoutButton : Locator;
    readonly openNewAccountLink : Locator;
    readonly transferAmountLink : Locator;

    constructor(page:Page){
        super(page);
        this.welcomeText = this.page.getByText('Welcome');
        this.logoutButton = this.page.getByRole('link' , {name : 'Log Out'});
        this.openNewAccountLink = this.page.getByRole('link' , {name : 'Open New Account'});
        this.transferAmountLink = this.page.getByRole('link' , {name : 'Transfer Funds'});
    };


    async logout():Promise<LoginPage>{
        await this.logoutButton.click();
        return new LoginPage(this.page);

    };


    async goToOpenNewAccountPage():Promise<OpenNewAccountPage>{
        await this.openNewAccountLink.click();
        return new OpenNewAccountPage(this.page);
    };

    async goToTransferAmountPage():Promise<TransferAmountPage>{
        await this.transferAmountLink.click();
        return new TransferAmountPage(this.page);
    }
}