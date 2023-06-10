// require modules
var Clappr = require("clappr");
var Video360 = require("clappr-video360");

// The URL to the 360 video player
var Video360Url = "video360.mp4";

// Configure your Clappr player.
var PlayerInstance = new Clappr.Player({
  source: Video360Url,
  plugins: {
    container: [Video360],
  },
  parentId: "#player",
});

// Important to disable the click to pause native plugin of clappr
// otherwise you won't be able to use correctly the player
PlayerInstance.getPlugin("click_to_pause").disable();
