//config
exports.config = {

    onPrepare: function() {
        global.requireProviders = function(relativePath) {
            return require('./common/providers/' + relativePath + '.js');
        };

        global.requirePageObjects = function(relativePath) {
            return require('./page_objects/' + relativePath + '.js');
        };
    },

    framework: 'jasmine2',
    suites: {
        suite: [
            'suites/functional/signin/signIn.js',
        ]
    },
    capabilities: {
        browserName: 'chrome',
        shardTestFiles: false,
    },
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
        defaultTimeoutInterval: 250000,
    },
};
