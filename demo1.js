describe('automationpractice', function() {

    it('automation', function(){
        browser.manage().window().maximize();
        browser.waitForAngularEnabled(false);
        browser.get("http://automationpractice.com/index.php?controller=authentication&back=my-account");
        element(by.id('email')).sendKeys('text12@gmail.com');
        element(by.id('passwd')).sendKeys('ohm@1410');
        element(by.id('SubmitLogin')).click();
        //clicking on women link
        element(by.css('a[href*="controller=category"]')).click();
        var EC=protractor.ExpectedConditions;
        var catalog=element(by.cssContainingText('p','Catalog'));
        browser.wait(EC.visibilityOf(catalog), 8000);
        expect(catalog.getText()).toBe('CATALOG');
        catalog.getText().then(function(text){
            console.log(text);
        })
        //add to cart

        browser.sleep(1000);
        element(by.css('div[class="product-image-container"]')).click(); 
        browser.switchTo().frame(0);
        var Ec=protractor.ExpectedConditions;
        var addcart=element(by.name("Submit"));
        browser.wait(EC.visibilityOf(addcart),5000);
        addcart.click();
        var success= element(by.cssContainingText('i','Product successfully added to your shopping cart'));
        browser.wait(EC.visibilityOf(success),10000);
        success.getText().then(function(successtext){
            console.log(successtext)
        })
        element(by.css('a[href*="controller=order"]')).click();
        element(by.css('a[href*="controller=order&step=1"]')).click();
        element(by.name('processAddress')).click();
        element(by.css('input[type="checkbox"]')).click();
        element(by.name('processCarrier')).click();



       


    })
});        