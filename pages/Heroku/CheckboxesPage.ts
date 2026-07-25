import {Page , Locator} from '@playwright/test';
export class ChechboxesPage{
    readonly page : Page;
    readonly checkboxes : Locator;
    constructor(page : Page){
        this.page = page;
        this.checkboxes = this.page.locator('input[type="checkbox"]');
        
    }
    async open(){
        await this.page.goto('https://the-internet.herokuapp.com/checkboxes');
    }
}