export const config = {
        //
        // ====================
        // Runner Configuration
        // ====================
    
        runner: 'local',
    
        suites: {
            smoke: ['./uploadfile_test.js'],
        },
    
        specs: ["./uploadfile_test.js"],
    
        exclude: [],
    
        maxInstances: 1,
    
        capabilities: [{
            browserName: 'chrome'
        }],
    
        logLevel: 'info',
    
        bail: 0,
    
        baseUrl: "https://online2pdf.com",
    
        waitforTimeout: 100000,
    
        connectionRetryTimeout: 1200000,
    
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

