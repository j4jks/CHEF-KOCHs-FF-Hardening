/*
 * === LINUX ===
 *
 * These settings are specific to Linux Mint, but should work with any Debian based distro which uses the APT (Advanced Package Tool) package manager - if you're not running a Debian-based distro, or not running Linux, comment these out
*/

user_pref("network.protocol-handler.app.apt", "/usr/bin/apturl");       // path to APT URL handler
user_pref("network.protocol-handler.app.apt+http", "/usr/bin/apturl");  // path to APT URL handler
user_pref("network.protocol-handler.warn-external.apt", true);
user_pref("network.protocol-handler.warn-external.apt+http", true);

/*
 * === GHACKS DIFFS ===
 *
 * These prefs are duplicates of the ghacks.net settings above with different values
*/

//user_pref("reader.parse-on-load.enabled", true);              // Disable "Reader View"
user_pref("browser.urlbar.decodeURLsOnCopy", true);             // Copying non-ASCII URI from location bar
user_pref("browser.storageManager.enabled", false);             // enables Site Data in Preferences in conjunction with "dom.storageManager.enabled", true 
user_pref("browser.bookmarks.max_backups", 5);                  // i don't mind keeping a few extra backups of my bookmarks
user_pref("browser.download.forbid_open_with", false);          // allow the 'open with' option when downloading a file
user_pref("browser.tabs.animate", true);                        // allow tab animation
user_pref("browser.urlbar.autoFill", true);                     // allow auto-complete of text entered in the address bar
user_pref("browser.urlbar.autoFill.typed", true);               // allow auto-complete of text entered in the address bar
user_pref("browser.urlbar.autocomplete.enabled", true);         // allow auto-complete of text entered in the address bar
user_pref("browser.urlbar.maxRichResults", 10);                 // max number of search suggestions when searching in the address bar
user_pref("browser.urlbar.suggest.bookmark", true);             // allow auto-complete of text entered in the address bar
user_pref("browser.urlbar.suggest.history", true);              // allow auto-complete of text entered in the address bar
user_pref("dom.event.contextmenu.enabled", false);              //
user_pref("dom.IntersectionObserver.enabled", false);           // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
user_pref("dom.event.clipboardevents.enabled", true);           // 'false' breaks TinyMCE editor paste (Ctrl+V) such as is used by WordPress, possibly others
user_pref("dom.indexedDB.enabled", true);                       // as ghacks said, disabling this will break some sites
// allow all default JS pop-up events
user_pref("dom.popup_allowed_events", "change click dblclick mouseup notificationclick reset submit touchend");
user_pref("dom.popup_maximum", 5);                              // allow a couple extra JS pop-ups just in case a site, such as a store/shopping cart, needs them
user_pref("font.name.monospace.x-unicode", "Andale Mono");      // set this back to its default
user_pref("font.name.monospace.x-western", "Andale Mono");      // set this back to its default
user_pref("full-screen-api.enabled", true);                     // enable full-screen video capability
user_pref("layout.css.visited_links_enabled", true);            // though it is a privacy trade-off, differentiating between visited and not visited links is important to me
user_pref("layout.spellcheckDefault", 2);                       // enable spell-check for single line inputs
user_pref("media.autoplay.enabled", true);                      // 'false' causes some videos to not play at all even after clicking the 'start' button, including 1st and 3rd party Vimeo videos, and may also necessitate having to click the play button twice in other instances
user_pref("media.ogg.enabled", true);                           // enable all media types
user_pref("media.ogg.flac.enabled", true);                      // ^
user_pref("media.opus.enabled", true);                          // ^
user_pref("media.raw.enabled", true);                           // ^
user_pref("media.wave.enabled", true);                          // ^
//user_pref("network.protocol-handler.warn-external.file", false); Linux only 
pref("geo.provider.ms-windows-location", false);                // Do not use MS own GeoLocation Service API
user_pref("network.cookie.cookieBehavior", 1);                  // allow all 1st party cookies by default and control them with uMatrix
user_pref("privacy.clearOnShutdown.history", false);            // keep history on shutdown
user_pref("privacy.clearOnShutdown.sessions", true);            // 52alpha: false
user_pref("privacy.clearOnShutdown.formdata", false);           // keep form data on shutdown
user_pref("privacy.cpd.history", false);                        // don't select history item when clearing history manually
user_pref("privacy.cpd.sessions", true);                        // 52alpha: false
user_pref("ui.submenuDelay", 150);                              // 52alpha: 75 (time in ms)
user_pref("privacy.cpd.formdata", false);                       // don't select form data when clearing history manually
user_pref("security.mixed_content.use_hsts", true);             // 52alpha: false
user_pref("security.dialog_enable_delay", 700);                 // shorten the delay to enable buttons when prompted (like the 'ok' button when downloading a file)
user_pref("svg.disabled", false);                               // 'true' breaks YouTube player

/*
 * === TABS-preferences (matter of taste) ===
 *
 * My personal settings for tabs - some are different from ghacks settings and some are duplicates just because I like having them all in one section
*/

user_pref("accessibility.tabfocus", 3);                         // 3: Tab key focuses text fields and all other form elements
user_pref("browser.link.open_newwindow", 1);                    // controls when a new window/tab should be opened - 1=open links that open in a new window in the current tab, 2=open links that open in a new window in a new window, 3=open links that open in a new window in a new tab in the current window
user_pref("browser.link.open_newwindow.restriction", 0);        // controls when a new window/tab should be opened - 0=divert all links according to browser.link.open_newwindow, 1=do not divert any links, 2=divert all links according to browser.link.open_newwindow, unless the new window specifies how it should be displayed
user_pref("browser.link.open_newwindow.override.external", 3);  // open links from external programs in: -1=default, 1=the current tab, 2=a new window, 3=a new tab
user_pref("browser.newtab.preload", false);                     // whether to preload new tab content - dependent upon browser.newtab.url
//user_pref("browser.newtabpage.directory.ping", "");
//user_pref("browser.newtabpage.directory.source", "data:text/plain,{}");
user_pref("browser.newtabpage.enabled", false);                 // don't use the default Firefox new tab page
user_pref("browser.newtabpage.enhanced", false);                // whether to display marketing junk on new tabs - dependent upon browser.newtab.url
user_pref("browser.newtabpage.introShown", true);               // remove this annoyance
user_pref("browser.sessionhistory.max_entries", 5);             // tab specific max number of pages that can be traversed when moving forward/backward in history - affects total memory consumption
user_pref("browser.tabs.closeWindowWithLastTab", false);        // whether to exit FF when closing last tab
user_pref("browser.tabs.loadDivertedInBackground", true);       // cause links opened from external programs to open in a new background tab
user_pref("browser.tabs.loadInBackground", false);              // focus new tabs instead of loading them in the background
user_pref("browser.tabs.selectOwnerOnClose", true);             // focus the parent tab when a child tab is closed
user_pref("browser.tabs.warnOnClose", false);                   // disable warning when closing multiple tabs
user_pref("browser.tabs.warnOnCloseOtherTabs", false);          // disable warning when closing other tabs
user_pref("browser.tabs.warnOnOpen", false);                    // disable warning when opening too many tabs

/*
 * === MISC ===
*/

user_pref("browser.sessionstore.interval", 30000);                          // Controls the Session timeout for each own session (time in ms).
user_pref("webextensions.storage.sync.serverURL", "");                      //
user_pref("webextensions.storage.sync.enabled", false);                     //
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);          //
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit", false);       // 
user_pref("browser.tabs.remote.separateFileUriProcess", true);              // default is false in FF53.  This runs file:// locations in a separate content process.
user_pref("extensions.webextensions.remote", true);                         // default is false in FF53 so maybe not quite ready yet to enable
user_pref("accessibility.typeaheadfind", false);                            // whether to open the find bar to search for text as soon as you start typing
user_pref("browser.feeds.showFirstRunUI", false);                           // don't show feed intro when first subscribing to a news feed
user_pref("browser.fullscreen.animate", true);                              // whether to animate window when entering full-screen view
user_pref("browser.startup.homepage", "https://duckduckgo.com/");           // page to display when clicking the Home button
user_pref("browser.startup.page", 3);                                       // page to display on startup - 1=home, 2=blank, 3=restore last session
user_pref("browser.triple_click_selects_paragraph", false);                 // whether to select paragraphs when triple clicked
user_pref("full-screen-api.warning.delay", 0);                              // how long to display a warning ("YouTube is now Fullscreen") when a site enters full-screen mode - '0' disables the warning
user_pref("general.autoScroll", false);                                     // Disable middle-click enabling auto-scrolling on Windows/Mac
user_pref("layout.word_select.eat_space_to_next_word", false);              // whether to include spaces after a word when double clicking to select the word
user_pref("layout.word_select.stop_at_punctuation", true);                  // whether to stop selection at a punctuation when double clicking to select a word
user_pref("mousewheel.with_shift.action", 0);                               // controls what happens when the Shift key is pressed and the mouse wheel is scrolled
user_pref("nglayout.enable_drag_images", false);                            // whether images can be dragged - also seems to have an effect on highlighting and dragging text - this feature can be very annoying, especially for website editors/admins
user_pref("devtools.toolbox.zoomValue", "1.3");                             // font size for the Developers Toolbox


/* Disable Presentation API
 * https://wiki.mozilla.org/WebAPI/PresentationAPI
 * https://www.w3.org/TR/presentation-api/ 
*/
user_pref("dom.presentation.enabled", false);                             //
user_pref("dom.presentation.controller.enabled", false);                  //
user_pref("dom.presentation.discoverable", false);                        //
user_pref("dom.presentation.discovery.enabled", false);                   //
user_pref("dom.presentation.receiver.enabled", false);                    // 
user_pref("dom.presentation.session_transport.data_channel.enable", false); //^


/*
 * === FAV Icons ===
 *
 * The little icons for each webpage 
*/

user_pref("browser.shell.shortcutFavicons", false);                        //
// user_pref("alerts.showFavicons", false);                                //
// user_pref("browser.chrome.favicons", false);                            //
// user_pref("browser.chrome.site_icons", false);                          // 


/*
 * === Sandbox related ===
 *
 * Sandbox feature in FF
*/

user_pref("security.sandbox.content.level", "donotuse");                   //
user_pref("dom.ipc.plugins.sandbox-level.default", "donotuse");            //
user_pref("dom.ipc.plugins.sandbox-level.flash, "donotuse");               //
user_pref("dom.ipc.shims.enabledWarnings", true);                          // Enable console shim warnings for add-ons with the 'multiprocessCompatible' flag as false

/*
 * === Media types and support ===
 *
 * Controls which media filetypes are allowed
*/

// user_pref("media.flac.enabled", false);                                 // 
// user_pref("media.mp4.enabled", false);                                  // 
// user_pref("media.ogg.enabled", false);                                  //
// user_pref("media.ogg.flac.enabled", false);                             //
// user_pref("media.opus.enabled", false);                                 //
// user_pref("media.raw.enabled", false);                                  //
// user_pref("media.wave.enabled", false);                                 //
// user_pref("media.webm.enabled", false);                                 //

/*
 * === SMOOTH SCROLLING ===
 *
 * These settings provide silky-smooth scrolling that adjusts dynamically according to mouse wheel speed
*/

user_pref("general.smoothScroll", true);                            // enable/disable smooth scrolling
user_pref("general.smoothScroll.lines", true);                      // enable/disable smooth line scrolling (up/down arrow/page keys)
user_pref("general.smoothScroll.lines.durationMaxMS", 400);         // smooth the start/end of line scrolling operations in ms (up/down arrow/page keys)
user_pref("general.smoothScroll.lines.durationMinMS", 200);         // smooth the start/end of line scrolling operations in ms (up/down arrow/page keys)
user_pref("general.smoothScroll.mouseWheel", true);                 // enable/disable smooth scrolling with mouse wheel
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 600);    // smooth the start/end of scrolling operations in ms
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 400);    // smooth the start/end of scrolling operations in ms
user_pref("general.smoothScroll.other", true);                      // enable/disable other smooth scrolling (Home/End keys)
user_pref("general.smoothScroll.other.durationMaxMS", 400);         // smooth the start/end of other scrolling operations in ms
user_pref("general.smoothScroll.other.durationMinMS", 200);         // smooth the start/end of other scrolling operations in ms
user_pref("general.smoothScroll.pages", true);                      // enable/disable page smooth scrolling (PgUp/PgDn keys)
user_pref("general.smoothScroll.pages.durationMaxMS", 400);         // smooth the start/end of page scrolling operations in ms (PgUp/PgDn keys)
user_pref("general.smoothScroll.pages.durationMinMS", 210);         // smooth the start/end of page scrolling operations in ms (PgUp/PgDn keys)
user_pref("mousewheel.acceleration.factor", 10);                    // sets acceleration factor if mouse wheel.acceleration.start > -1
user_pref("mousewheel.acceleration.start", 0);                      // when to apply mouse wheel.acceleration.factor (after how many scroll clicks of mouse wheel) - value must be greater than -1
user_pref("mousewheel.default.delta_multiplier_y", 85);             // sets the vertical step size
//user_pref("mousewheel.min_line_scroll_amount", 1);                // how many lines to scroll with mouse wheel (approx.) - doesn't seem to have any affect
