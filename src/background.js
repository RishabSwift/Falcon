import FalconStorage from "./services/storage";

var isExtensionOn = true;

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {

    if (changeInfo.status === 'complete') {
        if (/^https:\/\/owl\.uwo\.ca/.test(tab.url)) {
            chrome.tabs.executeScript(null, {file: './assets/redirect-handler.js'})
        }
    }
})

console.log(2323);

// FalconStorage.sync().get('falconEnabled').then(data => {
//     console.log(222, data);
// });
//
// chrome.runtime.onInstalled.addListener(function(details){
//     FalconStorage.sync().set({
//         falconEnabled: true,
//     });
// })
