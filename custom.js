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
injectRawScript();
reparseMathLatex();
injectOwlScript('/library/js/mathjax/MathJax.js?config=default,Safe');
injectStyle('./assets/css/styles.css');
injectStyle('./assets/css/owl-components.css');
injectStyle('./assets/css/lesson-builder.css');
injectStyle('./assets/css/lesson-builder-checklist.css');
injectStyle('./assets/css/tablesorter-bs4.min.css');
injectStyleToiFrame('./assets/css/preload.css');

function injectScript(src) {
    var s = document.createElement('script');
    s.src = chrome.runtime.getURL(src);
    s.onload = function () {
        this.remove();
    };
    (document.head || document.documentElement).appendChild(s);
}

function injectOwlScript(src) {
    var s = document.createElement('script');
    s.src = src;
    s.onload = function () {
        // this.remove();
    };
    (document.head || document.documentElement).appendChild(s);
}

function reparseMathLatex() {
    let func = "function parseMath() {MathJax.Hub.Typeset()}";
    var script = document.createElement('script');
    script.setAttribute('type', 'application/javascript');
    script.textContent = func;
    document.head.appendChild(script);
}

function injectRawScript() {
   $(`<script type="text/x-mathjax-config">
       MathJax.Hub.Config({
       messageStyle: "none",
       tex2jax:  { inlineMath: [['\\\\(','\\\\)']] }
   });
   </script>`).appendTo(document.head);
    //
    // $('<script type="text/x-mathjax-config"> MathJax.Hub.Config({ messageStyle: "none", tex2jax: {inlineMath: [['\\(', '\\)']]}});</script>).appendTo(document.head);
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
            if (className  && className === 'darkmode-style' && $('#dark-mode-toggle').attr('data-dark-mode-enabled') === "true") { // saved as string literal
                $('.portletMainIframe').contents().find('body').append(s);
            } else {
                if (!className) {
                    $('.portletMainIframe').contents().find('body').append(s);
                }
            }
        });
}

//


$dark_mode_button = `<div class="Mrphs-sitesNav__menuitem"><a href="javascript:;" id="dark-mode-toggle" class="dark-mode-toggle">
   <i id="dark-mode-toggle-icon" class="fa fa-toggle-off mr-3"></i>
    <span>Dark Mode</span></a></div>`;

$(".Mrphs-loginNav").prepend($dark_mode_button);

// https://stackoverflow.com/questions/3177836/how-to-format-time-since-xxx-e-g-4-minutes-ago-similar-to-stack-exchange-site
function time_ago(time) {

    switch (typeof time) {
        case 'number':
            break;
        case 'string':
            time = +new Date(time);
            break;
        case 'object':
            if (time.constructor === Date) time = time.getTime();
            break;
        default:
            time = +new Date();
    }
    var time_formats = [
        [60, 'seconds', 1], // 60
        [120, '1 minute ago', '1 minute from now'], // 60*2
        [3600, 'minutes', 60], // 60*60, 60
        [7200, '1 hour ago', '1 hour from now'], // 60*60*2
        [86400, 'hours', 3600], // 60*60*24, 60*60
        [172800, 'Yesterday', 'Tomorrow'], // 60*60*24*2
        [604800, 'days', 86400], // 60*60*24*7, 60*60*24
        [1209600, 'Last week', 'Next week'], // 60*60*24*7*4*2
        [2419200, 'weeks', 604800], // 60*60*24*7*4, 60*60*24*7
        [4838400, 'Last month', 'Next month'], // 60*60*24*7*4*2
        [29030400, 'months', 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
        [58060800, 'Last year', 'Next year'], // 60*60*24*7*4*12*2
        [2903040000, 'years', 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
        [5806080000, 'Last century', 'Next century'], // 60*60*24*7*4*12*100*2
        [58060800000, 'centuries', 2903040000] // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
    ];
    var seconds = (+new Date() - time) / 1000,
        token = 'ago',
        list_choice = 1;


    if (seconds === 0 || seconds < 0.05) {
        return 'just now'
    }
    if (seconds < 0) {
        seconds = Math.abs(seconds);
        token = 'from now';
        list_choice = 2;
    }
    var i = 0,
        format;
    while (format = time_formats[i++])
        if (seconds < format[0]) {
            if (typeof format[2] == 'string')
                return format[list_choice];
            else
                return Math.floor(seconds / format[2]) + ' ' + format[1] + ' ' + token;
        }
    return time;
}


