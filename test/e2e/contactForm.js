var CreateForm = require('./pageobjects/ContactForm.js');
var EditForm = require('./pageobjects/ContactForm.js');
var createForm = new CreateForm();
var editForm = new EditForm();
describe('E2E: Contact form', function () {
  beforeEach(function () {
    browser.get('http://localhost:9000');
    createForm.toggleVisibility(); // visible
  });

  it('should disable the submit button when the form is invalid', function () {
    expect(createForm.isSaveButtonVisible()).toBe(false);
  });

  it('should enable the submit button when the form is valid', function () {
    createForm.fillIn("Frits", "Spits", "frits@spits.nl");
    expect(createForm.isSaveButtonVisible()).toBe(true);
  });

  it('should add a contact to the list when submitting the form', function () {
    createForm.toggleVisibility();
    element(by.model('newContact.firstName')).sendKeys('Frits');
    element(by.model('newContact.surname')).sendKeys('Spits');
    element(by.model('newContact.email')).sendKeys('frits@spits.nl');
    var contacts = by.repeater('contact in contacts');
    var addButton = element(by.id('saveNewContactBtn'));
    addButton.click();
    expect(element.all(contacts).count()).toBe(3);
    var email = contacts.row(2).column('email');
    expect(element(email).getText()).toBe('frits@spits.nl');
  });

});
