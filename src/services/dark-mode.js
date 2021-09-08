import FalconStorage from "./storage";
import AssetInjector from "../ui/asset-injector";
import FalconInterfaceInjector from "../ui/ui-injector";

class FalconDarkMode {
    storageKey = 'darkMode'
    assetUrl = './assets/falcon-dark.css';
    assetUrlLight = './assets/falcon.css';
    className = 'falcon-dark-mode';
    classNameLight = 'falcon-normal-mode';
    isDarkModeEnabled;

    constructor() {
        FalconInterfaceInjector.darkModeButton();
        this.setupEventListeners();
        this.isEnabled().then(({darkMode}) => {
            this.isDarkModeEnabled = darkMode;
            this.isDarkModeEnabled ? this.injectDarkMode() : this.removeDarkMode();
        })
    }

    setupEventListeners() {
        let self = this;
        $('#dark-mode-toggle').on('click', function () {
            self.toggle();
        })
    }

    isEnabled() {
        return FalconStorage.sync().get(this.storageKey);
    }

    toggle() {
        if (this.isDarkModeEnabled) {
            this.removeDarkMode();
            this.disable();
        } else {
            this.injectDarkMode();
            this.enable();
        }
    }

    injectDarkMode() {
        AssetInjector.falconAssets().alsoToIframes().once().injectStyle(this.assetUrl, this.className)
        $("#dark-mode-toggle-icon").addClass('fa-toggle-on');
        this.isDarkModeEnabled = true;
        this.fixPortalColors();
    }

    removeDarkMode() {
        // AssetInjector.falconAssets().alsoToIframes().once().injectStyle(this.assetUrlLight, this.classNameLight);
        AssetInjector.falconAssets().alsoToIframes().removeInjectionByClassName(this.className);
        $("#dark-mode-toggle-icon").removeClass('fa-toggle-on');
        this.isDarkModeEnabled = false
    }

    fixPortalColors() {
        // sometimes instructors set certain colors to the portal (like black for text) which, when dark mode is enabled, cannot be overwritten as easily.
        // so remove those overwritten styles
        $('.portletBody.siteDescription [style*="background-color"]').css('background-color', '');
        $('.portletBody.siteDescription [style*="background"]').css('background-color', '');
        $('.portletBody.siteDescription [style*="color"]').css('color', '');
    }

    // Enable and disable are separate from the injectDarkMode and removeDarkMode because we don't want to save the settings everytime from the constructor
    enable() {
        FalconStorage.sync().set({darkMode: true})
    }

    disable() {
        FalconStorage.sync().set({darkMode: false})
    }


}

export default FalconDarkMode;
