//https://webdriver.io/docs/pageobjects.html
export default class Base_PO {
    open(path) {
        browser.maximizeWindow();
        browser.url(path);
    }

    waitUsingFixedTimeout(time) {
        console.log(`Pausing for: ${time} seconds.`);
        browser.pause(time);
    }
}