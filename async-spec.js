const {browser} = require("protractor");

describe('Asnyc test demo', ()=> {
    it('simple example', ()=> {
        browser.get("https://angularjs.org");
        browser.sleep(10000);
        console.log("I am the day."); // prints before pages have loaded
    });

    it('promise', ()=> {
        browser.get("https://angularjs.org").then(()=>{
            browser.sleep(10000);
            console.log("I am the night.");
        });

    });
});