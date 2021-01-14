const {browser, by, element} = require("protractor");

describe('Protractor demo app', () => {
    it('should add one and two', () => {
        browser.get("http://juliemr.github.io/protractor-demo/");
        element(by.model('first')).sendKeys(1);
        element(by.model('second')).sendKeys(2);
        element(by.id('gobutton')).click();

        expect(element(by.binding('latest')).getText()).
            toEqual('5') // fail 1+2 = 5
    });
});