///////////////////////////////////
//// === Palemoon SPECIFIC === ////
//////////////////////////////////

/*
    Full list maintained by Moonchild: https://forum.palemoon.org/viewtopic.php?f=24&t=3357
    If you have issues or questions about any of these, please use the Palemoon forums !!
*/
// 3201: (v25.6+) disable canvas fingerprinting
   // user_pref("canvas.poisondata", true);
// 3202: (v25.2+) control HSTS
   // If editing this in about:config PM needs to be fully closed and then restarted
   // NOTE: This is a trade-off between privacy vs security. HSTS was designed to increase
   // security to stop MiTM attacks but can also be misused as a fingerprinting vector, by
   // scrapping previously visited sites. Recommended: security over privacy. Your choice.
   // user_pref("network.stricttransportsecurity.enabled", true);
// 3203: (v25.0+) controls whether to ignore an expired state of stapled OCSP responses
   // If set to true, breaks with RFC6066 (like Firefox) and ignores the fact that stapled
   // OCSP responses may be expired. If false (the default) aborts the connection.
   // user_pref("security.ssl.allow_unsafe_ocsp_response", false);

////////////////////////////////
//// === LINUX SPECIFIC === ////
////////////////////////////////

/*
    These settings are specific to Linux Mint only, but should be fine for any Debian based distro which uses the APT (Advanced Package Tool) package manager
*/
user_pref("network.protocol-handler.app.apt", "/usr/bin/apturl");       // [string] path to APT URL handler
user_pref("network.protocol-handler.app.apt+http", "/usr/bin/apturl");  // [string] path to APT URL handler
user_pref("network.protocol-handler.warn-external.apt", true);
user_pref("network.protocol-handler.warn-external.apt+http", true);

///////////////////////
//// === CACHE === ////
///////////////////////

user_pref("browser.sessionhistory.max_total_viewers", 5);      // [integer] how many pages to store in memory - used when moving back/forward in history - -1=auto-determine based on available memory
/*
    These settings will disable disk caching and store all cached objects in RAM - recommended as long as you don't mind the cache getting dumped at reboot or when Firefox is restarted
*/
user_pref("browser.cache.disk.enable", false);                 // [boolean] whether to use the hard disk for cache - set to false to force everything to RAM
user_pref("browser.cache.disk_cache_ssl", false);              // [boolean] whether to cache documents viewed over a secure connection (https)
//user_pref("browser.cache.memory.capacity", 256000);          // [integer] alloted RAM capacity in KB for both memory and disk cache in RAM - 256000 = 250 MB
user_pref("browser.cache.memory.enable", true);                // [boolean] whether to enable memory cache
user_pref("browser.sessionstore.privacy_level", 2);            // [integer] 0=Store all extra session data, 1=Store extra session data for non-HTTPS sites, 2=Never store extra session data - contents of forms, scrollbar positions, cookies, and POST data
user_pref("browser.sessionstore.privacy_level_deferred", 2);   // [integer] presumably same as above except for non-focused tabs
/*
    Clear objects on shutdown and set preferences for manual history deletion
*/
user_pref("privacy.cpd.cache", true);                          // [boolean] whether to preselect the option to clear browser cache when manually clearing history
user_pref("privacy.cpd.cookies", true);                        // [boolean] whether to preselect the option to clear cookies when manually clearing history
user_pref("privacy.cpd.downloads", true);                      // [boolean] whether to preselect the option to clear download history when manually clearing history
//user_pref("privacy.cpd.formdata", true);                     // [boolean] whether to preselect the option to clear form data when manually clearing history
//user_pref("privacy.cpd.history", true);                      // [boolean] whether to preselect the option to clear history data when manually clearing history
user_pref("privacy.cpd.offlineApps", true);                    // [boolean] whether to preselect the option to clear off-line website data when manually clearing history
//user_pref("privacy.cpd.passwords", true);                    // [boolean] whether to preselect the option to clear log-on passwords when manually clearing history
//user_pref("privacy.cpd.sessions", true);                     // [boolean] whether to preselect the option to clear active logins when manually clearing history
//user_pref("privacy.cpd.siteSettings", true);                 // [boolean] whether to preselect the option to clear site-specific settings when manually clearing history
user_pref("privacy.clearOnShutdown.cache", true);              // [boolean] whether to clear browser cache on shutdown
user_pref("privacy.clearOnShutdown.cookies", true);            // [boolean] whether to clear cookies on shutdown
user_pref("privacy.clearOnShutdown.downloads", true);          // [boolean] whether to clear download history on shutdown
//user_pref("privacy.clearOnShutdown.formdata", true);         // [boolean] whether to clear form data on shutdown
//user_pref("privacy.clearOnShutdown.history", true);          // [boolean] whether to history data on shutdown
user_pref("privacy.clearOnShutdown.offlineApps", true);        // [boolean] whether to clear off-line website data on shutdown
//user_pref("privacy.clearOnShutdown.passwords", true);        // [boolean] whether to clear log-on passwords on shutdown
//user_pref("privacy.clearOnShutdown.sessions", true);         // [boolean] whether to clear active logins on shutdown
//user_pref("privacy.clearOnShutdown.siteSettings", true);     // [boolean] whether to clear site-specific settings on shutdown

////////////////////////
//// === Volume === ////
///////////////////////

/*
    --- Hardware Volume + Fingerprints ---
    Reduce and manage the attack surface of audio based fingerprints.
    Read: https://www.w3.org/TR/webaudio/
*/

//user_pref("media.default_volume", 0.2);                      // [string] 0.1 = 10% volume on HTML5 Videos -> 1.0 = 100%
//user_pref("media.webaudio.enabled", false);                  // [boolean] ??

//////////////////////////
//// === UPDATING === ////
//////////////////////////

/*
    --- Program Updates ---
    I suggest to disallow any automatic updating - you should always read the changelogs and then decide what to do since features may have been added that you absolutely do not want, or features removed that you do want. if yo choose to use an old build, I would suggest using the ESR releases: https://www.mozilla.org/en-US/firefox/organizations/faq/
*/
user_pref("app.update.enabled", false);                             // [boolean] whether to enable browser auto-updating
user_pref("app.update.auto", false);                                // [boolean] auto-install updates - app.update.enabled must be enabled
user_pref("app.update.disable_button.showUpdateHistory", false);    // [boolean] apparently enables showing update history, though it may not be implemented as of v37
user_pref("app.update.service.enabled", false);                     // [boolean] whether to enable the background service that installs updates - possibly Linux specific
user_pref("app.update.showInstalledUI", true);                      // [boolean] whether to display a notice after an update is applied
user_pref("app.update.silent", false);                              // [boolean] whether to show update prompt - Dependant upon app.update.enabled
user_pref("app.update.staging.enabled", false);                     // [boolean] presumably whether to allow background downloading of updates
/*
    --- Extension Updates ---
    I suggest to disallow any automatic updating for extensions and manually check for updates on a regular basis, reading the change logs carefully. th problem with automatic updates for extensions is that a developer can sell  popular extension to a marketing company that will add code to track use browsing habits, display ads, etc.. consider using Extension Defender t help guard against this and download extensions only from AMO
*/
user_pref("extensions.update.autoUpdateDefault", false);    // [boolean] whether to auto-install extension updates
user_pref("extensions.update.enabled", false);              // [boolean] whether to auto-check for extension updates
user_pref("extensions.blocklist.url", "");                  // [string] url from which to download list of blocked extensions
/*
    --- Plugin Updates ---
    If you disable plugin update checking and have plugins installed, be sure t manually check for plugin updates on a regular basis. personally i do no have any plugins installed - most video/embedded content, including PDFs for the popular sites can be viewed natively in Firefox without plugins
*/
user_pref("media.gmp-manager.url", "");                                             // [string] OpenH.264 plugin update URL - set to blank to disable update checking
user_pref("plugins.update.notifyUser", false);                                      // [boolean] whether to check for plugin updates - this may not cover the OpenH264 plugin
user_pref("plugins.update.url", "https://www.mozilla.org/%LOCALE%/plugincheck/");   // [string] remove utm tracking params from plugin update check URL - if "" you can't check for updates manually
//user_pref("plugins.hide_infobar_for_outdated_plugin", false);                     // [boolean] enable the Information Bar for outdated plugins (if any installed)
/*
    --- Misc. Updates ---
*/
user_pref("browser.aboutHomeSnippets.updateUrl", "https://127.0.0.1");  // [string] update URL for updating content in about:home page
//user_pref("browser.startup.homepage_override.mstone", "ignore");      // [string] used to display browser update information - may want to uncomment this if using a proxy for anonymity
user_pref("browser.microsummary.updateGenerators", false);              // [boolean] whether to auto-update bookmark microsummaries
user_pref("browser.search.update", false);                              // [boolean] whether to auto-update search plugins - probably want to disable this if using custom edited search plugins in \searchplugins folder
user_pref("lightweightThemes.update.enabled", false);                   // [boolean] whether to auto-update Personas (themes)

/////////////////////////////////////////////
//// === SECURITY / PRIVACY, GENERAL === ////
/////////////////////////////////////////////

/*
    Data Reporting
*/
user_pref("datareporting.healthreport.about.reportUrl", "");           // [string] URL to which the browser health report is sent
user_pref("datareporting.healthreport.about.reportUrlUnified", "");    // [string] about:healthreport URL
user_pref("datareporting.healthreport.documentServerURI", "");         // [string] URL of healthreport server
user_pref("datareporting.healthreport.service.enabled", false);        // [boolean] disable Mozilla health report service which collects various browser data and sends it home
user_pref("datareporting.healthreport.uploadEnabled", false);          // [boolean] disable uploading health reports to Mozilla
user_pref("datareporting.policy.dataSubmissionEnabled", false);        // [boolean] whether to enable data report submission
user_pref("datareporting.policy.dataSubmissionEnabled.v2", false);     // [boolean] whether to enable data report submission
/*
    SSL
*/
user_pref("security.fileuri.strict_origin_policy", true);            // [boolean] whether to limit local file ability to access files above the directory in which the file resides
user_pref("security.mixed_content.block_active_content", true);      // [boolean] whether to block mixed active (other than images, etc.) content from a non-secure source when viewing an encrypted page (https)
//user_pref("security.mixed_content.block_display_content", false);  // [boolean] whether to block mixed non-active (images, etc.) content from a non-secure source when viewing an encrypted page (https)
//user_pref("security.OCSP.enabled", 1);                             // [integer] how to validate ssl certs (uses OCSP, a 3rd party service): 0=disable, 1=validate only certificates that specify an OCSP service URL, 2=enable and use values in security.OCSP.URL and security.OCSP.signingCA for validation
user_pref("security.ssl.errorReporting.automatic", false);           // [boolean] whether to send SSL error reports without asking the user
user_pref("security.ssl.errorReporting.enabled", false);             // [boolean] whether to enable SSL error reporting
user_pref("security.ssl.errorReporting.url", "");                    // [string] URL to which SSL errors are reported
/*
    Telemetry data is sent to Mozilla and includes information about the build of the browser, various benchmark values, the installed extensions, and information about the computer system
*/
user_pref("toolkit.telemetry.archive.enabled", false);  // [boolean] whether local archiving of telemetry pings is enabled or not - depends on toolkit.telemetry.unified
user_pref("toolkit.telemetry.cachedClientID", "");      // [string] unique telemetry ID
user_pref("toolkit.telemetry.enabled", false);          // [boolean] disable pop-up asking for feedback since v8
user_pref("toolkit.telemetry.prompted", 2);
user_pref("toolkit.telemetry.rejected", true);
user_pref("toolkit.telemetry.unified", false);          // [boolean] controls unified behavior - if enabled will record basic data and will send additional pings
user_pref("toolkit.telemetry.unifiedIsOptIn", true);    // [boolean] makes telemetry opt-in even when "toolkit.telemetry.enabled" is true
/*
    Geolocation
*/
user_pref("browser.search.geoip.url", "");           // [string] disable contacting Mozilla to set the default search engine
//user_pref("geo.enabled", false);                   // [boolean] whether to enable geo-location - not strictly necessary to disable since user should be prompted before location data is allowed to be sent
//user_pref("geo.wifi.uri", "http://127.0.0.1");
user_pref("geo.wifi.logging.enabled", false);        // [boolean] disables the wifi logging feature
/*
    WebGL
*/
user_pref("pdfjs.enableWebGL", false);
user_pref("webgl.disabled", true);                  // [boolean] whether to enable WebGL - potential security risk - can also be blocked with NoScript
user_pref("webgl.disable-extensions", true);
user_pref("webgl.min_capability_mode", true);
/*
    WebRTC
*/
user_pref("media.gmp-gmpopenh264.enabled", false);
user_pref("media.gmp-manager.url", "");
user_pref("media.peerconnection.enabled", false);                      // [boolean] whether to enable WebRTC - Real-Time Communications between peers for voice, video, file and desktop sharing, etc. - potential security/privacy risk - WebRTC can be controlled with HTTP UserAgaent cleaner
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("media.peerconnection.identity.timeout", 1);
user_pref("media.peerconnection.turn.disable", true);
user_pref("media.peerconnection.video.enabled", false);
/*
    EME (Adobe "Primetime Content Decryption Module" DRM)
	ESR Versions of FF and Tor/TBB versions excluding EME/DRM!
*/
user_pref("browser.eme.ui.enabled", false);
user_pref("media.gmp-eme-adobe.enabled", false);
user_pref("media.eme.enabled", false);
user_pref("media.eme.apiVisible", false);
/*
    Media
*/
user_pref("camera.control.autofocus_moving_callback.enabled", false);
user_pref("camera.control.face_detection.enabled", false);
user_pref("media.getusermedia.screensharing.allowed_domains", "");
user_pref("media.getusermedia.screensharing.enabled", false);       // [boolean] whether to enable screen sharing - should not be strictly necessary to disallow this as user should be prompted before the connection is allowed
user_pref("media.navigator.enabled", false);                       // [boolean] unsure, but it is part of WebRTC - see: media.peerconnection.enabled
user_pref("media.video_stats.enabled", false);
user_pref("media.webspeech.recognition.enable", false);            // [boolean] unknown, sounds like a potential privacy threat
user_pref("media.getusermedia.agc_enabled", true);                 // [boolean] whether to enable Automatic Gain Control for audio
/*
    MISC
*/
//user_pref("offline-apps.allow_by_default", false);               // [boolean] whether to allow offline apps or no 
user_pref("beacon.enabled", false);                                // [boolean] whether to send additional analytics to web servers
user_pref("breakpad.reportURL", "");
user_pref("browser.aboutHomeSnippets.updateUrl", "");
user_pref("browser.helperApps.deleteTempFileOnExit", true);
//user_pref("browser.history.allowPopState", false);               // [boolean] whether to allow web sites to manipulate browser history - 'false' breaks some web sites when navigating within them, such as YouTube
//user_pref("browser.history.allowPushState", false);              // [boolean] whether to allow HTML5 web sites to add entries to the browser history - 'false' breaks some web sites when navigating within them, such as YouTube
user_pref("browser.history.allowReplaceState", false);             // [boolean] whether to allow HTML5 web sites to replace entries in the browser history
user_pref("browser.selfsupport.url", "");                          // [string] disable Mozilla pop-up asking for feedback - introduced in v37
user_pref("browser.send_pings", false);                            // [boolean] whether to allow HTML5 ping tracking when clicking a link
user_pref("browser.send_pings.require_same_host", true);           // [boolean] whether to require the same host if sending pings
user_pref("browser.urlbar.unifiedcomplete", false);
user_pref("browser.formfill.enable", false);                       // [boolean] disables automatically formfill, you can sue KeePass or others which are working offline
user_pref("device.sensors.enabled", false);
user_pref("experiments.activeExperiment", false);
user_pref("experiments.enabled", false);
user_pref("experiments.manifest.uri", "");
user_pref("experiments.supported", false);
user_pref("gecko.buildID", 20100101);                               // [string] browser build ID - value taken ToR browser
user_pref("media.gmp-manager.buildID", "20000101000000");           // ^^
user_pref("general.useragent.compatMode.firefox", false);           // [boolean] whether to append a special compatibility token to the user-agent string - could potentially be used for fingerprinting and should not be necessary for average user
//user_pref("general.useragent.override", "");                      // [string] HTTP User-Agent string - should be set randomly with something like uMatrix
//user_pref("gfx.downloadable_fonts.enabled", true);                // [boolean] whether to allow font downloads
//user_pref("privacy.donottrackheader.enabled", false);               // [boolean] whether to enable the "do not track" header - essentially useless
user_pref("privacy.trackingprotection.enabled", false);             // [boolean] whether to enable tracking protection (see: browser.polaris.enabled) - not needed if using other means, such as uBlock - when enabled, a new icon in address bar will appear when a site is being blocked, allowing to disable per domain - note that enabling this allows the download of a list from Mozilla
user_pref("browser.trackingprotection.gethashURL", "");
user_pref("browser.trackingprotection.getupdateURL", "");
user_pref("privacy.trackingprotection.pbmode.enabled", false);
user_pref("signon.autofillForms", false);                           // [boolean] Whether to allow the password manager to auto-fill log-on forms - potential security risk - if false, the password will still be set after the user name is manually entered, which can usually be done quickly from a drop-down list
user_pref("startup.homepage_welcome_url", "about:about");           // [string] what content to display when the browser is started with a new profile

///////////////////////////////
//// === SAFE BROWSING === ////
///////////////////////////////

/*
    --- Mozilla/Google Safe Browsing ---
    I would recommend disabling safe-browsing entirely and using a good DN server, such as OpenDNS/dnscrypt, in combination with uBlock and its anti-malware filter lists to mitigate the threat of domains hosting malware, else th URLs of some, or possibly all of the sites you visit and files you download may be sent to Google along with your IP address. for more see https://www.google.com/intl/en/chrome/browser/privacy/
*/
user_pref("browser.safebrowsing.downloads.enabled", false);         // [boolean] unknown, but since we're not using Google "Safe Browsing" feature, lets' make sure it's dead
user_pref("browser.safebrowsing.downloads.remote.enabled", false);  // [boolean] unknown, but since we're not using Google "Safe Browsing" feature, lets' make sure it's dead
user_pref("browser.safebrowsing.enabled", false);                   // [boolean] whether to compare URLs against a blacklist or submit URLs to a third party to determine whether a site is legitimate
user_pref("browser.safebrowsing.malware.enabled", false);           // [boolean] whether to download data about malware and use it to screen downloads
user_pref("browser.safebrowsing.remoteLookups", false);             // [boolean] whether to consult a third-party provider to determine whether a site is safe - if false, it will fall back to the local urlclassifier2.sqlite file - dependent upon whether browser.safebrowsing.enabled is enabled
user_pref("browser.safebrowsing.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.reportPhishURL", "");
/*
    FF43+ safebrowsing URL's
*/
user_pref("browser.safebrowsing.provider.google.appRepURL", "");
user_pref("browser.safebrowsing.provider.google.gethashURL", "");
user_pref("browser.safebrowsing.provider.google.reportURL", "");
user_pref("browser.safebrowsing.provider.google.updateURL", "");
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "");
user_pref("browser.safebrowsing.provider.mozilla.updateURL", "");

///////////////////////////////////
//// === SOCIAL NETWORKING === ////
///////////////////////////////////

user_pref("loop.enabled", false);                         // [boolean] whether to enable Firefox Hello - can also be controlled via Classic Theme Restorer
user_pref("loop.logDomains", false);                      // [boolean] whether to log domains that Firefox Hello connects to
user_pref("loop.server", "");
user_pref("social.directories", "");
user_pref("social.enabled", false);                       // [boolean] whether to enable social networking features
user_pref("social.remote-install.enabled", false);        // [boolean] unknown, sounds scary o_O
user_pref("social.share.activationPanelEnabled", false);
user_pref("social.shareDirectory", "");
user_pref("social.toast-notifications.enabled", false);
//user_pref("social.whitelist", "");                      // [string] URL of white-listed social service providers

//////////////////////////
//// === DOWNLOAD === ////
//////////////////////////

user_pref("browser.download.folderList", 2);
user_pref("browser.download.hide_plugins_without_extensions", false);   // [boolean] whether to hide mime types in prefs > applications tab that are not associated with a plugin
user_pref("browser.download.manager.addToRecentDocs", false);           // [boolean] whether to add downloaded files to Windows Recent Documents menu
user_pref("browser.download.manager.scanWhenDone", false);              // [boolean] whether to scan downloads with system A/V and whether to apply Windows security policy checks - if set to false, make sure to manually scan downloads!
user_pref("browser.download.useDownloadDir", false);                    // [boolean] whether to use the default location when downloading file - recommended to set to false

////////////////////////
//// === SEARCH === ////
////////////////////////

user_pref("browser.search.countryCode", "US");          // [string] set the default language to US
user_pref("browser.search.region", "US")
user_pref("intl.accept_languages", "en-US, en");        // [string] default but we want to force it to be used in case you downloaded lang specific builds
user_pref("browser.search.param.yahoo-fr", "");         // [string] remove tracking parameter
user_pref("browser.search.param.yahoo-fr-ja", "");      // [string] remove tracking parameter
user_pref("browser.search.suggest.enabled", false);     // [boolean] whether to enable search suggestions for search bar
user_pref("keyword.enabled", false);                    // [boolean] whether to allow searching from the address bar - !!! potential security/privacy issue since your search query can be stored by the search engine !!!

////////////////////////////
//// === NETWORKING === ////
////////////////////////////

//user_pref("network.jar.block-remote-files", true);                      // [boolean] blocks external remote .jar files
//user_pref("network.negotiate-auth.allow-proxies", false);              // [boolean] internal proxy hardening
//user_pref("network.automatic-ntlm-auth.allow-proxies", false);         // [boolean] disallow some types of insecure proxies 
user_pref("browser.casting.enabled", false);              // [boolean] whether to send HTML5 video to other devices on the network
//user_pref("gfx.layerscope.enabled", false);
user_pref("network.allow-experiments", false);
user_pref("network.cookie.cookieBehavior", 1);            // [integer] 0=allow all, 1=allow same host, 2=disallow all, 3= allow 3rd party if it has already set a cookie - should use Self Destructing Cookies
user_pref("network.dnsCacheExpiration", 0);               // [integer] how long to keep DNS entries - set to '0' to disable DNS caching - should probably only do this if you are caching DNS queries using another method, such as at the router or the OS level and, if so, disable DNS prefetching (network.dns.disablePrefetch)
user_pref("network.dns.disablePrefetch", true);           // [boolean] disable nameserver lookups for sites not yet visited
user_pref("network.dns.disablePrefetchFromHTTPS", true);  // [boolean] disable nameserver lookups for secure sites not yet visited
//user_pref("network.jar.open-unsafe-types", false);      // [boolean] whether to allow the opening of unsafe Java archives
/*
    --- referrer settings ---
    referrer is best controlled by an add-on, such as uMatrix
*/
//user_pref("network.http.pipelining", true);               // [boolean] whether to attempt to use a single HTP 1.1 connection for multiple requests - can speed up loading or pages, or break them
//user_pref("network.http.referer.spoofSource", false);     // [boolean] false=send real referrer, true=spoof referrer (use target URI as referrer) - this pref should be controlled by other means on a per-site basis, such as uMatrix
//user_pref("network.http.referer.trimmingPolicy", 0);      // [integer] 0=send full URI, 1=scheme+host+port+path, 2=scheme+host+port
//user_pref("network.http.referer.XOriginPolicy", 1);       // [integer] 0=always send, 1=send if base domains match, 2=send if hosts match - network.http.referer.spoofSource and network.http.referer.trimmingPolicy are dependent upon this setting
//user_pref("network.http.sendRefererHeader", 1);           // [integer] 0=never, 1=send when links are clicked 2=send when links or images are clicked - this pref should be controlled by other means on a per-site basis, such as uMatrix
//user_pref("network.http.sendSecureXSiteReferrer", true);  // [boolean] whether to send referrer from a secure site - not sure if this can be controlled by uMatrix
user_pref("network.http.spdy.enabled", false);              // [boolean] SPDY is developed by Google for optimizing HTTP/1 web traffic - will be depreciated in 2016 - possible security issues
user_pref("network.http.spdy.enabled.http2", false);        // [boolean] see network.http.spdy.enabled
user_pref("network.http.spdy.enabled.v3", false);           // [boolean] see network.http.spdy.enabled
user_pref("network.http.spdy.enabled.v3-1", false);         // [boolean] see network.http.spdy.enabled
user_pref("network.http.speculative-parallel-limit", 0);    // [integer] number of connections to make to a server for sites not yet visited (predictive) such as when typing in the search bar, hovering ove links, etc. - max number of current global half open sockets allowable when starting a new speculative connection
user_pref("network.manage-offline-status", false);          // [boolean] whether to auto-detect connectivity and manage the option to work off-line - can be annoying
user_pref("network.predictor.enabled", false);              // [boolean] similar to network.prefetch-next, whether to prefetch resources for sites not yet visited (this was named "network.seer.enabled")
user_pref("network.prefetch-next", false);                  // [boolean] disable prefetching pages not yet visited
user_pref("network.proxy.socks_remote_dns", true);          // [boolean] true=have proxy do DNS lookups, false= do them client side

/////////////////////////////////////////
//// === DOM (mostly JAVASCRIPT) === ////
/////////////////////////////////////////

user_pref("dom.keyboardevent.code.enabled", false);                         // [boolean] see: https://bugzilla.mozilla.org/show_bug.cgi?id=865649
user_pref("dom.workers.websocket.enabled", false);                          // [boolean] whether to allow websocket or not
user_pref("dom.allow_cut_copy", false);                                     // [boolean] whether to allow JS to manipulate clipboard data (requires user intervention, like clicking a button)
user_pref("dom.allow_scripts_to_close_windows", false);
user_pref("dom.battery.enabled", false);                                    // [boolean] whether to allow JS to access battery info - potential privacy issue
//user_pref("dom.disable_image_src_set", false);                            // [boolean] whether to disable JS ability to change images
user_pref("dom.disable_beforeunload", true);                                // [boolean] whether to disable JS ability to warn user before leaving a domain
user_pref("dom.disable_window_flip", true);                                 // [boolean] whether to disable JS ability to change window z-order
user_pref("dom.disable_window_move_resize", true);                          // [boolean] whether to disable JS ability to move/resize windows
user_pref("dom.disable_window_open_feature.close", true);
user_pref("dom.disable_window_open_feature.directories", true);             // [boolean] whether to disable JS ability to hide bookmarks toolbar
user_pref("dom.disable_window_open_feature.location", true);
user_pref("dom.disable_window_open_feature.menubar", true);                 // [boolean] whether to disable JS ability to hide the menu bar
user_pref("dom.disable_window_open_feature.minimizable", true);             // [boolean] whether to disable JS ability to disable window minimizing
user_pref("dom.disable_window_open_feature.personalbar", true);             // [boolean] whether to disable JS ability to hide the personal tool bar
user_pref("dom.disable_window_open_feature.resizable", true);
user_pref("dom.disable_window_open_feature.scrollbars", true);              // [boolean] whether to disable JS ability to hide scroll bars
user_pref("dom.disable_window_open_feature.status", true);                  // [boolean] whether to disable JS ability to hide the status bar
user_pref("dom.disable_window_open_feature.titlebar", false);               // [boolean] whether to disable JS ability to hide the title bar
user_pref("dom.disable_window_open_feature.toolbar", true);                 // [boolean] whether to disable JS ability to hide the tool bar
user_pref("dom.disable_window_status_change", true);                        // [boolean] whether to disable JS ability to change the status text
user_pref("dom.enable_performance", false);
user_pref("dom.enable_resource_timing", false);
user_pref("dom.enable_user_timing", false);
//user_pref("dom.event.clipboardevents.enabled", false);                    // [boolean] whether to allow JS to monitor/alter copy/paste actions - potential security/privacy risk, however setting to false breaks WordPress TinyMCE editor paste, possibly others
user_pref("dom.event.contextmenu.enabled", false);                          // [boolean] whether JS can alter/hide context menu
user_pref("dom.gamepad.enabled", false);                                    // [boolean] whether to enable the use of a game pad
user_pref("dom.idle-observers-api.enabled", false);                         // [boolean] unsure, but possibly a security risk
//user_pref("dom.indexedDB.enabled", true);                                 // [boolean] whether to allow JS to store data permanently - disabling this can break older extensions and some web sites - can be controlled other ways, such as by uMatrix, Self Destructing Cookies, etc.
user_pref("dom.ipc.plugins.enabled", false);                                // [boolean] whether to allow JS to discover plugins
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false); // [boolean] presumably whether to send plug-in crash reports to Mozilla
user_pref("dom.ipc.plugins.reportCrashURL", false);                         // [boolean] probably whether to send the URL of the website where a plugin crashed
user_pref("dom.netinfo.enabled", false);                                    // [boolean] whether JS can get information about the network/browser connection - Network Information API provides general information about the system's connection type (WiFi, cellar, etc.)
user_pref("dom.network.enabled", false);                                    // [boolean] whether to disable JS ability to determine the type of connection to the network
user_pref("dom.popup_maximum", 5);
user_pref("dom.server-events.enabled", false);                              // [boolean] whether to allow Server-Sent Events from the web server
user_pref("dom.storage.enabled", true);                                     // [boolean] whether to allow DOM storage - this can be controlled in a more granular way with uMatrix, however if no add-on is used to control storage and you are concerned about preserving your privacy, it is recommended to set this to false, though this will break some websites
user_pref("dom.telephony.enabled", false);                                  // [boolean] whether to enable JS Internet telephony - no known uses and potential security/privacy threat
user_pref("dom.vibrator.enabled", false);                                   // [boolean] whether to allow JS to shake the screen
user_pref("dom.vr.enabled", false);                                         // [boolean] whether to enable JS to detect virtual reality devices - possible privacy/fingerprinting issue
user_pref("dom.vr.oculus.enabled", false);
user_pref("dom.vr.oculus050.enabled", false);
user_pref("dom.w3c_touch_events.enabled", 0);
user_pref("dom.workers.sharedWorkers.enabled", false);
//user_pref("full-screen-api.enabled", false);
//user_pref("mathml.disabled", true);                                       // [boolean] only on TBB
user_pref("javascript.options.asmjs", false);
user_pref("javascript.options.typeinference", false);
user_pref("javascript.options.baselinejit.content", false);
user_pref("javascript.options.ion.content", false);
user_pref("dom.mozTCPSocket.enabled", false);                               // [boolean] on ESR versions only, TCPSocket is not really been used
user_pref("dom.push.userAgentID", "");
user_pref("dom.push.serverURL", "");                                        // [integer] disables DOM Push additional URL
user_pref("dom.push.udp.wakeupEnabled", false);
user_pref("dom.push.connection.enabled", false);
user_pref("dom.push.enabled", false);                                       // [boolean] disables dom push (push API)
user_pref("dom.webnotifications.enabled", false);
user_pref("dom.webnotifications.serviceworker.enabled", false);

/////////////////////////////////////////////////
//// === WEBSITE APPERANCE/FUNCTIONALITY === ////
/////////////////////////////////////////////////

//user_pref("accessibility.blockautorefresh", true);          // [boolean] whether to block and display a dialog when a page auto-refreshes - unfortunately it does not appear possible to block auto-refresh without displaying the annoying alert
user_pref("browser.autofocus", true);                         // [boolean] whether to auto-focus the address bar
user_pref("browser.blink_allowed", false);                    // [boolean] whether to allow blinking elements - typically very annoying
user_pref("browser.display.enable_marquee", false);           // [boolean] whether to allow animated marquee text
//user_pref("browser.zoom.full", true);                        // [boolean] true=zoom whole page, false=zoom text only
//user_pref("full-screen-api.pointer-lock.enabled", false);   // [boolean] locks pointer for web applications like first person view games, etc.
user_pref("full-screen-api.warning.timeout", 0);              // [integer] how long to display the full-screen overlay/warning notice after entering full-screen (such as for video)
user_pref("gfx.color_management.mode", 0);                    // [integer] whether to use embedded ICC color profiles in images to display them (requires a color calibrated monitor and correct color profile) - 0=disable, 1=enable, 2=enabled only on tagged
user_pref("image.animation_mode", "once");                    // [string] how to display animated images: "none"=don't animate, "once"=allow to loop only once, "normal"=allow infinite looping
//user_pref("svg.in-content.enabled", false);                 // [boolean] may breaks pages but svg is to useful - only TBB
user_pref("layout.css.devPixelsPerPx", "1.1");                // [string] set the default zoom level for the entire browser and content (def = -1.0)
user_pref("media.autoplay.enabled", true);                    // [boolean] whether to allow auto-play of embedded media - setting to false apparently can cause some videos to not play, including 1st or 3rd party Vimeo videos, and may also necesitate having to click the play button twice
user_pref("media.block-play-until-visible", true);            // [boolean] whether to play media in a tab that does not have focus - note that once it starts playing, changing tabs will not stop it

////////////////////////////
//// === EXTENSIONS === ////
////////////////////////////

user_pref("extensions.blocklist.enabled", false);                    // [boolean] whether to download list of black-listed extensions, vulnerable plugins, crash-prone graphic drivers
user_pref("extensions.getAddons.cache.enabled", false);              // [boolean] whether to check daily for extension metadata updates (description, ratings, etc.) when clicking the "more" link on the Add-ons panel - also seems to block remote icons for extensions in the Add-ons panel
user_pref("extensions.webservice.discoverURL", "http://127.0.0.1");  // [string] disable downloading list of featured extensions for displaying in Get Add-ons panel

////////////////////////
//// === Fonts === ////
///////////////////////

//user_pref("browser.display.use_document_fonts", 0);                // [integer] whether to allow web pages to use their own fonts - allowing this (1) is a privacy issue because of browser fingerprinting, however not allowing (0) this will make a lot of sites quite ugly (garbled characters)
//user_pref("gfx.downloadable_fonts.enabled", false);                // [boolean] whether to allow downloading of fonts (Google web-fonts, etc.) - too many missing characters on pages with this disabled - better controlled with uBlock on a per-site basis
//user_pref("gfx.font_rendering.opentype_svg.enabled", true);        // [boolean] whether to allow SVG inside fonts - at this point i cannot see any reason not to
user_pref("font.name.serif.x-unicode", "Georgia");
user_pref("font.name.serif.x-western", "Georgia");                   // [string] default Times New Roman
user_pref("font.name.sans-serif.x-unicode", "Arial");
user_pref("font.name.sans-serif.x-western", "Arial");                // [string] default Arial
user_pref("font.name.monospace.x-unicode", "Lucida Console");
user_pref("font.name.monospace.x-western", "Lucida Console");        // [string] default Courier New

/////////////////////////
//// === PLUGINS === ////
/////////////////////////

user_pref("media.gmp-gmpopenh264.enabled", false);              // [boolean] whether to enable the OpenH264 plugin - appears to be used only for Firefox Hello/WebRTC as of v37
user_pref("media.gmp-provider.enabled", false);                 // [boolean] whether to show the OpenH264 plugin in the plugins UI
user_pref("plugin.default.state", 0);                           // [integer] 0=disabled, 1=ask to activate, 2=active
user_pref("plugin.defaultXpi.state", 0);
user_pref("plugin.sessionPermissionNow.intervalInMinutes", 0);
user_pref("plugins.click_to_play", true);                       // [boolean] whether to block plugin dependent content and make it so user has to click to enable the content
user_pref("plugins.notifyMissingFlash", false);                 // [boolean] whether to notify if Flash is needed but not installed - URL bar will still indicate if Flash is missing
user_pref("security.xpconnect.plugin.unrestricted", false);     // [boolean] whether to allow scripting of plugins by untrusted scripts
/*
    --- Plugin Scanning ---
    These setting control whether Firefox should scan for 3rd party plugins.  setting these values to a version higher than exists prevents the scan
*/
user_pref("plugin.scan.Acrobat", 99999);                        // [integer] whether to scan for Adobe Acrobar Reader
user_pref("plugin.scan.plid.all", false);                       // [boolean] whether to scan the directories specified in the Windows registry for PLIDs - includes: RealPlayer, Next-Generation Java Plug-In, Adobe Flash
user_pref("plugin.scan.Quicktime", 99999);                      // [integer] whether to scan for Quicktime plugin
user_pref("plugin.scan.WindowsMediaPlayer", 99999);             // [integer] whether to scan for Windows Media Player plugin

//////////////////////
//// === TABS === ////
//////////////////////

user_pref("browser.pagethumbnails.capturing_disabled", true);   // [boolean] disables the ability to capture page thumbnails
user_pref("pageThumbs.enabled", false);                         // [boolean] theoretically lowers attack surface by hiding the page thumbnails
//user_pref("browser.pagethumbnails.storage_version", 3);       // [string] ???
user_pref("accessibility.tabfocus", 3);                         // [integer] 3: Tab key focuses text fields and all other form elements
user_pref("browser.newtab.url", "about:blank");                 // [string] "about:blank"=show a completely blank tab when opening new tabs
user_pref("browser.link.open_newwindow", 1);                    // [integer] controls when a new window/tab should be opened - 1=open links that open in a new window in the current tab, 2=open links that open in a new window in a new window, 3=open links that open in a new window in a new tab in the current window
user_pref("browser.link.open_newwindow.restriction", 0);        // [integer] controls when a new window/tab should be opened - 0=divert all links according to browser.link.open_newwindow, 1=do not divert any links, 2=divert all links according to browser.link.open_newwindow, unless the new window specifies how it should be displayed
user_pref("browser.link.open_newwindow.override.external", 3);  // [integer] open links from external programs in: -1=default, 1=the current tab, 2=a new window, 3=a new tab
user_pref("browser.newtab.preload", false);                     // [boolean] whether to preload new tab content - dependent upon browser.newtab.url
user_pref("browser.newtabpage.directory.ping", "");
user_pref("browser.newtabpage.directory.source", "data:text/plain,{}");
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtabpage.enhanced", false);                // [boolean] whether to display marketing junk on new tabs - dependent upon browser.newtab.url
user_pref("browser.newtabpage.introShown", true);
user_pref("browser.sessionhistory.max_entries", 5);             // [integer] tab specific max number of pages that can be traversed when moving forward/backward in history - affects total memory consumption
user_pref("browser.tabs.closeWindowWithLastTab", false);        // [boolean] whether to exit FF when closing last tab
user_pref("browser.tabs.loadDivertedInBackground", true);       // [boolean] cause links opened from external programs to open in a new background tab
user_pref("browser.tabs.loadInBackground", false);              // [boolean] focus new tabs instead of loading them in the background
user_pref("browser.tabs.selectOwnerOnClose", true);             // [boolean] focus the parent tab when a child tab is closed
user_pref("browser.tabs.warnOnClose", false);                   // [boolean] disable warning when closing multiple tabs
user_pref("browser.tabs.warnOnCloseOtherTabs", false);          // [boolean] disable warning when closing other tabs
user_pref("browser.tabs.warnOnOpen", false);                    // [boolean] disable warning when opening too many tabs

//////////////////////
//// === MISC === ////
//////////////////////

user_pref("accessibility.typeaheadfind", false);                    // [boolean] whether to open the find bar to search for text as soon as you start typing
user_pref("browser.backspace_action", 2);                           // [integer] keyboard backspace key action: 0=go back, 1=page up, 2=disable
user_pref("browser.feeds.showFirstRunUI", false);
user_pref("browser.fixup.hide_user_pass", false);                   // [boolean] whether to reformat URLs containing log-on credentials
user_pref("browser.fixup.alternate.enabled", false);                // [boolean] whether to auto-correct mistyped URLs - suggested to set to false
user_pref("browser.fullscreen.animate", false);                     // [boolean] whether to animate window when entering full-screen view
user_pref("browser.fullscreen.animateUp", 0);                       // [integer] whether to animate window when entering full-screen view - 0=no toolbar/tab strip animation, 1=animates only first collapse, 2=qnimates each collapse
user_pref("browser.newtab.preload", false);
user_pref("browser.preferences.inContent", false);                  // [boolean] whether to display browser preference in a tab - introduced in v36 - can be controlled with Classic Theme Restorer
user_pref("browser.rights.3.shown", true);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.slowStartup.notificationDisabled", true);
user_pref("browser.slowStartup.maxSamples", 0);
user_pref("browser.slowStartup.samples", 0);
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("browser.startup.homepage_override.buildID", "20000101000000");   // [string] Tor settings
user_pref("browser.startup.homepage", "https://duckduckgo.com/");   // [string] page to display when clicking the Home button
user_pref("browser.startup.page", 3);                               // [integer] page to display on startup - 1=home, 2=blank, 3=restore last session
user_pref("browser.triple_click_selects_paragraph", false);         // [boolean] whether to select paragraphs when triple clicked
user_pref("browser.urlbar.clickSelectsAll", true);                  // [boolean] whether clicking the address bar will select the entire address
user_pref("browser.urlbar.doubleClickSelectsAll", false);           // [boolean] whether to select the whole address string when double clicking in the address bar
user_pref("browser.urlbar.filter.javascript", true);                // [boolean] whether to display JavaScript in browser history URLs'
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.trimURLs", false);                        // [boolean] whether to strip prefix (http://) from URLs in URL bar
user_pref("browser.urlbar.userMadeSearchSuggestionsChoice", true);
user_pref("browser.feeds.showFirstRunUI", false);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.usedOnWindows10.introURL", "");
user_pref("full-screen-api.warning.delay", 0);
user_pref("full-screen-api.warning.timeout", 0);
user_pref("general.autoScroll", false);                             // [boolean] Whether to enable auto-scrolling (middle-click on a page to display scroll map)
user_pref("general.warnOnAboutConfig", false);                      // [boolean] whether to display a warning when using about:config
user_pref("layout.spellcheckDefault", 2);                           // [integer] enable spell checker: 0=disable, 1=in multi-line edit controls only, 2=in multi and single line edit controls
user_pref("layout.word_select.eat_space_to_next_word", false);      // [boolean] whether to include spaces after a word when double clicking to select the word
user_pref("layout.word_select.stop_at_punctuation", true);          // [boolean] whether to stop selection at a punctuation when double clicking to select a word
user_pref("middlemouse.contentLoadURL", false);                     // [boolean] whether to load the URL on the clipboard when middle-clicking in the content area of a webpage
user_pref("nglayout.enable_drag_images", false);                    // [boolean] whether images can be dragged - also seems to have an effect on highlighting and dragging text - this feature can be very annoying, especially for website editors/admins
user_pref("reader.enabled", false);                                 // [boolean] whether to enable the Reader View functionality (this pref to be introduced sometime after v38.0.5)
user_pref("reader.parse-on-load.enabled", false);                   // [boolean] presumably whether to build a "Reader View" version of the page when it is loaded
user_pref("startup.homepage_welcome_url", "");
user_pref("startup.homepage_welcome_url.additional", "");           // [integer] Disables the UI Welcome stuff in ESR/FF on first startup
user_pref("startup.homepage_override_url", "");                     // [integer] 
user_pref("ui.submenuDelay", 150);                                  // [integer] delay in ms before a sub-menu of a context menu is displayed
user_pref("view_source.tab", false);                                // [boolean] whether to view web page source code in a tab or a window which offers more options
user_pref("browser.uitour.enabled", false);                         // [boolean] Disable the UI tour at startup
user_pref("browser.uitour.url", "");                                // [integer] ^^

/*
    Pocket (3rd party service)
*/
user_pref("browser.pocket.enabled", false);         // [boolean] whether to enable 3rd party Pocket service for storing/sharing content saved from web pages
user_pref("browser.pocket.api", "");
user_pref("browser.pocket.oAuthConsumerKey", "");
user_pref("browser.pocket.site", "");               // [boolean] site used for 3rd party Pocket service
/*
    WebIDE
*/
user_pref("devtools.devedition.promo.url", "https://www.mozilla.org/firefox/developer/");   // [string] remove UTM tracking params from intro to Firefox Developer edition URL
user_pref("devtools.webide.autoinstallADBHelper", false);
user_pref("devtools.webide.autoinstallFxdtAdapters", false);
user_pref("devtools.debugger.remote-enabled", false);
user_pref("devtools.webide.enabled", false);

//////////////////////////////////
//// === SMOOTH SCROLLING === ////
//////////////////////////////////

/*
    These settings provide silky-smooth scrolling that dynamically adjusts according to mouse wheel speed!
*/
user_pref("general.smoothScroll", true);                            // [boolean] enable/disable smooth scrolling
user_pref("general.smoothScroll.lines", true);                      // [boolean] enable/disable smooth line scrolling (up/down arrow/page keys)
user_pref("general.smoothScroll.lines.durationMaxMS", 400);         // [integer] smooth the start/end of line scrolling operations in ms (up/down arrow/page keys)
user_pref("general.smoothScroll.lines.durationMinMS", 200);         // [integer] smooth the start/end of line scrolling operations in ms (up/down arrow/page keys)
user_pref("general.smoothScroll.mouseWheel", true);                 // [boolean] enable/disable smooth scrolling with mouse wheel
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 600);    // [integer] smooth the start/end of scrolling operations in ms
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 400);    // [integer] smooth the start/end of scrolling operations in ms
user_pref("general.smoothScroll.other", true);                      // [boolean] enable/disable other smooth scrolling (Home/End keys)
user_pref("general.smoothScroll.other.durationMaxMS", 400);         // [integer] smooth the start/end of other scrolling operations in ms
user_pref("general.smoothScroll.other.durationMinMS", 200);         // [integer] smooth the start/end of other scrolling operations in ms
user_pref("general.smoothScroll.pages", true);                      // [boolean] enable/disable page smooth scrolling (PgUp/PgDn keys)
user_pref("general.smoothScroll.pages.durationMaxMS", 400);         // [integer] smooth the start/end of page scrolling operations in ms (PgUp/PgDn keys)
user_pref("general.smoothScroll.pages.durationMinMS", 200);         // [integer] smooth the start/end of page scrolling operations in ms (PgUp/PgDn keys)
user_pref("mousewheel.acceleration.factor", 10);                    // [integer] sets acceleration factor if mouse wheel.acceleration.start > -1
user_pref("mousewheel.acceleration.start", 0);                      // [integer] when to apply mouse wheel.acceleration.factor (after how many scroll clicks of mouse wheel) - value must be greater than -1
user_pref("mousewheel.default.delta_multiplier_y", 85);             // [integer] sets the vertical step size
//user_pref("mousewheel.min_line_scroll_amount", 1);                // [integer] how many lines to scroll with mouse wheel (approx.) - doesn't seem to have any affect

