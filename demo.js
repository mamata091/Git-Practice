describe('Demo', function() {

    it('practice excercise',function(){
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
        browser.wait(EC.visibilityOf(dashboard),20000);
        expect(dashboard.getText()).toEqual('Dashboard');
        dashboard.getText().then(function(text){
            console.log(text);
        })
        
        var account=element(by.cssContainingText('span', 'Account'));
        account.click();
        browser.sleep(1000);
        //var subscription= element(by.cssContainingText('.medium', 'Subscription'));
        //browser.wait(EC.presenceOf(subscription), 70000);
        element(by.cssContainingText('.text-md', 'Billing Info')).click();
        var billing=element(by.css('div[class*="clearfix"]'));
        browser.wait(EC.visibilityOf(billing),30000);
        expect(billing.getText()).toBe('Billing Information');
        billing.getText().then(function(text){
            console.log(text);
        })
        //element(by.css('span[id="editBilling"]')).click();
        




        

        
        
        

    });
});    