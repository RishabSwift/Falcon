import Falcon from "./services/falcon";
import FalconStorage from "./services/storage";

const START_KEY = 'falconEnabled';

// TODO -> this is called on every request... fix this.. esp if the user navigates every single page.. this is called
// Resolve this by adding a last checked time stamp.. or even better yet, just getting this start key set up when the user installs it
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
