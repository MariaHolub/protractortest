// spec.js
describe('AngularJS User Registration and Login', function() {
  it('should register user', function() {
    browser.get('http://localhost:8080/#!/register');
   
    element(by.model('vm.user.firstName')).sendKeys('testuser2');
    element(by.model('vm.user.lastName')).sendKeys('testuser2');
    element(by.model('vm.user.username')).sendKeys('testuser2');
    element(by.model('vm.user.password')).sendKeys('testuser2');

    element(by.buttonText('Register')).click();
  });
});

describe('AngularJS User Registration and Login', function() {
  it('should login user', function() {
    browser.get('http://localhost:8080/#!/login');
  
    element(by.model('vm.username')).sendKeys('testuser2');
    element(by.model('vm.password')).sendKeys('testuser2');

    element(by.buttonText('Login')).click();
   
  });
});
