var testName = "Module 001 Test";
UIALogger.logStart(testName);

#import "version.txt"
#import "bundleID.txt"


UIATarget.localTarget().frontMostApp().mainWindow().tableViews()[0].cells()[0].logElementTree();
var name = UIATarget.localTarget().frontMostApp().mainWindow().tableViews()[0].cells()[0].name();
UIALogger.logMessage(name);
var app = target.frontMostApp();

//set orientation to landscape left
target.setDeviceOrientation(UIA_DEVICE_ORIENTATION_LANDSCAPELEFT);
UIALogger.logMessage("Current orientation now " + app.interfaceOrientation());
//reset orientation to portrait
target.setDeviceOrientation(UIA_DEVICE_ORIENTATION_PORTRAIT);
UIALogger.logMessage("Current orientation now " + app.interfaceOrientation());

UIATarget.localTarget().delay(1);
UIALogger.logMessage("Scroll UP");
//UIATarget.localTarget().frontMostApp().mainWindow().tableViews()[0].scrollDown();
//UIATarget.localTarget().delay(1);
//UIATarget.localTarget().frontMostApp().mainWindow().tableViews()[0].scrollDown();
//UIATarget.localTarget().delay(1);
//UIATarget.localTarget().frontMostApp().mainWindow().tableViews()[0].scrollDown();
//UIALogger.logMessage("Scroll DONE");
//UIATarget.localTarget().delay(1);
//UIALogger.logMessage("Scroll DOWN");
//UIATarget.localTarget().frontMostApp().mainWindow().tableViews()[0].scrollUp();
//UIATarget.localTarget().delay(1);
//UIATarget.localTarget().frontMostApp().mainWindow().tableViews()[0].scrollUp();
//UIATarget.localTarget().delay(1);
//UIATarget.localTarget().frontMostApp().mainWindow().tableViews()[0].scrollUp();
//UIALogger.logMessage("Scroll DONE");

if (name == "Abidjan") {
UIALogger.logPass(testName);
} else {
   UIALogger.logFail(testName); 
}
