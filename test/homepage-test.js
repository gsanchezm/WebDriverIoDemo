const assert = require('assert');

describe("Test WebDriver University Homepage", () => {
  it("Validate wheter the WebDriver uni homepage title is correct", () => {
      browser.url('./')
      const title = browser.getTitle()
      assert.strictEqual(title, 'WebDriverUniversity.com')
  });
});
