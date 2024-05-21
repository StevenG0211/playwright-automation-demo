# PLAYWRIGHT AUTOMATION DEMO
End 2 End Automation repository to hold the Automation Demo for the Demo Casino Web App
 - Including negative scenarios and two reporting tools

#### Before Starting
The Playwright version being used is the latest one, which uses `ESNext` for Typescript `tsconfig.json` in the `module` compilerOptions, hence, it requires the LTS version of [**Node.js**](https://nodejs.org/es/download/) 

#### Technologies used
- Playwright (Node.js)
- Typescript
- Expect as Assertion Library
- Allure Reports

#### How to install the project.

First, clone the code repository `$ git clone https://github.com/GSGranados/latmobile-automation-challenge.git` and
`cd <project_cloned>`

After that, open an integrated terminal and execute the *NPM Install* command: 

```
$ npm ci -- to install all required dependencies to run the Automation Framework

$ npx playwright install --with-deps -- To install Playwright latest version with all dependencies

$ npm run test -- it will run the functional spec file. The Demo Casino sign up Spec

$ npm run test:negative -- it will run the negative spec file. The Demo Casino negative Spec
```


##### Generate and Open Allure reports

For visualizing the Automation execution you need to have installed previously [Java JDK](https://www.oracle.com/java/technologies/downloads/#java17) and being added to the PATH Environment variable to allow the Allure report to be launched - in case you want to skip this step, it's okay, use the HTML Reports instead with `npm run reports:html`.

Once that is installed, you can run the `npm run reports:allure` script on the integrated terminal of the project to launch a local server with the Allure report results, after the Test Execution.

### Running the test scripts headless
There is an environment variable located at  `env.template`. 
that is called HEADLESS_MODE you can set the value to TRUE or FALSE
 - Create an .env file and copy that variable so the process.env object can utilize this value

#### Important Note
Keep in mind that since this is a Demo website, some ADS might be appearing middle execution