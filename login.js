describe('deletemelogin', function() {
    beforeEach(function(){

        browser.get('https://test.joindeleteme.com/delete-me/login');
        browser.sleep(2000);
        browser.manage().window().maximize();
    })
    xit('Login worked', function() {
       
        
        element(by.id('email')).sendKeys('mamata+8b@thoughtwhiz.com');
        element(by.id('password')).sendKeys('1111');
        element(by.buttonText('Login')).click();
        var Ec=protractor.ExpectedConditions;
        var dashboard = element(by.css('div[class="page-header--title"]'));
        brower.wait(EC.visibilityOf(dashboard),8000);
        expect(dashboard.getText()).toEqual('Dashboard');
        dashboard.getText().then(function(text){
            console.log(text);
        })
        element(by.id('dropdownMenuButton')).click();
        var logout= element(by.cssContainingText('.dropdown-item--name', 'Log out'));
        expect(logout.isPresent()).toBe(true);
        logout.click()
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.presenceOf($('#email')), 5000);
         

    });
   
    xit('Login failed', function() {
       
        element(by.id('email')).sendKeys('mamata+8b@thoughtwhiz.com');
        element(by.id('password')).sendKeys('1234');
        element(by.buttonText('Login')).click();
        browser.sleep(7000);
        var error = element(by.css('div[class="alert alert-danger"]'));
        expect(error.getText()).toEqual('Invalid login credentials. Please try again.');
        error.getText().then(function(error){
            console.log(error);
        })
        
      
    });

    it('Login new profile', function() {
       
        element(by.id('email')).sendKeys('mamata+8c@thoughtwhiz.com');
        element(by.id('password')).sendKeys('1111');
        element(by.buttonText('Login')).click();
        var EC=protractor.ExpectedConditions;
        var code=element(by.cssContainingText('h1','Security Code'));
        browser.wait(EC.visibilityOf(code),8000);
        expect(code.getText()).toBe('Security Code');
        element(by.id('otp')).sendKeys(102365);
        element(by.buttonText('Login')).click();
        var wrongcode=element(by.css('div[class*="otp-needed"]'));
        browser.wait(EC.visibilityOf(wrongcode),5000);
        wrongcode.getText().then(function(wrongcode){
            console.log(wrongcode);
        });

        
    
    });

});