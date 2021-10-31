describe('Editbilling', function() {
    beforeEach(function(){

        browser.get('https://test.joindeleteme.com/delete-me/login');
        browser.manage().window().maximize();
        browser.waitForAngularEnabled(false);
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.presenceOf($('#email')), 5000);
        element(by.id('email')).sendKeys('mamata+8b@thoughtwhiz.com');
        element(by.id('password')).sendKeys('1234');
        element(by.buttonText('Login')).click();
        var Ec=protractor.ExpectedConditions;
        var dashboard = element(by.css('div[class="page-header--title"]'));
        browser.wait(EC.visibilityOf(dashboard),8000);
        expect(dashboard.getText()).toEqual('Dashboard');
        dashboard.getText().then(function(text){
            console.log(text);
        })
        element(by.cssContainingText('span', 'Account')).click();
        element(by.cssContainingText('.text-md','Billing Info')).click();
        var billing=element(by.css('div[class*="clearfix"]'));
        browser.wait(EC.visibilityOf(billing),5000);
        expect(billing.getText()).toBe('Billing Information');
        billing.getText().then(function(text){
            console.log(text);
        })
        element(by.css('span[id="editBilling"]')).click();
    })
    it('incomplete card number', function() {
       
        element(by.css('span[class*="medium pointer"]')).click();
        var errorm = element(by.cssContainingText('.red-text', 'Your card number is incomplete.'));
        expect(errorm.getText()).toBe('Your card number is incomplete.');
        errorm.getText().then(function(error){
            console.log(error);
        })
        

        
    });
    xit('valid card number', function() {
        
        element(by.name('cardnumber')).sendKeys('4242424242424242');
        element(by.name('exp-date')).sendKeys('11/21');
        element(by.name('cvc')).sendKeys('100');
        element(by.css('span[class*="pointer"]')).click();
        var paymentText = element(by.cssContainingText('.text-md', 'Payment Information.'));
        expect(paymentText.getText()).toBe('Payment Information.');
        console.log("Payment Information.")

        
    });
    xit('expired card number', function() {
        
        element(by.name('cardnumber')).sendKeys('4000000000000002');
        element(by.name('exp-date')).sendKeys('11/21');
        element(by.name('cvc')).sendKeys('100');
        element(by.css('span[class*="pointer"]')).click();
        var expiredcard = element(by.cssContainingText('.red-text', 'Your card was declined.'));
        expect(expiredcard.getText()).toBe('Your card was declined.');
        console.log("Your card was declined.")


    });

    xit('declined card numer', function() {
        
        element(by.name('cardnumber')).sendKeys('4000000000000069');
        element(by.name('exp-date')).sendKeys('11/21');
        element(by.name('cvc')).sendKeys('100');
        element(by.css('span[class*="pointer"]')).click();
        var expiredcard = element(by.cssContainingText('.red-text', 'Your card was declined.'));
        expect(expiredcard.getText()).toBe('Your card was declined.');
        console.log("Your card was declined.")
    });
    xit('success edit billing info', function() {
        
        element(by.name('cardnumber')).sendKeys('4242424242424242');
        element(by.name('exp-date')).sendKeys('11/21');
        element(by.name('cvc')).sendKeys('100');
        element(by.id('first_name')).sendKeys('Cheryl');
        element(by.id('last_name')).sendKeys('Svelmoe');
        element(by.id('address1')).sendKeys('94 Kapuahi St');
        browser.sleep(2000);
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
        browser.sleep(500);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.sleep(1000);
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        browser.sleep(2000);
        element(by.id('phone')).sendKeys('6174005130');
        element(by.css('span[class*="pointer"]')).click();
        var paymentText = element(by.cssContainingText('.text-md', 'Payment Information.'));
        expect(paymentText.getText()).toBe('Payment Information.');
        console.log("Payment Information.")
    });


});