import { Page , Locator} from '@playwright/test';
import { BasePage } from '../../pages/ParaBank/BasePage';
import { AboutUsPage } from './AboutUsPage';
import { WaitUtils } from '../../utils/WaitUtils';

export class HeaderComponents extends BasePage{
    readonly aboutUsLink : Locator;

    constructor(page:Page){
        super(page);

        this.aboutUsLink = this.page.locator('#headerPanel').getByRole('link' , {name: 'About Us'});
    }


    async openAboutUsPage():Promise<AboutUsPage>{
        await this.aboutUsLink.click();
        await WaitUtils.waitForDom(this.page);
        return new AboutUsPage(this.page);
    }

}