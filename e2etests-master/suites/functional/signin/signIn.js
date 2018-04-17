'use strict';

var url = requireProviders('url');
var signInData = requireProviders('signIn_Data');
var signInPage = requirePageObjects('page_signIn');

describe('sign in', function() {
    beforeEach(function() {
        browser.ignoreSynchronization = true ;
        browser.get(url.rootUrl);
    });
    it('should verify sign in for empty email and password', function() {
        browser.sleep(1000);
        signInPage.emailField.sendKeys('');
        signInPage.passwordField.sendKeys('');
        expect(signInPage.invalid_email_error_message.isPresent()).toBe(true);
        expect(signInPage.invalid_password_error_message.isPresent()).toBe(true);
    });

    it('should verify sign in for empty email', function() {
        browser.sleep(1000);
        signInPage.emailField.sendKeys('');
        signInPage.passwordField.sendKeys(signInData.data.user_password);
        expect(signInPage.error_message.isPresent()).toBe(true);

    });
    it('should verify sign in for empty password', function() {
        browser.sleep(1000);
        signInPage.emailField.sendKeys(signInData.data.user_email);
        signInPage.passwordField.sendKeys(signInData.data.user_password);
        signInPage.passwordField.clear();
        expect(signInPage.error_message.getText()).toEqual('Password can\'t be blank');

    });

    it('should verify email has wrong format', function() {
        browser.sleep(1000);
        signInPage.emailField.sendKeys(signInData.data.invalidFormatEmail);
        signInPage.passwordField.sendKeys(signInData.data.user_password);
        expect(signInPage.error_message.getText()).toEqual('Email must be valid');
    });

    it('should verify password has wrong format', function() {
        browser.sleep(1000);
        signInPage.emailField.sendKeys(signInData.data.user_email);
        signInPage.passwordField.sendKeys(signInData.data.invalidFormatPassword);
        signInPage.emailField.sendKeys('');
        expect(signInPage.error_message.getText()).toEqual('Password must be at least 8 characters');
    });

    it('should verify invalid email and password', function() {
        browser.sleep(1000);
        signInPage.emailField.sendKeys(signInData.data.user_email);
        signInPage.passwordField.sendKeys(signInData.data.user_password);
        signInPage.loginButton.click() ;
    });
});
