// If a 301/302 redirect has occurred, force refresh the page since we cannot catch that via standard XHR request
bodyExists = !!document.getElementsByTagName('body').length;
if (!bodyExists) {
    window.location.reload();
}
