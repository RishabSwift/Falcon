import Falcon from "./services/falcon";
import FalconStorage from "./services/storage";

const START_KEY = 'falconEnabled';


FalconStorage.sync().get(START_KEY).then(data => {
    if (Object.keys(data).length === 0) {
        FalconStorage.sync().set({
            falconEnabled: true,
        }).then(() => {
            Falcon.start();
        })
    }

    if (data.falconEnabled) {
        Falcon.start();
    }
})

