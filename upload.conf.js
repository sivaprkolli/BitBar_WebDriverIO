export const config = {
        //
        // ====================
        // Runner Configuration
        // ====================
    
        runner: 'local',
    
        suites: {
            smoke: ['./uploadfile.e2e.js'],
        },
    
        specs: ["./uploadfile.e2e.js"],
    
        exclude: [],
    
        maxInstances: 10,
    
        capabilities: [{
            browserName: 'chrome'
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

