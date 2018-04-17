/**
 * Created by adnanghaffar on 08.
 */
'use strict';
var SignIn = function() {

    var _this = this;
    _this.emailField = element.all(by.className('-Input-default-input-3qF1p1')).first();
    _this.passwordField = element.all(by.className('-Input-default-input-3qF1p1')).last();
    _this.loginButton = element(by.css('.-Login-button-wrapper-U9wgUc button'));
    _this.invalid_email_error_message = element.all(by.className('g-error-msg')).first();
    _this.invalid_password_error_message = element.all(by.className('g-error-msg')).last() ;
    _this.error_message = element(by.className('-Input-error-msg-2xekuF')) ;
    _this.invalid_emai_password_error_message = element(by.css('.react-alert')) ;
};

module.exports = new SignIn();
