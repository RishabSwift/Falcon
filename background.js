var isExtensionOn = true;

// chrome.tabs.onActivated.addListener(tab => {
//     console.log('from here', tab.tabId)
//     start(tab.tabId);
// })

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {

    if (changeInfo.status === 'complete') {
        if (/^https:\/\/owl\.uwo\.ca/.test(tab.url)) {
            chrome.tabs.executeScript(null, {file: './assets/js/redirect_handler.js'})
        }
    }
})

// function start(tabId) {
//     chrome.tabs.get(tabId, currentTab => {
//         if (/^https:\/\/owl\.uwo\.ca/.test(currentTab.url)) {
//             // chrome.tabs.insertCSS(null, {file: './styles.css'})
//             // chrome.tabs.executeScript(null, {file: './custom.js'})
//         }
//     })
// }
