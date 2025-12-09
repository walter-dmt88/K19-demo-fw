import { Page } from "playwright/test"
import { BasePage } from "../../base.page"

export class LoginPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    xpathUsename = "//div[@id='username']";
    xpathPassword = "//div[@id='password']";
    xpathLoginButton = "//div[@id='submit']";

    async loginToDashboard(username: string, password: string) {
        await this.page.fill(this.xpathUsename, username);
        await this.page.fill(this.xpathPassword, password);
        await this.page.click(this.xpathLoginButton);
    }
}