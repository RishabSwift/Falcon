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
