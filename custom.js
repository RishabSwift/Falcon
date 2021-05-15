$PBJQ = jQuery;

var portal = {
    loggedIn: true,
    enabled: true,
}

if (typeof Handlebars == 'undefined') {
    appendScript('https://owl.uwo.ca/library/webjars/handlebars/4.0.6/handlebars.runtime.min.js?version=20_2-owl1');
}


function appendScript(filepath) {
    if ($('head script[src="' + filepath + '"]').length > 0)
        return;

    var ele = document.createElement('script');
    ele.setAttribute("type", "text/javascript");
    ele.setAttribute("src", filepath);
    $('head').append(ele);
}

// fix assignment ASN is not defined thingy
injectScript('./assets/js/dist/assignment.js')
// injectScript('./assets/js/dark_mode.js');

injectStyle('./assets/css/styles.css');
injectStyle('./assets/css/owl-components.css');
injectStyle('./assets/css/lesson-builder.css');
injectStyle('./assets/css/lesson-builder-checklist.css');
injectStyle('./assets/css/tablesorter-bs4.min.css');

function injectScript(src) {
    var s = document.createElement('script');
    s.src = chrome.runtime.getURL(src);
    s.onload = function () {
        this.remove();
    };
    (document.head || document.documentElement).appendChild(s);
}

// Duplicate... :(
// Someone please fix it and make it follow DRY
function injectStyle(link, className = null) {
    var s = document.createElement('link');
    s.setAttribute('rel', 'stylesheet');
    s.href = chrome.runtime.getURL(link);
    if (className) {
        s.className = className;
    }
    document.body.appendChild(s.cloneNode(true));
    $('.portletMainIframe').contents().find('body').append(s);

    // if there's iframe, inject it tehre too
}

function injectStyleToiFrame(link, className = null) {
    var s = document.createElement('link');
    s.setAttribute('rel', 'stylesheet');
    s.href = chrome.runtime.getURL(link);
    if (className) {
        s.className = className;
    }

    $('iframe').load(function () {
        $('.portletMainIframe').contents().find('body').append(s);
    });

}

//


$dark_mode_button = `<div class="Mrphs-sitesNav__menuitem"><a href="javascript:;" id="dark-mode-toggle" class="dark-mode-toggle">
   <i id="dark-mode-toggle-icon" class="fa fa-toggle-off mr-3"></i>
    <span>Dark Mode</span></a></div>`;

$(".Mrphs-loginNav").prepend($dark_mode_button);
