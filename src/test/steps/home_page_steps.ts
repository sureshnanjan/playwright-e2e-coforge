import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

setDefaultTimeout(60 * 1000 * 2)

import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import HomePage from "../../pages/home_page";


Given('Heroku App Is available', async function () {
    // Write code here that turns the phrase above into concrete actions
    console.log("Launche Hroku Home Page");
    this.parameters.hp = new HomePage(fixture.page);
    await this.parameters.hp.base.goto(process.env.BASEURL);
  });

When('title is obtained', async function () {
    // Write code here that turns the phrase above into concrete actions
    console.log("Getting Title and setting actual results");
    this.parameters.actual_title = await this.parameters.hp.getTitle();
  });

Then('title should be {string}', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    console.log(`Checking The actual matched ${string}`);
    await expect(string).toEqual(this.parameters.actual_title);
  });