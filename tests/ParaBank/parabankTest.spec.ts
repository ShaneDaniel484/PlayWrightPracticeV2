import {expect} from '@playwright/test';
import { test } from '../../fixtures/ParaBank/login.fixture';
import { HeaderComponents } from '../../pages/ParaBank/HeaderComponents';


test('Successful Login' , async({accountServicesPage}) => {

    await expect(accountServicesPage.welcomeText).toBeVisible();

    const loginPage = await accountServicesPage.logout();
    await loginPage.verifyLoginPage();

})

// test('Visit AboutUs Page' , async({page , accountServicesPage}) => {

//     await expect(accountServicesPage.welcomeText).toBeVisible();

//     const headerComponents = new HeaderComponents(page);
//     const aboutUsPage =  await headerComponents.openAboutUsPage();

//     await aboutUsPage.verifyAboutUsPage();

// })

// test ('Open New Account' ,async({accountServicesPage})=>{
//     await expect(accountServicesPage.welcomeText).toBeVisible();
//     const openNewAccountPage = await accountServicesPage.goToOpenNewAccountPage();
//     await openNewAccountPage.verifyOpenAccountPage();
//     await openNewAccountPage.openAccount('SAVINGS');
//     await openNewAccountPage.verifySuccessfulAccountOpening();
//     const loginPage = await accountServicesPage.logout();
//     await loginPage.verifyLoginPage();

// });

// test ('Transfer Amount' , async({accountServicesPage})=>{
//     const transferAmountPage = await accountServicesPage.goToTransferAmountPage();
//     await transferAmountPage.verifyTransferAccountPage();
//     await transferAmountPage.transferAmount('1');
//     await transferAmountPage.verifySuccessfulTransaction();
//     const loginPage = await accountServicesPage.logout();
//     await loginPage.verifyLoginPage();
// })