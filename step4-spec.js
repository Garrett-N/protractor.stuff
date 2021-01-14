const {browser, by, element} = require('protractor');

// list of elements
describe('Protractor Demo App', () => {
    let firstNumber = element(by.model('first'));
    let secondNumber = element(by.model('second'));
    let goButton = element(by.id('gobutton'));
    let latestResult = element(by.binding('latest'));
    let history = element.all(by.repeater('result in memory'));

    function add(a,b) {
        firstNumber.sendKeys(a);
        secondNumber.sendKeys(b)
        goButton.click();
    }

    beforeEach(()=> {
       browser.get('http://juliemr.github.io/protractor-demo/');
    });

    it('should have a history', ()=> {
        add(1,2);
        add(3,4);
        expect(history.count()).toEqual(2);

        add(5,6);
        expect(history.count()).toEqual(3);
    });
});