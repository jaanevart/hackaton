import { createApp, ref } from "./src/deps/vue.js";

import Background from "./src/components/Background.js";
import Overlay from "./src/components/Overlay.js";
import Svg from "./src/components/Svg.js";
import Users from "./src/components/Users.js";
import Video from "./src/components/Video.js";

const App = {
  components: { Background, Overlay, Svg, Users, Video },
  template: `
  <Video />
  <Svg>
    <Background />
    <Users />
  </Svg>
  <Overlay />
  `,
};

createApp(App).mount("#app");
