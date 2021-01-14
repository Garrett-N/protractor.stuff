exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'jasmine',
    specs: ['step0-spec.js',
        'step1-spec.js',
        'step2-spec.js',
        'step4-spec.js'],
    directConnect: true,
    // capabilities: {
    //     browserName: 'firefox'
    // },
    multiCapabilities: [{
        browserName: 'firefox'
    }, {
        browserName: 'chrome'
    }]
};