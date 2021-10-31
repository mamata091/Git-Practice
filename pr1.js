var loginpage= require('../Pages/loginpage')
var registerpage=require('../Pages/registerpage')
describe('deletemeregistration', function() {

    beforeEach(function(){
        browser.waitForAngularEnabled(true);
        loginpage.get('https://test.joindeleteme.com/delete-me/user/order/new/dmaa1/1');
        browser.ignoreSynchronization = true;
        browser.sleep(3000);
        browser.manage().window().maximize();
        expect(browser.getTitle()).toBe('Abine: DeleteMe');
        browser.sleep(1000)
        loginpage.setemail('mamata+automation@thoughtwhiz.com');
        loginpage.setpass('1234');
        registerpage.firstname('Automation');
        registerpage.lastname('Test');
        registerpage.address1('290 summer st');
        browser.sleep(2000);
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
        browser.sleep(500);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.sleep(1000);
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        browser.sleep(2000);
        registerpage.phone('6478451096');


    })
    it('expired card', function() {
        browser.switchTo().frame(0);
        registerpage.setcardnumber('4000000000000069');
        registerpage.setexpiry('11/21');
        registerpage.setcvv('100');
        browser.switchTo().defaultContent();
        registerpage.privacychk();
        registerpage.abineprivacy();
        browser.sleep(1000)
        registerpage.purchasebtn();
        browser.sleep(20000)
        expect(registerpage.declinedcard().getText()).toBe('Your card has expired.');

    });

    it('declined card', function() {
        browser.switchTo().frame(0);
        registerpage.setcardnumber('4000000000000002');
        registerpage.setexpiry('11/21');
        registerpage.setcvv('100');
        browser.switchTo().defaultContent();
        registerpage.privacychk();
        registerpage.abineprivacy();
        browser.sleep(1000)
        registerpage.purchasebtn();
        browser.sleep(20000)
        expect(registerpage.declinedcard().getText()).toBe('Your card was declined.');

    });

  it('valid card', function() {
        browser.switchTo().frame(0);
        registerpage.setcardnumber('4111111111111111');
        registerpage.setexpiry('11/21');
        registerpage.setcvv('100');
        browser.switchTo().defaultContent();
        registerpage.privacychk();
        registerpage.abineprivacy();
        browser.sleep(1000)
        registerpage.purchasebtn();
        browser.sleep(30000)
        var refer = element(by.xpath('/html/body/main/div/app-datasheet/div[2]/div/div[2]/user-sidebar/div[1]/div/div/div[1]/h4[1]'));
        expect(refer.getText()).toEqual('Refer A Friend');
        browser.sleep(500)
        loginpage.verifylogout();
    });
  
    
  
  });
  