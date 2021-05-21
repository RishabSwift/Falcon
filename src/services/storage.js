/**
 This storage file is responsible for saving data using the browser storage sync/local API
 */

const FalconStorage = {

    api: 'sync', // sync OR local

    setup: () => {

    },

    sync: () => {
        FalconStorage.api = 'sync';
        return FalconStorage;
    },

    local: () => {
        FalconStorage.api = 'local';
        return FalconStorage;
    },

    get: (key) => {
        return new Promise((resolve, reject) =>
            chrome.storage[FalconStorage.api].get(key, result =>
                chrome.runtime.lastError
                    ? reject(Error(chrome.runtime.lastError.message))
                    : resolve(result)
            )
        );
    },

    set: (data) => {
        return new Promise((resolve, reject) =>
            chrome.storage[FalconStorage.api].set(data, () =>
                chrome.runtime.lastError
                    ? reject(Error(chrome.runtime.lastError.message))
                    : resolve()
            )
        );
    },

    // data = array returned from FalconStorage.get()
    existsInStorage: (data, index, matching) => {
        return data.findIndex(item => item[index] === matching) !== -1;
    }
}

export default FalconStorage;
