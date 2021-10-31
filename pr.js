var loginpage= require('../Pages/loginpage.js')
describe('deletemelogin', function() {
    beforeEach(function(){
        
        browser.waitForAngularEnabled(true);
        loginpage.get('https://test.joindeleteme.com/delete-me/login');
        browser.ignoreSynchronization = true;
        browser.sleep(2000);
        browser.manage().window().maximize();
    })

    it('Login failed', function() {

        loginpage.setemail("mamata+8b@thoughtwhiz.com");
        loginpage.setpass('1234');
        loginpage.btnclick();
        browser.sleep(7000);
        loginpage.verifyerror();

      
    });

    it('Login worked', function() {
       
        
        loginpage.setemail("mamata+8b@thoughtwhiz.com");
        loginpage.setpass("1111");
        loginpage.btnclick();
        browser.sleep(7000);
        var abc = element(by.css('div[class="page-header clearfix"]'));
        expect(abc.getText()).toEqual('Complete Your Profile Today');
        loginpage.verifylogout();
        browser.sleep(2000);
         

    });

    it('Login new profile', function() {
       
        loginpage.setemail('mamata+8c@thoughtwhiz.com');
        loginpage.setpass('1111');
        loginpage.btnclick();
        browser.sleep(7000);
        loginpage.verifynewuser();
        loginpage.setotp("190012");
        element(by.xpath('/html/body/main/div/app-auth/div/div/div[2]/div[2]/app-login-form/form/div[5]/button')).click();
        browser.sleep(1000);
        var otperror= element(by.css('div[class="alert alert-danger otp-needed"]')).getText();
        
    
    });
    

    
});