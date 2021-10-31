describe('Editinfo', function() {
    beforeEach(function(){

        browser.get('https://test.joindeleteme.com/delete-me/login');
        browser.sleep(2000);
        browser.manage().window().maximize();
        element(by.id('email')).sendKeys('mamata+8b@thoughtwhiz.com');
        element(by.id('password')).sendKeys('1234');
        element(by.buttonText('Login')).click();
        browser.sleep(7000);
        var abc = element(by.css('div[class="page-header--title"]'));
        expect(abc.getText()).toEqual('Dashboard');
        browser.sleep(2000);

        
    })
    it('error message 1', function() {
       
        element(by.cssContainingText('span', 'Account')).click();
        browser.sleep(500)
        element(by.cssContainingText('.text-md', 'Info')).click();
        element(by.buttonText('Save')).click();
        var error=element(by.cssContainingText('.red-text','Please fill all required fields'));
        expect(error.getText()).toBe('Please fill all required fields');
        console.log('Please fill all required fields')

    });
    it('error message 2', function() {
       
        element(by.cssContainingText('span', 'Account')).click();
        browser.sleep(500)
        element(by.cssContainingText('.text-md', 'Info')).click();
        element(by.id('current_password')).sendKeys(1234);
        element(by.buttonText('Save')).click();
        var error=element(by.cssContainingText('.red-text','Current password is invalid'));
        expect(error.getText()).toBe('Current password is invalid');
        console.log('Current password is invalid')

    });
    it('error message 3', function() {
       
        element(by.cssContainingText('span', 'Account')).click();
        browser.sleep(500)
        element(by.cssContainingText('.text-md', 'Info')).click();
        element(by.id('current_password')).sendKeys(1111);
        element(by.buttonText('Save')).click();
        var error=element(by.cssContainingText('.green-text','Saved successfully'));
        expect(error.getText()).toBe('Saved successfully');
        console.log('Saved successfully')

    });
    it('password does not match', function() {
       
        element(by.cssContainingText('span', 'Account')).click();
        browser.sleep(500)
        element(by.cssContainingText('.text-md', 'Info')).click();
        element(by.id('changePassword')).click();
        browser.sleep(1000)
        element(by.id('current_password')).sendKeys(1111);
        element(by.id('password')).sendKeys('1234');
        element(by.buttonText('Save')).click();
        var error=element(by.cssContainingText('.red-text','Password and confirm password is not same'));
        expect(error.getText()).toBe('Password and confirm password is not same');
        console.log('Password and confirm password is not same')

    });
    it('change password success', function() {
       
        element(by.cssContainingText('span', 'Account')).click();
        browser.sleep(500)
        element(by.cssContainingText('.text-md', 'Info')).click();
        element(by.id('changePassword')).click();
        browser.sleep(1000)
        element(by.id('current_password')).sendKeys(1111);
        element(by.id('password')).sendKeys('1234');
        element(by.id('password_confirmation')).sendKeys('1234');
        element(by.buttonText('Save')).click();
        var error=element(by.cssContainingText('.green-text','Saved successfully'));
        expect(error.getText()).toBe('Saved successfully');
        console.log('Saved successfully')

    });

});    