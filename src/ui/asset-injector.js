const AssetInjector = {

    getFalconAsset: false,
    injectToIframes: false,
    onlyOnce: false,
    appendToEndOfBody: false,

    falconAssets: function () {
        this.getFalconAsset = true;
        return this;
    },

    owlAssets: function () {
        this.getFalconAsset = false;
        return this;
    },

    getUrl: function (url) {
        if (this.getFalconAsset) {
            return chrome.runtime.getURL(url);
        }
        return url;
    },

    // inject asset only once... MUST HAVE className to keep track of insertion
    once: function () {
        this.onlyOnce = true;
        return this;
    },

    alsoToIframes: function () {
        this.injectToIframes = true;
        return this;
    },

    injectScript: function (src, className = null) {
        let script = document.createElement('script');
        script.src = this.getUrl(src);
        if (className) {
            script.className = className;
        }
        script.onload = function () {
            // this.remove();
        };

        // let parentElement = this.appendToEndOfBody ? document.body : (document.head || document.documentElement);

        if (this.onlyOnce) {
            if ($(`.${className}`).length === 0) {
                (document.head || document.documentElement).appendChild(script);
            }
        } else {
            (document.head || document.documentElement).appendChild(script);
        }

        return this;
    },

    endOfBody() {
        this.appendToEndOfBody = true;
        return this;
    },
    endOfHead() {
        this.appendToEndOfBody = false;
        return this;
    },

    injectStyle: function (url, className = null) {

        let link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.href = this.getUrl(url);
        if (className) {
            link.className = className;
        }

        if (this.onlyOnce) {
            if ($(`.${className}`).length === 0) {
                document.body.appendChild(link.cloneNode(true));
            }
        } else {
            document.body.appendChild(link.cloneNode(true));
        }


        if (this.injectToIframes) {
            $('.portletMainIframe').contents().find('body').append(link);
        }

        return this;
    },

    removeInjectionByUrl: function (url) {
        // find out if the URL is css or js
        let mimeType = url.split('.').pop();

        if (mimeType === 'css') {
            $('link').find(`[href='${url}']`).remove();
        } else if (mimeType === 'js') {
            $('script').find(`[src='${url}']`).remove();
        }
    },

    removeInjectionByClassName: function (className) {
        $(`.${className}`).remove();

        if (this.injectToIframes) {
            $('.portletMainIframe').contents().find(`.${className}`).remove();
        }
        return this;
    },

    injectRawHtml: function (html, className = null) {
        if (this.onlyOnce) {
            if ($(`.${className}`).length === 0) {
                $(html).appendTo(document.head);
                return this;
            }
        } else {
            $(html).appendTo(document.head);
            return this;
        }

        return this;
    }


}

export default AssetInjector;
