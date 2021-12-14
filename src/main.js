import Falcon from "./services/falcon";
import FalconStorage from "./services/storage";

const START_KEY = 'falconEnabled';

FalconStorage.sync().get(START_KEY).then(data => {
    console.log(data.falconEnabled);
    if (data.falconEnabled) {
        Falcon.start();
    }
})

