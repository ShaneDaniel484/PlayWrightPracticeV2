import { Page, Locator } from "@playwright/test";
import { Config } from "Config/FrameworkConfig";

export class WaitUtils {

    static async waitForNavigation(page: Page) {
        await page.waitForLoadState("domcontentloaded");
    }

    static async waitForNetworkIdle(page: Page) {
        await page.waitForLoadState("networkidle");
    }

    static async waitForPageLoad(page: Page) {
        await page.waitForLoadState("load");
    }

    static async waitForVisible(locator: Locator , timeout = Config.timeout) {
        await locator.waitFor({ state: "visible" , timeout : timeout});
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