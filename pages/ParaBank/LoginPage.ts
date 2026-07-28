import { Page , Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { SecureAreaPage } from 'pages/Heroku/SecureAreaPage';
import { Config } from '../../Config/FrameworkConfig';
import { WaitUtils } from '../../utils/WaitUtils';

export class LoginPage extends BasePage{
   readonly username : Locator;
   readonly password : Locator;
   readonly loginButton : Locator;

   constructor(page:Page){
    super(page);

    this.username = this.page.locator('input[name="username"]');
    this.password = this.page.locator('input[name="password"]');
    this.loginButton = this.page.getByRole('button' , {name: 'Log In'})

   }

   async open(){
    await this.page.goto(Config.baseURL , {timeout : Config.timeout});
   }

   async login():Promise<SecureAreaPage>{
    await this.username.pressSequentially(Config.username);
    await this.password.pressSequentially(Config.password);
    await this.loginButton.click();
    await WaitUtils.waitForDom(this.page);  
    return new SecureAreaPage(this.page);
   }

   async verifyLoginPage(){
      await expect(this.page).toHaveTitle('ParaBank | Welcome | Online Banking');
   }

}