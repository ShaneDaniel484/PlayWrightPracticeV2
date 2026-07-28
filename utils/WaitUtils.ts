import { Page, Locator } from "@playwright/test";

export class WaitUtils {

    static async waitForDom(page: Page) {
        await page.waitForLoadState("domcontentloaded");
    }

    static async waitForNetworkIdle(page: Page) {
        await page.waitForLoadState("networkidle");
    }

    static async waitForPageLoad(page: Page) {
        await page.waitForLoadState("load");
    }

    static async waitForVisible(locator: Locator) {
        await locator.waitFor({ state: "visible" });
    }

    static async waitForHidden(locator: Locator) {
        await locator.waitFor({ state: "hidden" });
    }

    static async waitForAttached(locator: Locator) {
        await locator.waitFor({ state: "attached" });
    }

    static async waitForDetached(locator: Locator) {
        await locator.waitFor({ state: "detached" });
    }

}