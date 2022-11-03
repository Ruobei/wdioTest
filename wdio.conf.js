module.exports.config = {
    runner: "local",
    path: "/wd/hub",
    specs: ["./test/*-test.js"],
    maxInstances: 1,
    capabilities: [
        {
            pageLoadStrategy: "none",
            maxInstances: 1,
            browserName: "chrome",
            "goog:chromeOptions": {
                excludeSwitches: ["enable-automation"],
            },
        },
    ],
    logLevel: "warn",
    bail: 0,
    baseUrl: "http://localhost:3000",
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: [
        "chromedriver",
        "devtools",
        "intercept",
    ],
    framework: "mocha",
    mochaOpts: {
        timeout: 99999999,
    },
    reporters: ["spec"],
}
