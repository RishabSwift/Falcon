autoDetectDarkMode();
$(document).ready(function () {
    $('#dark-mode-toggle').on('click', function () {
        // change up the toggle
        $("#dark-mode-toggle-icon").toggleClass('fa-toggle-on');
        if ($('#dark-mode-toggle-icon').hasClass('fa-toggle-on')) {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    })
})

async function enableDarkMode() {
    await setStorageData({darkMode: true})

    let url = './assets/css/styles-dark.css';
    if ($('.darkmode-style').length === 0) {
        injectStyle(url, 'darkmode-style');
    }

    // inject to iframe...
    injectStyleToiFrame(url, 'darkmode-style')
}

async function disableDarkMode() {
    await setStorageData({darkMode: false})
    $('.darkmode-style').remove();
    $('.portletMainIframe').contents().find('.darkmode-style').remove();
}

async function autoDetectDarkMode() {
    let darkModeEnabled = await getStorageData('darkMode');
    if (darkModeEnabled.darkMode) {
        $('#dark-mode-toggle-icon').addClass('fa-toggle-on');
        await enableDarkMode();
    } else {
        await disableDarkMode();
    }

    return darkModeEnabled.darkMode;
}

function getStorageData(key) {
    return new Promise((resolve, reject) =>
        chrome.storage.sync.get(key, result =>
            chrome.runtime.lastError
                ? reject(Error(chrome.runtime.lastError.message))
                : resolve(result)
        )
    );
}


function setStorageData(data) {
    return new Promise((resolve, reject) =>
        chrome.storage.sync.set(data, () =>
            chrome.runtime.lastError
                ? reject(Error(chrome.runtime.lastError.message))
                : resolve()
        )
    );
}