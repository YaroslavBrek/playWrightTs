import { expect, Locator, Page } from '@playwright/test';
export default class HomePage {
    readonly pageUrl = "https://www.browserstack.com/";
    readonly page: Page;
    readonly logo: Locator;
    readonly productMenu: Locator;
    readonly productMenuDropdown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.logo = page.locator('#logo');
        this.productMenu = page.locator('#product-menu-toggle');
        this.productMenuDropdown = page.locator('#product-menu-dropdown >div > ul >li >a >div[class="dropdown-link-heading"]');
        }

        async goto(){
            await this.page.goto(this.pageUrl);
            }
            async clickOnProducts(){
            await this.productMenu.waitFor({state:"visible"});
            await this.productMenu.click();
            }
}