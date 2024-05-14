export const config = {
        //
        // ====================
        // Runner Configuration
        // ====================
    
        runner: 'local',
    
        suites: {
            smoke: ['./learning_test.e2e.js'],
        },
    
        specs: ["./learning_test.e2e.js"],
    
        exclude: [],
    
        maxInstances: 10,
    
        // capabilities: [{
        //     browserName: 'chrome'
        // }],

        protocol: 'https',
        hostname: 'eu-desktop-hub.bitbar.com',
        port: 443,
        path:  '/wd/hub',

        capabilities: [{
           // services: ['bitbar'],
            'platformName': 'Windows',
            'browserName': 'chrome',
            'browserVersion': 'latest',
            'bitbar:options': {
                'project': 'WebDriverIO sample project',
                'testrun': 'NodeJS sample test',
                'apiKey': 'jTVVpn5bnWBFQMh0dNzQVVTqsRRat5rc',
                'osVersion': '11',
                'resolution': '1920x1080',
            }
          }],
    
    
        logLevel: 'info',
    
        bail: 0,
    
        baseUrl: "https://online2pdf.com",
    
        waitforTimeout: 10000,
    
        connectionRetryTimeout: 120000,
    
        connectionRetryCount: 3,
    
        framework: 'mocha',
    
        reporters: ['spec'],
    
        reporters: [
            'spec',
        ],
    
        mochaOpts: {
            ui: 'bdd',
            timeout: 600000
        },
    
        afterTest: async function (test, context, { error, result, duration, passed, retries }) {
            if (!passed) {
                await browser.takeScreenshot();
            }
           // await browser.closeWindow();
        },
    }

