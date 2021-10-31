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
        /*var string = '';
        for(var ii=0; ii<15; ii++){
        string += chars[Math.floor(Math.random() * chars.length)];
        }*/
        //var randomemail=mamata+automation'+Math.Floor(Math.random()*1000)+'@thoughtwhiz.com;
        var randomemail = chars[Math.floor(Math.random()*26)] + Math.random().toString(36).substring(2,11) + '@gmail.com';
        return element(by.id('email_create')).sendKeys(randomemail);

    })
})    