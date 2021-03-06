var config = require('../config/main-config')
var dataGenerators = require('../utils/dataGenerators')

describe("Test contact us page on webdriveruni", () => {
    beforeEach(function() {
      browser.maximizeWindow();
      browser.url("./");

      const pageDetails = browser.getUrlAndTitle();
      expect(pageDetails.url).to.contain('webdriveruniversity');
      expect(pageDetails.title).to.contain('WebDriverUniversity');
    });

    it("Submit all information via the contact us page", () => {
        //const contactUsButton = $('//h1[text()="CONTACT US"]/..');
        //contactUsButton.click();
        browser.waitAndClick('//h1[text()="CONTACT US"]/..');
        browser.switchWindow('WebDriver | Contact Us');


        //const firstName = $('//*[@name="first_name"]');
        //const lastName = $('//*[@name="last_name"]');
        //const emailAddress = $('//*[@name="email"]');
        //const message = $('//*[@name="message"]');
        //const submitButton = $('//*[@value="SUBMIT"]');

        //firstName.setValue(config.firstName);
        //lastName.setValue(config.lastName);
        //emailAddress.setValue('joe_Blogs121@mail.com');
        //message.setValue('Hello how are you?');

        browser.waitAndSendkeys('//*[@name="first_name"]', config.firstName);
        browser.waitAndSendkeys('//*[@name="last_name"]', config.lastName);
        browser.waitAndSendkeys('//*[@name="email"]', dataGenerators.generateRandomEmailAddress());
        browser.waitAndSendkeys('//*[@name="message"]', dataGenerators.generateRandomString());

        browser.waitAndClick('//*[@value="SUBMIT"]');
        //submitButton.click();

        const contactUsSubmissionDetails = browser.getUrlAndTitle();
        expect(contactUsSubmissionDetails.url).to.contain('contact-form-thank-you');
    }); 
  });