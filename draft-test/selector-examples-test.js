

describe("Selectors Test", () => {
    beforeEach(()=>{
        browser.maximizeWindow();
        browser.url('./');
    })

    it("By ID", () => {
        const clickById = $("#contact-us")
        clickById.click();
        browser.pause(2000);
    });

    it("By Class", () => {
        const clickByClass = $(".section-titles")
        clickByClass.click();
        browser.pause(2000);
    });

    it("By Xpath", () => {
        const clickByXpath = $("//h1[text()='CONTACT US']/../..")
        clickByXpath.click();
        browser.pause(2000);
    });

    it("By CSS Selector", () => {
        const clickByCss = $("#contact-us h1")
        clickByCss.click();
        browser.pause(2000);
    });

});
