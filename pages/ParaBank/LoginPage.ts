import { Page , Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { SecureAreaPage } from 'pages/Heroku/SecureAreaPage';
import { Config } from '../../Config/FrameworkConfig';

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
    await this.page.goto(Config.baseURL);
   }

   async login(username : string , password : string):Promise<SecureAreaPage>{
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();

    return new SecureAreaPage(this.page);
   }

   async verifyLoginPage(){
      await expect(this.page).toHaveTitle('ParaBank | Welcome | Online Banking');
   }

}