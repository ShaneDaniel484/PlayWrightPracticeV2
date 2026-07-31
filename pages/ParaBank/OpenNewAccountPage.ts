import { Page , Locator , expect } from '@playwright/test';
import { BasePage } from '../../pages/ParaBank/BasePage';
import { WaitUtils } from 'utils/WaitUtils';

export class OpenNewAccountPage extends BasePage{
    readonly accountTypeDropdown : Locator;
    readonly openAccountButton : Locator;
    readonly openAccountSuccessMessage : Locator;

    constructor(page:Page){
        super(page);

        this.accountTypeDropdown = this.page.locator('#type');
        this.openAccountButton = this.page.getByRole('button' , {name : 'Open New Account'});
        this.openAccountSuccessMessage = this.page.locator('#openAccountResult');
    }


    async verifyOpenAccountPage(){
        await expect(this.page).toHaveTitle('ParaBank | Open Account');
    }

    async openAccount(accountType : string){
        await this.accountTypeDropdown.selectOption({label : accountType});
        await this.openAccountButton.click();
    }

    async verifySuccessfulAccountOpening(){
        await WaitUtils.waitForVisible(this.openAccountSuccessMessage)
        await expect(this.openAccountSuccessMessage).toContainText('Account Opened!')
    }

}