import { Page , Locator , expect } from '@playwright/test';
import { BasePage } from '../../pages/ParaBank/BasePage';

export class TransferAmountPage extends BasePage{
    readonly amount : Locator;
    readonly toAccount : Locator;
    readonly transferButton : Locator;
    readonly successfulTransactionMessage : Locator;

    constructor(page:Page){
        super(page);

        this.amount = this.page.locator('#amount');
        this.toAccount = this.page.locator('#toAccountId');
        this.transferButton = this.page.getByRole('button' , {name : 'Transfer'});
        this.successfulTransactionMessage = this.page.locator('#showResult');
    }

    async verifyTransferAccountPage(){
        await expect(this.page).toHaveTitle('ParaBank | Transfer Funds');
    }

    async transferAmount(Transfermount : string){
        await this.amount.fill(Transfermount);
        await this.toAccount.selectOption({index: 1});
        await this.transferButton.click();

    }

    async verifySuccessfulTransaction(){
        await expect(this.successfulTransactionMessage).toContainText('Transfer Complete!');
    }


}