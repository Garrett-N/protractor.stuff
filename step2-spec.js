const {browser, by, element} = require("protractor");

// multiple scenarios
describe('Protractor Demo App', () => {
    let firstNumber = element(by.model('first'));
    let secondNumber = element(by.model('second'));
    let goButton = element(by.id('gobutton'));
    let latestResult = element(by.binding('latest'));

    beforeEach(() => {
        browser.get('http://juliemr.github.io/protractor-demo/');
    });

    it('should have a title', () => {
        expect(browser.getTitle()).toEqual('Super Calculator');
    });

    it('should add one and two', () => {
        firstNumber.sendKeys(1);
        secondNumber.sendKeys(2);
        goButton.click();
        expect(latestResult.getText()).toEqual('3');
    });

    it('should add four and six', () =>{
        firstNumber.sendKeys(4);
        secondNumber.sendKeys(6);
        goButton.click();
        expect(latestResult.getText()).toEqual('10');
    });

    it('should read the value from an input', () => {
        firstNumber.sendKeys(1);
        expect(firstNumber.getAttribute('value')).toEqual('1');
    });
});