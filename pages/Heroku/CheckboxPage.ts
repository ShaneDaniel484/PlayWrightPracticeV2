import { Page , Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckboxPage extends BasePage {
    readonly checkboxes : Locator;

    constructor(page : Page){
        super(page);

        this.checkboxes = this.page.locator('input[type="checkbox"]');

    }

    async open(){
        await this.page.goto('https://the-internet.herokuapp.com/checkboxes');
    }

    async checkCheckbox(index : number){
        await this.checkboxes.nth(index).check();
    }

    async uncheckCheckbox(index : number){
        await this.checkboxes.nth(index).uncheck();
    }

    async isChecked(index : number): Promise<boolean>{
        return await this.checkboxes.nth(index).isChecked();
    }

    
}