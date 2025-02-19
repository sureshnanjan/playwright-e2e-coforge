import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";


export default class HomePage {
    private base: PlaywrightWrapper;
    constructor(private page: Page
    ) {
        this.base = new PlaywrightWrapper(page);
    }

    private pageElements = {
        title: "h1",
        subtitle: "h2",
        
    }


    async getTitle(): Promise<string> {
        return await this.page.locator(this.pageElements.title).innerText();
          
    }

   
}