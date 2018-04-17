'use strict';
var SignInData = function() {

    var _this = this;
    _this.data = {
        user_email: 'test@mail.com',
        user_password: 'Abcd1234',
        invalidFormatEmail:'auto_test',
        invalidFormatPassword:'abcd',
    };
};

module.exports = new SignInData();
