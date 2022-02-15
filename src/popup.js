fetch('https://www.owlfalcon.com/popup-message')
    .then(response => response.text())
    .then(response => {
        document.getElementById('message').innerHTML = response;
    });


var backgroundPage;
let enableButton = $('#enable-button');
let disableButton = $('#disable-button');
let activeText = $('#status-active');
let inactiveText = $('#status-inactive');
let activeIcon = $('#status-active-icon');
let inactiveIcon = $('#status-inactive-icon');


(new Promise((resolve, reject) =>
    chrome.storage['sync'].get('falconEnabled', result =>
        chrome.runtime.lastError
            ? reject(Error(chrome.runtime.lastError.message))
            : resolve(result)
    )
)).then(response => {
    updateButtonVisibility(response.falconEnabled);
});


function updateButtonVisibility(isEnabled) {
    if (isEnabled) {
        disableButton.show();
        enableButton.hide();
        activeText.show();
        inactiveText.hide();
        activeIcon.show();
        inactiveIcon.hide();
    } else {
        enableButton.show();
        disableButton.hide();
        inactiveText.show();
        activeText.hide();
        inactiveIcon.show();
        activeIcon.hide();
    }
}

$('#reset-falcon-btn').on('click', function() {
    chrome.storage.sync.clear();
})

function toggleButton(enable) {
    backgroundPage.isExtensionOn = enable;

    updateButtonVisibility(backgroundPage.isExtensionOn);
    chrome.tabs.executeScript(null, {file: './assets/redirect-handler.js'})
}

chrome.runtime.getBackgroundPage(function (bgPage) {
    backgroundPage = bgPage;

    enableButton.on('click', function() {
        $('#falcon-alert').html(`<div class="alert alert-primary mt-3 mb-3"><h4>Falcon is active.</h4> Refresh your page to take effect.`)
        toggleButton(true);

        new Promise((resolve, reject) =>
            chrome.storage['sync'].set({falconEnabled: true}, () =>
                chrome.runtime.lastError
                    ? reject(Error(chrome.runtime.lastError.message))
                    : resolve()
            )
        );
    })
    disableButton.on('click', function() {
        $('#falcon-alert').html(`<div class="alert alert-warning mt-3 mb-3"><h4>Falcon has been disabled.</h4> The only thing still enabled is the purple theme of OWL, which <u>does not impact any functionality since it's just a theme</u>. Refresh your page to take effect.`)
        toggleButton(false);

        new Promise((resolve, reject) =>
            chrome.storage['sync'].set({falconEnabled: false}, () =>
                chrome.runtime.lastError
                    ? reject(Error(chrome.runtime.lastError.message))
                    : resolve()
            )
        );
    })

});

