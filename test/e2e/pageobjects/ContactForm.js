"use strict";
var CreateForm = function () {

  this.fillIn = function (firstName, lastName, email) {
    element(by.model('newContact.firstName')).sendKeys(firstName);
    element(by.model('newContact.surname')).sendKeys(lastName);
    element(by.model('newContact.email')).sendKeys(email);
  };

  this.contains = function (firstName, lastName, email) {
    var fName = element(by.model('newContact.firstName')).getAttribute('value');
    var lName = element(by.model('newContact.surname')).getAttribute('value');
    var eMail = element(by.model('newContact.email')).getAttribute('value');
    if (fName != firstName) {
      return false;
    }
    if (lName != lastName) {
      return false;
    }
    if (eMail != email) {
      return false;
    }
  };

  //
  // wanted:
  //
  // function show() {
  //    if(form.invisible) {
  //      press button
  //    }
  // }
  //function hide() {
  //    if(form.visible) {
  //      press button
  //    }
  // }
  //


  // tried:
  //
  // isDisplayed()
  //    returns object, not true/false
  //
  // $().is('visible')
  //    protractor be like "what is $"
  //
  // document.getElementById().style.visibility
  //    protractor be like "what is document"
  //
  //element(by.id("newContactForm")).isDisplayed().then(this.doShow(result));
  //    protractor be like "result is undefined"
  //
  // element(by.id("newContactForm")).getAttribute("visibility")
  //    protractor be like
  // { ptor_:
  //  { controlFlow: [Function],
  //    schedule: [Function],
  //    setFileDetector: [Function],
  //    getSession: [Function],
  //    getCapabilities: [Function],
  //    quit: [Function],
  //    actions: [Function],
  //    touchActions: [Function],
  //    executeScript: [Function],
  //    executeAsyncScript: [Function],
  //    call: [Function],
  //    wait: [Function],
  //    sleep: [Function],
  //    getWindowHandle: [Function],
  //    getAllWindowHandles: [Function],
  //    getPageSource: [Function],
  //    close: [Function],
  //    getCurrentUrl: [Function],
  //    getTitle: [Function],
  //    findElementInternal_: [Function],
  //    findDomElement_: [Function],
  //    findElementsInternal_: [Function],
  //    takeScreenshot: [Function],
  //    manage: [Function],
  //    switchTo: [Function],
  //    driver:
  //    Object {
  //    session_: [Object],
  //      executor_: [Object],
  //      flow_: [Object],
  //      fileDetector_: null },
  //    element: { [Function] all: [Function] },
  //    '$': [Function],
  //    '$$': [Function],
  //    baseUrl: 'http://localhost:6543',
  //    rootEl: 'body',
  //    ignoreSynchronization: false,
  //    getPageTimeout: 10000,
  //    params: {},
  //    ready:
  //      Object {
  //    closure_uid_868512639: 12,
  //      flow_: [Object],
  //      stack_: null,
  //      parent_: null,
  //      callbacks_: null,
  //      state_: 'fulfilled',
  //      handled_: true,
  //      value_: null,
  //      queue_: null },
  //    plugins_:
  //    { pluginConfs: [],
  //      pluginObjs: [],
  //      assertions: {},
  //      resultsReported: false },
  //    resetUrl: 'data:text/html,<html></html>',
  //      trackOutstandingTimeouts_: true,
  //    mockModules_: [ [Object] ],
  //    allScriptsTimeout: 11000,
  //    getProcessedConfig: [Function],
  //    forkNewDriverInstance: [Function],
  //    restart: [Function] },
  //  parentElementArrayFinder:
  //  { ptor_:
  //  { controlFlow: [Function],
  //    schedule: [Function],
  //    setFileDetector: [Function],
  //    getSession: [Function],
  //    getCapabilities: [Function],
  //    quit: [Function],
  //    actions: [Function],
  //    touchActions: [Function],
  //    executeScript: [Function],
  //    executeAsyncScript: [Function],
  //    call: [Function],
  //    wait: [Function],
  //    sleep: [Function],
  //    getWindowHandle: [Function],
  //    getAllWindowHandles: [Function],
  //    getPageSource: [Function],
  //    close: [Function],
  //    getCurrentUrl: [Function],
  //    getTitle: [Function],
  //    findElementInternal_: [Function],
  //    findDomElement_: [Function],
  //    findElementsInternal_: [Function],
  //    takeScreenshot: [Function],
  //    manage: [Function],
  //    switchTo: [Function],
  //    driver: [Object],
  //    element: [Object],
  //    '$': [Function],
  //    '$$': [Function],
  //    baseUrl: 'http://localhost:6543',
  //    rootEl: 'body',
  //    ignoreSynchronization: false,
  //    getPageTimeout: 10000,
  //    params: {},
  //    ready: [Object],
  //      plugins_: [Object],
  //    resetUrl: 'data:text/html,<html></html>',
  //    trackOutstandingTimeouts_: true,
  //    mockModules_: [Object],
  //    allScriptsTimeout: 11000,
  //    getProcessedConfig: [Function],
  //    forkNewDriverInstance: [Function],
  //    restart: [Function] },
  //    getWebElements: [Function],
  //      actionResults_:
  //    Object {
  //    closure_uid_868512639: 331,
  //      flow_: [Object],
  //      stack_: null,
  //      parent_: [Object],
  //      callbacks_: null,
  //      state_: 'pending',
  //      handled_: false,
  //      value_: undefined,
  //      queue_: null },
  //    locator_: Object { using: 'id', value: 'newContactForm' } },
  //  then: [Function],
  //    elementArrayFinder_:
  //  { ptor_:
  //  { controlFlow: [Function],
  //    schedule: [Function],
  //    setFileDetector: [Function],
  //    getSession: [Function],
  //    getCapabilities: [Function],
  //    quit: [Function],
  //    actions: [Function],
  //    touchActions: [Function],
  //    executeScript: [Function],
  //    executeAsyncScript: [Function],
  //    call: [Function],
  //    wait: [Function],
  //    sleep: [Function],
  //    getWindowHandle: [Function],
  //    getAllWindowHandles: [Function],
  //    getPageSource: [Function],
  //    close: [Function],
  //    getCurrentUrl: [Function],
  //    getTitle: [Function],
  //    findElementInternal_: [Function],
  //    findDomElement_: [Function],
  //    findElementsInternal_: [Function],
  //    takeScreenshot: [Function],
  //    manage: [Function],
  //    switchTo: [Function],
  //    driver: [Object],
  //    element: [Object],
  //    '$': [Function],
  //    '$$': [Function],
  //    baseUrl: 'http://localhost:6543',
  //    rootEl: 'body',
  //    ignoreSynchronization: false,
  //    getPageTimeout: 10000,
  //    params: {},
  //    ready: [Object],
  //      plugins_: [Object],
  //    resetUrl: 'data:text/html,<html></html>',
  //    trackOutstandingTimeouts_: true,
  //    mockModules_: [Object],
  //    allScriptsTimeout: 11000,
  //    getProcessedConfig: [Function],
  //    forkNewDriverInstance: [Function],
  //    restart: [Function] },
  //    getWebElements: [Function],
  //      actionResults_:
  //    Object {
  //    closure_uid_868512639: 331,
  //      flow_: [Object],
  //      stack_: null,
  //      parent_: [Object],
  //      callbacks_: null,
  //      state_: 'pending',
  //      handled_: false,
  //      value_: undefined,
  //      queue_: null },
  //    locator_: Object { using: 'id', value: 'newContactForm' } } }
  //  .{ ptor_:
  //{ controlFlow: [Function],
  //  schedule: [Function],
  //  setFileDetector: [Function],
  //  getSession: [Function],
  //  getCapabilities: [Function],
  //  quit: [Function],
  //  actions: [Function],
  //  touchActions: [Function],
  //  executeScript: [Function],
  //  executeAsyncScript: [Function],
  //  call: [Function],
  //  wait: [Function],
  //  sleep: [Function],
  //  getWindowHandle: [Function],
  //  getAllWindowHandles: [Function],
  //  getPageSource: [Function],
  //  close: [Function],
  //  getCurrentUrl: [Function],
  //  getTitle: [Function],
  //  findElementInternal_: [Function],
  //  findDomElement_: [Function],
  //  findElementsInternal_: [Function],
  //  takeScreenshot: [Function],
  //  manage: [Function],
  //  switchTo: [Function],
  //  driver:
  //  Object {
  //  session_: [Object],
  //    executor_: [Object],
  //    flow_: [Object],
  //    fileDetector_: null },
  //  element: { [Function] all: [Function] },
  //  '$': [Function],
  //  '$$': [Function],
  //  baseUrl: 'http://localhost:6543',
  //  rootEl: 'body',
  //  ignoreSynchronization: false,
  //  getPageTimeout: 10000,
  //  params: {},
  //  ready:
  //    Object {
  //  closure_uid_868512639: 12,
  //    flow_: [Object],
  //    stack_: null,
  //    parent_: null,
  //    callbacks_: null,
  //    state_: 'fulfilled',
  //    handled_: true,
  //    value_: null,
  //    queue_: null },
  //  plugins_:
  //  { pluginConfs: [],
  //    pluginObjs: [],
  //    assertions: {},
  //    resultsReported: false },
  //  resetUrl: 'data:text/html,<html></html>',
  //    trackOutstandingTimeouts_: true,
  //  mockModules_: [ [Object] ],
  //  allScriptsTimeout: 11000,
  //  getProcessedConfig: [Function],
  //  forkNewDriverInstance: [Function],
  //  restart: [Function] },
  //  parentElementArrayFinder:
  //  { ptor_:
  //  { controlFlow: [Function],
  //    schedule: [Function],
  //    setFileDetector: [Function],
  //    getSession: [Function],
  //    getCapabilities: [Function],
  //    quit: [Function],
  //    actions: [Function],
  //    touchActions: [Function],
  //    executeScript: [Function],
  //    executeAsyncScript: [Function],
  //    call: [Function],
  //    wait: [Function],
  //    sleep: [Function],
  //    getWindowHandle: [Function],
  //    getAllWindowHandles: [Function],
  //    getPageSource: [Function],
  //    close: [Function],
  //    getCurrentUrl: [Function],
  //    getTitle: [Function],
  //    findElementInternal_: [Function],
  //    findDomElement_: [Function],
  //    findElementsInternal_: [Function],
  //    takeScreenshot: [Function],
  //    manage: [Function],
  //    switchTo: [Function],
  //    driver: [Object],
  //    element: [Object],
  //    '$': [Function],
  //    '$$': [Function],
  //    baseUrl: 'http://localhost:6543',
  //    rootEl: 'body',
  //    ignoreSynchronization: false,
  //    getPageTimeout: 10000,
  //    params: {},
  //    ready: [Object],
  //      plugins_: [Object],
  //    resetUrl: 'data:text/html,<html></html>',
  //    trackOutstandingTimeouts_: true,
  //    mockModules_: [Object],
  //    allScriptsTimeout: 11000,
  //    getProcessedConfig: [Function],
  //    forkNewDriverInstance: [Function],
  //    restart: [Function] },
  //    getWebElements: [Function],
  //      actionResults_:
  //    Object {
  //    closure_uid_868512639: 1008,
  //      flow_: [Object],
  //      stack_: null,
  //      parent_: [Object],
  //      callbacks_: null,
  //      state_: 'pending',
  //      handled_: false,
  //      value_: undefined,
  //      queue_: null },
  //    locator_: Object { using: 'id', value: 'newContactForm' } },
  //  then: [Function],
  //    elementArrayFinder_:
  //  { ptor_:
  //  { controlFlow: [Function],
  //    schedule: [Function],
  //    setFileDetector: [Function],
  //    getSession: [Function],
  //    getCapabilities: [Function],
  //    quit: [Function],
  //    actions: [Function],
  //    touchActions: [Function],
  //    executeScript: [Function],
  //    executeAsyncScript: [Function],
  //    call: [Function],
  //    wait: [Function],
  //    sleep: [Function],
  //    getWindowHandle: [Function],
  //    getAllWindowHandles: [Function],
  //    getPageSource: [Function],
  //    close: [Function],
  //    getCurrentUrl: [Function],
  //    getTitle: [Function],
  //    findElementInternal_: [Function],
  //    findDomElement_: [Function],
  //    findElementsInternal_: [Function],
  //    takeScreenshot: [Function],
  //    manage: [Function],
  //    switchTo: [Function],
  //    driver: [Object],
  //    element: [Object],
  //    '$': [Function],
  //    '$$': [Function],
  //    baseUrl: 'http://localhost:6543',
  //    rootEl: 'body',
  //    ignoreSynchronization: false,
  //    getPageTimeout: 10000,
  //    params: {},
  //    ready: [Object],
  //      plugins_: [Object],
  //    resetUrl: 'data:text/html,<html></html>',
  //    trackOutstandingTimeouts_: true,
  //    mockModules_: [Object],
  //    allScriptsTimeout: 11000,
  //    getProcessedConfig: [Function],
  //    forkNewDriverInstance: [Function],
  //    restart: [Function] },
  //    getWebElements: [Function],
  //      actionResults_:
  //    Object {
  //    closure_uid_868512639: 1008,
  //      flow_: [Object],
  //      stack_: null,
  //      parent_: [Object],
  //      callbacks_: null,
  //      state_: 'pending',
  //      handled_: false,
  //      value_: undefined,
  //      queue_: null },
  //    locator_: Object { using: 'id', value: 'newContactForm' } } }
  //


  // solution:
  // shoot self


  this.toggleVisibility = function() {
    element(by.id("addNewContactBtn")).click();
  };

  this.isSaveButtonVisible = function () {
    return element(by.id("saveNewContactBtn")).isEnabled();
  };
};

var EditForm = function () {

};
module.exports = CreateForm, EditForm;
