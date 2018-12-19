const path = require('path');
// https://oneshaapp.herokuapp.com
module.exports = {
    devServer: {
        proxy: {
            '/api/*': {
                target: 'https://oneshaapp.herokuapp.com',
                secure: false,
            },
        },
    },
    outputDir: path.resolve(__dirname, 'public'),
};
