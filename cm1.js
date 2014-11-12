
var target = UIATarget.localTarget();

var app = target.frontMostApp();

var win = app.mainWindow();

win.buttons()["ALREADY A CLOUDMAGIC USER? LOG IN →"].tap();

var scrollview = win.scrollViews()[0];
var email = scrollview.elements()["Email"];
email.tap();
email.setValue("manoj_m@webyog.com");


var pwd = scrollview.elements()["Password"];
pwd.tap();
pwd.setValue("test");
scrollview.elements()["Log In"].tap();

//app.mainWindow().logElementTree();