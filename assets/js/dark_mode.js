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
    $('#dark-mode-toggle').attr('data-dark-mode-enabled', true);

    let url = './assets/css/styles-dark.css';
    if ($('.darkmode-style').length === 0) {
        injectStyle(url, 'darkmode-style');
    }

    if ($('#dark-mode-toggle').attr('data-dark-mode-enabled') === "true") { // saved as string literal
        injectStyleToiFrame(url, 'darkmode-style')
    }
    $('#wciframe').css('filter', 'invert(1)')
    // inject to iframe...
}

async function disableDarkMode() {
    await setStorageData({darkMode: false})
    $('#dark-mode-toggle').attr('data-dark-mode-enabled', false);
    $('.darkmode-style').remove();
    $('#wciframe').css('filter', '')
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
