"use strict";

const { getMostRecentWindow } = require("sdk/window/utils")
const { getTabBrowser, activateTab } = require("sdk/tabs/utils")
const { compose } = require("sdk/lang/functional")
const { Hotkey } = require("sdk/hotkeys")

const openRelative = browser =>
  browser.addTab("about:newtab", {relatedToCurrent: true})

const openTab = compose(activateTab, openRelative,
                        getTabBrowser, getMostRecentWindow);



const hotkey = new Hotkey({combo: "accel-alt-t", onPress: openTab });
