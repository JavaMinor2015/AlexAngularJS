'use strict';
var PageObject = function () {

  var InputField = function (value) {
    this.value = value;
  };

  InputField.prototype = {
    get: function () {
      return this.value.getAttribute('value');
    },
    set: function (val) {
      this.value.sendKeys(val);
    }
  };

  var Button = function (value) {
    this.value = value;
  };

  Button.prototype = {
    click: function() {
      this.value.click();
    },
    isDisabled: function() {
      return !(this.value.isEnabled());
    },
    isEnabled: function() {
      return this.value.isEnabled();
    }
  };


  /** Forms, fields, divs, containers etc. etc. und so weiter **/
  this.getCreateFormField = function () {
    return CreateFormField;
  };

  /** implementations of the containers above **/
  var CreateFormField = {
    FIRST_NAME: new InputField(element(by.model("newContact.firstName"))),
    LAST_NAME: new InputField(element(by.model("newContact.surname"))),
    EMAIL: new InputField(element(by.model("newContact.email"))),
    SAVE_BUTTON: new Button(element(by.id("saveNewContactBtn")))
  };

  /** other stuffs **/
  this.open = function () {
    //browser.get('/');
    element(by.id('addNewContactBtn')).click();
  };

};

module.exports = PageObject;
