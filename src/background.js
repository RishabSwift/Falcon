chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete') {
        if (/^https:\/\/owl\.uwo\.ca/.test(tab.url)) {
            chrome.tabs.executeScript(null, {file: './assets/redirect-handler.js'})
        }
    }
})
