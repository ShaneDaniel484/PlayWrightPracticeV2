import { Page , Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { LoginPage } from './LoginPage';
import { OpenNewAccountPage } from '../../pages/ParaBank/OpenNewAccountPage';
import { TransferAmountPage } from '../../pages/ParaBank/TransferAmountPage';
import { WaitUtils } from '../../utils/WaitUtils';

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
        await WaitUtils.waitForNavigation(this.page);
        return new LoginPage(this.page);

    };


    async goToOpenNewAccountPage():Promise<OpenNewAccountPage>{
        await this.openNewAccountLink.click();
        await WaitUtils.waitForNavigation(this.page);
        return new OpenNewAccountPage(this.page);
    };

    async goToTransferAmountPage():Promise<TransferAmountPage>{
        await this.transferAmountLink.click();
        await WaitUtils.waitForNavigation(this.page);
        return new TransferAmountPage(this.page);
    }
}