$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("fundtransfer.feature");
formatter.feature({
  "line": 1,
  "name": "Customer Posts on Facebook",
  "description": "     As a customer,\n     I want to post on facebook \n     so that my friends and family could see it",
  "id": "customer-posts-on-facebook",
  "keyword": "Feature"
});
formatter.before({
  "duration": 132070097,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.gecko.driver system property; for more information, see https://github.com/mozilla/geckodriver. The latest version can be downloaded from https://github.com/mozilla/geckodriver/releases\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:199)\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:109)\n\tat org.openqa.selenium.firefox.GeckoDriverService.access$000(GeckoDriverService.java:37)\n\tat org.openqa.selenium.firefox.GeckoDriverService$Builder.findDefaultExecutable(GeckoDriverService.java:95)\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:296)\n\tat org.openqa.selenium.firefox.FirefoxDriver.createCommandExecutor(FirefoxDriver.java:277)\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:247)\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:242)\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:238)\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:127)\n\tat com.bdd.facebookTest.FacebookStepDefs.setUp(FacebookStepDefs.java:27)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:35)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:12)\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:213)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:201)\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:191)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:36)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:83)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:82)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:41)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:87)\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 6,
  "name": "Facebook post",
  "description": "",
  "id": "customer-posts-on-facebook;facebook-post",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "the user is on Facebook LoginPage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "he enters \"12bstoyanov@gmail.com\" as username",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "he enters \"password5\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "he clicks login",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "he enters \"Hello World\" as post",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "ensure the post \"Hello World\" is posted",
  "keyword": "Then "
});
formatter.match({
  "location": "FacebookStepDefs.The_user_is_on_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "12bstoyanov@gmail.com",
      "offset": 11
    }
  ],
  "location": "FacebookStepDefs.He_enters_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "password5",
      "offset": 11
    }
  ],
  "location": "FacebookStepDefs.He_enters_pass(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FacebookStepDefs.He_clicks_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello World",
      "offset": 11
    }
  ],
  "location": "FacebookStepDefs.He_enters_a_post(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello World",
      "offset": 17
    }
  ],
  "location": "FacebookStepDefs.Ensure_the_post_is_posed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 102472,
  "error_message": "java.lang.NullPointerException\n\tat com.bdd.facebookTest.FacebookStepDefs.tearDown(FacebookStepDefs.java:67)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:35)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:12)\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:213)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:201)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:195)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:42)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:83)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:82)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:41)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:87)\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\n",
  "status": "failed"
});
});