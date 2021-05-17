fetch('https://rishab.me/falcon/YdkgJSKSrlWagLYNlT5Q')
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


enableButton.on('click', function() {
    toggleButton(false);
})
disableButton.on('click', function() {
    toggleButton(false);
})


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

function toggleButton(enable) {
    backgroundPage.isExtensionOn = enable;

    updateButtonVisibility(backgroundPage.isExtensionOn);
}

chrome.runtime.getBackgroundPage(function (bgPage) {
    backgroundPage = bgPage;
    updateButtonVisibility(bgPage.isExtensionOn);

    enableButton.on('click', function() {
        toggleButton(true);
    })
    disableButton.on('click', function() {
        toggleButton(false);
    })

});

