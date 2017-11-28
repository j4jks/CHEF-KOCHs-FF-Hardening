/******
* Name: Anti-ghacks user.js
* Date: 28 November 2017
* version: 0.9
* authors: CHEF-KOCH

* README:
* This little file is designed to remove the ghacks user.js changes which aren't making any sense (in a security related aspect). See my comments here: https://www.ghacks.net/2017/08/22/firefox-55-new-preferences-and-ghacks-user-js-changes/

* I'll not open an issue ticket on ghacks user.js repo, since the main contributor of the ghacks user.js has another point of view when it comes to browser security, e.g. he disables all cookies but suggest/recommed in their own wiki to use a cookie black/whitelist addon - why when Firefox can native do this via 'settings' - history - cookies [exceptions]?! The addon he  suggest also lowers the security and you might run into possible addon fakes, besides this each addon rises memory consumptation. 
* Disabling automatically addon-updates is also horrible, you lower your security point and not increase it because in fact 99% of all people never review addons or understanding the source code. 
* There are a lot of more examples but this guy does not know what he is doing or talking about.... 

* I do not create(maintain my own user.js anymore because I see this as 'useless' but I do want to give people the chance to correct the well known ghacks user.js file without lowering anything on the security aspect. 

 ******/

user_pref("intl.regional_prefs.use_os_locales", true);
user_pref("app.update.enabled", true);
user_pref("extensions.update.enabled", true);
user_pref("app.update.auto", true);
user_pref("extensions.update.autoUpdateDefault", true);
user_pref("app.update.service.enabled", true);
user_pref("app.update.staging.enabled", true);
user_pref("app.update.silent", true);
user_pref("lightweightThemes.update.enabled", true);
user_pref("browser.search.update", true);
user_pref("browser.tabs.crashReporting.sendReport", true);
user_pref("browser.crashReports.unsubmittedCheck.enabled", true); // (FF51+)
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit", true); // (FF51+)

//user_pref("browser.safebrowsing.malware.enabled", true);
//user_pref("browser.safebrowsing.phishing.enabled", true); // (FF50+)

   // user_pref("browser.safebrowsing.provider.google.updateURL", "");
   // user_pref("browser.safebrowsing.provider.google.gethashURL", "");
   // user_pref("browser.safebrowsing.provider.google4.updateURL", ""); // (FF50+)
   // user_pref("browser.safebrowsing.provider.google4.gethashURL", ""); // (FF50+)

   // user_pref("browser.safebrowsing.allowOverride", false);

   
user_pref("privacy.trackingprotection.pbmode.enabled", true); // default true
user_pref("privacy.trackingprotection.enabled", false); // default false
user_pref("urlclassifier.trackingTable", "test-track-simple,base-track-digest256,content-track-digest256"); // strict

/* 0424: disable Mozilla's tracking protection and Flash blocklist updates ***/
   // user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "");
   // user_pref("browser.safebrowsing.provider.mozilla.updateURL", "");
user_pref("extensions.screenshots.disabled", true);
user_pref("browser.urlbar.trimURLs", true);
user_pref("browser.urlbar.suggest.bookmark", true);
user_pref("browser.urlbar.suggest.history", true);
user_pref("browser.urlbar.maxRichResults", 5);
//user_pref("browser.taskbar.previews.enable", false); //won't work anyway




//user_pref("browser.sessionstore.max_tabs_undo", 0);
//user_pref("browser.sessionstore.max_windows_undo", 0);


/* 1021: disable storing extra session data
 * extra session data contains contents of forms, scrollbar positions, cookies and POST data
 * define on which sites to save extra session data:
 * 0=everywhere, 1=unencrypted sites, 2=nowhere ***/
//user_pref("browser.sessionstore.privacy_level", 2);
/* 1022: disable resuming session from crash [SETUP] ***/
//user_pref("browser.sessionstore.resume_from_crash", false);
user_pref("browser.shell.shortcutFavicons", true);
user_pref("alerts.showFavicons", true);

user_pref("browser.display.use_document_fonts", 1);
user_pref("font.name.serif.x-unicode", "Georgia");
user_pref("font.name.serif.x-western", "Georgia"); // default Times New Roman
user_pref("font.name.sans-serif.x-unicode", "Arial");
user_pref("font.name.sans-serif.x-western", "Arial"); // default Arial
user_pref("font.name.monospace.x-unicode", "Lucida Console");
user_pref("font.name.monospace.x-western", "Lucida Console"); // default Courier New


user_pref("privacy.userContext.ui.enabled", true);
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.usercontext.about_newtab_segregation.enabled", true);
user_pref("privacy.userContext.longPressBehavior", 2);


user_pref("media.gmp-provider.enabled", true);
user_pref("media.gmp.trial-create.enabled", true);
user_pref("media.gmp-manager.url", "data:text/plain,");
user_pref("media.gmp-manager.url.override", "data:text/plain,"); // (hidden pref)
user_pref("media.gmp-manager.updateEnabled", true); // disable local fallback (hidden pref)
/* 1825: disable widevine CDM (Content Decryption Module) [SETUP] ***/
user_pref("media.gmp-widevinecdm.visible", true);
user_pref("media.gmp-widevinecdm.enabled", true);
user_pref("media.gmp-widevinecdm.autoupdate", true);
/* 1830: disable all DRM content (EME: Encryption Media Extension) [SETUP] ***/
user_pref("media.eme.enabled", true); // Options>Content>Play DRM Content
user_pref("browser.eme.ui.enabled", true); // hides "Play DRM Content" checkbox, restart required
/* 1840: disable the OpenH264 Video Codec by Cisco to "Never Activate"
 * This is the bundled codec used for video chat in WebRTC ***/
user_pref("media.gmp-gmpopenh264.enabled", true); // (hidden pref)
user_pref("media.gmp-gmpopenh264.autoupdate", true);


user_pref("media.peerconnection.enabled", true);
user_pref("media.peerconnection.use_document_iceservers", true);
user_pref("media.peerconnection.video.enabled", true);
user_pref("media.peerconnection.identity.enabled", true);
user_pref("media.peerconnection.identity.timeout", 1);
user_pref("media.peerconnection.turn.disable", true);
user_pref("media.peerconnection.ice.tcp", true);
user_pref("media.navigator.video.enabled", true); // video capability for WebRTC
user_pref("media.peerconnection.ice.default_address_only", true); // (FF42-FF50)
user_pref("media.peerconnection.ice.no_host", true); // (FF51+)

user_pref("webgl.disabled", false);
user_pref("pdfjs.enableWebGL", true);
user_pref("webgl.min_capability_mode", false);
user_pref("webgl.disable-extensions", false);
user_pref("webgl.disable-fail-if-major-performance-caveat", false);
user_pref("webgl.enable-debug-renderer-info", true);
user_pref("webgl.dxgl.enabled", true); // [WINDOWS]
user_pref("webgl.enable-webgl2", true);

user_pref("media.getusermedia.screensharing.enabled", true);
//user_pref("media.getusermedia.screensharing.allowed_domains", "");
user_pref("media.getusermedia.browser.enabled", true);
user_pref("media.getusermedia.audiocapture.enabled", true);
user_pref("camera.control.face_detection.enabled", true);

/*
user_pref("media.autoplay.enabled", false);
user_pref("media.block-autoplay-until-in-foreground", true);
*/





/*
user_pref("dom.serviceWorkers.enabled", false);
user_pref("dom.caches.enabled", false);
user_pref("dom.webnotifications.enabled", false);
user_pref("dom.webnotifications.serviceworker.enabled", false);
user_pref("dom.push.enabled", false);
user_pref("dom.push.connection.enabled", false);
user_pref("dom.push.serverURL", "");
user_pref("dom.push.userAgentID", "");
*/


user_pref("dom.event.clipboardevents.enabled", true);
user_pref("dom.webaudio.enabled", true);
user_pref("browser.download.folderList", 0);
user_pref("browser.helperApps.deleteTempFileOnExit", true);
user_pref("browser.pagethumbnails.capturing_disabled", false); // (hidden pref)
user_pref("pdfjs.disabled", true);
user_pref("network.dns.disableIPv6", true);
user_pref("network.http.fast-fallback-to-IPv4", true);
user_pref("mathml.disabled", false);
user_pref("network.cookie.cookieBehavior", 1);
user_pref("network.cookie.lifetimePolicy", 2);
user_pref("network.cookie.lifetime.days", 7);
/* 2705: disable DOM (Document Object Model) Storage
 * [WARNING] This will break a LOT of sites' functionality.
 * You are better off using an extension for more granular control ***/
   // user_pref("dom.storage.enabled", false);
user_pref("device.sensors.enabled", false);
user_pref("browser.zoom.siteSpecific", true);



//user_pref("media.video_stats.enabled", false);
user_pref("browser.tabs.loadBookmarksInTabs", true);

