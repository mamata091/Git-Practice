describe('DeleteMe Registration', function() {

    beforeEach(function(){
        browser.manage().window().maximize();
        browser.waitForAngularEnabled(false);
        browser.get('https://test.joindeleteme.com/delete-me/user/order/new/dmaa1/1');
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.invisibilityOf(element(by.css('div[class="loading"]'))),8000);
        var text= element.all(by.css('div[class*="title"]')).get(1);
        text.getText().then(function(validatetext){
            console.log(validatetext);
        });
        expect(text.getText()).toBe("Order Summary");
        element(by.id('email')).sendKeys('mamata+automation@thoughtwhiz.com');
        element(by.id('password')).sendKeys('1234');
        element(by.id('first_name')).sendKeys('Automation')
        element(by.id('last_name')).sendKeys('Test');
        browser.actions().mouseMove(element(by.id('address1')).sendKeys('290 summer st')).perform().then(function(){
            browser.sleep(2000);
        })
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform().then(function(){
            browser.sleep(2000);
        });
        browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function(){
            browser.sleep(2000);
        });
        browser.actions().sendKeys(protractor.Key.TAB).perform();
        element(by.id('phone')).sendKeys('6478451096');


    })
    xit('expired card', function() {
        browser.switchTo().frame(0);
        element(by.css('input[name="cardnumber"]')).sendKeys('4000000000000069');
        element(by.name('exp-date')).sendKeys('11/21');
        element(by.name('cvc')).sendKeys('100');
        browser.switchTo().defaultContent();
        var privacy=element(by.css('input[formcontrolname="tos2"]'));
        privacy.click();
        var legal =element(by.css('input[formcontrolname="tos"]'));
        legal.click();
        element(by.name('action')).click();
        var EC=protractor.ExpectedConditions;
        var carderror=element(by.cssContainingText('span','Your card has expired.'));
        browser.wait(EC.visibilityOf(carderror),8000);
        carderror.getText().then(function(errormessage){
            console.log(errormessage);
        })
        expect(carderror.getText()).toBe('Your card has expired.');
       
    });

    xit('Declined card', function() {
        browser.switchTo().frame(0);
        element(by.css('input[name="cardnumber"]')).sendKeys('4000000000000002');
        element(by.name('exp-date')).sendKeys('11/21');
        element(by.name('cvc')).sendKeys('100');
        browser.switchTo().defaultContent();
        var privacy=element(by.css('input[formcontrolname="tos2"]'));
        privacy.click();
        var legal =element(by.css('input[formcontrolname="tos"]'));
        legal.click();
        element(by.name('action')).click();
        var EC= protractor.ExpectedConditions;
        var carderror=element(by.cssContainingText('span','Your card has declined.'));
        browser.wait(EC.visibilityOf(carderror),10000);
        carderror.getText().then(function(errormessage){
            console.log(carderror);
        })
        expect(carderror.getText()).toBe('Your card was declined.');
        
        
    });
  

   it('valid card', function() {
        browser.switchTo().frame(0);
        element(by.css('input[name="cardnumber"]')).sendKeys('4111111111111111');
        element(by.name('exp-date')).sendKeys('11/21');
        element(by.name('cvc')).sendKeys('100');
        browser.switchTo().defaultContent();
        var privacy=element(by.css('input[formcontrolname="tos2"]'));
        privacy.click();
        var legal =element(by.css('input[formcontrolname="tos"]'));
        legal.click();
        element(by.name('action')).click();
        var EC=protractor.ExpectedConditions
        var spin= element(by.css('i[class*="fa-5x"]'));
        browser.wait(EC.invisibilityOf(spin),30000);
        
        
        
    });
  
    
  
  });
  