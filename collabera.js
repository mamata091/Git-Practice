describe('automationpractice', function() {

    it('automation', function(){
        browser.manage().window().maximize();
        browser.waitForAngularEnabled(false);
        browser.get('http://automationpractice.com/index.php');
        browser.getTitle().then(function(text){
              console.log(text);
        })
        element(by.css('a[href*="my-account"]')).click();
        var EC= protractor.ExpectedConditions;
        var form= element(by.id('create-account_form'));
        browser.wait(EC.visibilityOf(form),8000);
        var createtext=element(by.cssContainingText('h3','Create an account'));
        expect(createtext.getText()).toBe('CREATE AN ACCOUNT');
        createtext.getText().then(function(text){
            console.log(text);
        });
        var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
        var randomemail = chars[Math.floor(Math.random()*26)] + Math.random().toString(36).substring(2,11) + '@gmail.com';
        element(by.id('email_create')).sendKeys(randomemail);
        element(by.id('SubmitCreate')).click();
        var EC= protractor.ExpectedConditions;
        var newform=element(by.cssContainingText('h3','Your personal information'));
        browser.wait(EC.visibilityOf(newform),8000);
        newform.getText().then(function(text){
            console.log(text);
        })
        element(by.id('id_gender2')).click();
        element(by.id('customer_firstname')).sendKeys('john');
        element(by.id('customer_lastname')).sendKeys('doe');
        element(by.id('passwd')).sendKeys('ohm@1410');
        element(by.id('days')).element(by.css('option:nth-child(5)')).click();
        element(by.id('months')).element(by.css('option:nth-child(10)')).click();
        element(by.id('years')).element(by.css('option:nth-child(22)')).click();
        element(by.id('firstname')).sendKeys('emmy');
        element(by.id('lastname')).sendKeys('jackson');
        element(by.name('address1')).sendKeys('200 summer st');
        element(by.id('city')).sendKeys('boston');
        browser.sleep(2000);
        element(by.id('id_state')).element(by.css('option:nth-child(10)')).click();
        element(by.id('postcode')).sendKeys('02210');
        element(by.id('other')).sendKeys('This is my personal details')
        element(by.id('phone_mobile')).sendKeys('6474121089');
        element(by.name('submitAccount')).click();
        var logout=element(by.css('a[href*="mylogout"]'));
        expect(logout.isDisplayed()).toBe(true);
        logout.click();
        browser.sleep(500);
        //login again
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
        var invoiceaddress=element(by.cssContainingText('h3','Invoice address'));
        browser.wait(Ec.visibilityOf(invoiceaddress),5000);
        expect(invoiceaddress.getText()).toBe('INVOICE ADDRESS (MY ADDRESS');
        element(by.css('a[href*="controller=order&step=1"]')).click();
        var step2=element(by.css('lable[for="id_address_delivery"]'));
        browser.wait(EC.visibilityOf(step2),5000);
        expect(step2.getText()).toBe('Choose a delivery address:');
        element(by.name('processAddress')).click();
        var termofservice=element(by.cssContainingText('p','Terms of service'));
        browser.wait(EC.visibilityOf(termofservice),5000);
        expect(termofservice.getText()).toBe('Terms of service');
        element(by.css('input[type="checkbox"]')).click();
        element(by.name('processCarrier')).click();





       






        
        

        




        

        
        
        

    });
});    