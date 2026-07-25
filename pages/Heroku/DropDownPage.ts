import { Page , Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class DropDownPage extends BasePage {
    readonly dropdown : Locator;

    constructor(page : Page){
        super(page);

        this.dropdown = this.page.getByRole('combobox');
    }

    async open(){
        await this.page.goto('https://the-internet.herokuapp.com/dropdown');
    }

    async selectOption(option : string) {
        await this.dropdown.selectOption(option);
    }
}