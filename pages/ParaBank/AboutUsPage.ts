import { expect, Page } from '@playwright/test';
import { BasePage } from '../../pages/ParaBank/BasePage';

export class AboutUsPage extends BasePage{
    constructor(page:Page){
        super(page);


    }

    async verifyAboutUsPage(){
        await expect(this.page).toHaveTitle('ParaBank | About Us');
    }
}