import FalconStorage from "./services/storage";
import AssetInjector from "./ui/asset-injector";

class DarkMode {
    storageKey = 'darkMode'
    assetUrl = './assets/css/styles-dark.css';
    className = 'falcon-dark-mode';

    async isEnabled() {
        let darkModeEnabled = await FalconStorage.sync().get(this.storageKey);
        return darkModeEnabled[this.storageKey];
    }

    async toggle() {
        if (await this.isEnabled()) {
            await this.disable();
        } else {
            await this.enable();
        }
    }

    async enable() {
        await FalconStorage.sync().set({darkMode: true})
        AssetInjector.alsoToIframes().once().injectStyle(this.assetUrl, this.className)

    }

    async disable() {
        await FalconStorage.sync().set({darkMode: false})
        AssetInjector.alsoToIframes().removeInjectionByClassName(this.className);
    }


}
