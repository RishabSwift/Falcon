let mix = require('laravel-mix');
let del = require('del');

let MergeJsonWebpackPlugin = require("merge-jsons-webpack-plugin");

mix.js(['src/main.js'], 'dist/falcon.js');
mix.sass('src/assets/scss/falcon.scss', 'dist/falcon.css')
mix.sass('src/assets/scss/nightowl/_falcon-dark.scss', 'dist/falcon-dark.css')

mix.copy('src/background.js', 'dist/chrome/background.js')
    .copy('src/options.html', 'dist/chrome/options.html')
    .copy('src/popup.html', 'dist/chrome/popup.html')
    .copy('src/popup.js', 'dist/chrome/popup.js')
    .copy('dist/falcon.js', 'dist/chrome/assets/falcon.js')
    .copy('dist/falcon.css', 'dist/chrome/assets/falcon.css')
    .copy('dist/falcon-dark.css', 'dist/chrome/assets/falcon-dark.css')
    .copy('src/assets/css/popup-app.css', 'dist/chrome/assets/popup-app.css')
    .copy('src/assets/js/dist/jquery-2.2.4.min.js', 'dist/chrome/assets/jquery-2.2.4.min.js')
    .copy('src/services/redirect-handler.js', 'dist/chrome/assets/redirect-handler.js')
    .copyDirectory('images/icons', 'dist/chrome/images')
    .copyDirectory('src/assets/fonts', 'dist/chrome/fonts')
    .then(() => {
        del('dist/falcon.css');
        del('dist/falcon.js');
});

// join manifest files and copy to dist/chrome
// copy background.js to dist/chrome/background.js
// copy fonts to dist/chrome/fonts
// options.html, popup.html, popup.js to dist/chrome/
mix.webpackConfig({
    plugins: [
        new MergeJsonWebpackPlugin({
            "files": [
                './manifest/common.json',
                './manifest/chrome.json',
            ],
            "output": {
                "fileName": 'dist/chrome/manifest.json'
            }
        })
    ]
})

