// user_pref("browser.privatebrowsing.autostart", true);
user_pref("browser.slowStartup.notificationDisabled", true);
user_pref("browser.slowStartup.maxSamples", 0);
user_pref("browser.slowStartup.samples", 0);
user_pref("browser.rights.3.shown", true);
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("startup.homepage_welcome_url", "");
user_pref("startup.homepage_welcome_url.additional", "");
user_pref("startup.homepage_override_url", ""); // what's new page after updates
user_pref("browser.laterrun.enabled", false);
user_pref("browser.shell.checkDefaultBrowser", false);
// user_pref("browser.startup.page", 0); //0=blank, 2=last & 1=home


// Geo IP 
user_pref("geo.enabled", false);
user_pref("geo.wifi.logging.enabled", false);
user_pref("geo.security.allowinsecure", false);
user_pref("browser.search.geoip.url", "");
user_pref("browser.search.geoip.timeout", 1);

// Search lang
user_pref("browser.search.countryCode", "US");
user_pref("browser.search.region", "US");
user_pref("intl.locale.requested", "en-US");
user_pref("intl.regional_prefs.use_os_locales", false);
user_pref("browser.search.geoSpecificDefaults", false);
user_pref("browser.search.geoSpecificDefaults.url", "");
user_pref("intl.accept_languages", "en-US, en");
user_pref("javascript.use_us_english_locale", true); // (hidden pref)

// Extensions 
//user_pref("xpinstall.whitelist.required", true);
user_pref("extensions.webextensions.keepUuidOnUninstall", false);
user_pref("extensions.webextensions.keepStorageOnUninstall", false);



// Apps + update
// default - user_pref("extensions.update.enabled", true);
user_pref("extensions.legacy.enable", true);
user_pref("app.update.auto", false);
// default - user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("extensions.update.autoUpdateDefault", false);
user_pref("app.update.service.enabled", false);
//user_pref("app.update.staging.enabled", false);
user_pref("app.update.silent", false);
user_pref("extensions.getAddons.cache.enabled", false);
user_pref("lightweightThemes.update.enabled", false);
user_pref("browser.search.update", false);
user_pref("extensions.getAddons.showPane", false);
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
user_pref("dom.ipc.plugins.reportCrashURL", false);
user_pref("extensions.webservice.discoverURL", "http://127.0.0.1");
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
//user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.cachedClientID", "");
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry.ping.endpoint", "");
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
//user_pref("datareporting.healthreport.about.reportUrl", "data:text/plain,");
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit3", false);
user_pref("browser.newtab.preload", false);
user_pref("browser.newtabpage.directory.source", "data:text/plain,");
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtabpage.enhanced", false);
user_pref("browser.newtabpage.introShown", true);
user_pref("browser.aboutHomeSnippets.updateUrl", "https://127.0.0.1");

// Opt-out of shield studies
user_pref("app.normandy.api_url", "");
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("extensions.shield-recipe-client.api_url", "");
user_pref("extensions.shield-recipe-client.enabled", false);

user_pref("extensions.blocklist.enabled", true);
user_pref("extensions.blocklist.url", "https://blocklists.settings.services.mozilla.com/v1/blocklist/3/%APP_ID%/%APP_VERSION%/");
user_pref("services.blocklist.update_enabled", true);
user_pref("services.blocklist.signing.enforced", true);
// user_pref("services.blocklist.onecrl.collection", "");
// user_pref("services.blocklist.addons.collection", "");
// user_pref("services.blocklist.plugins.collection", "");
// user_pref("services.blocklist.gfx.collection", "");
// user_pref("browser.safebrowsing.malware.enabled", false);
// user_pref("browser.safebrowsing.phishing.enabled", false);
// user_pref("browser.safebrowsing.downloads.enabled", false);
// user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
// user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
// user_pref("browser.safebrowsing.downloads.remote.block_dangerous", false);
// user_pref("browser.safebrowsing.downloads.remote.block_dangerous_host", false);
// user_pref("browser.safebrowsing.provider.google.updateURL", "");
// user_pref("browser.safebrowsing.provider.google.gethashURL", "");
// user_pref("browser.safebrowsing.provider.google4.updateURL", "");
// user_pref("browser.safebrowsing.provider.google4.gethashURL", "");
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");
user_pref("browser.safebrowsing.provider.google.reportURL", "");
user_pref("browser.safebrowsing.reportPhishURL", "");
user_pref("browser.safebrowsing.provider.google4.reportURL", "");
user_pref("browser.safebrowsing.provider.google.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", "");
// user_pref("browser.safebrowsing.allowOverride", false);
// user_pref("privacy.trackingprotection.pbmode.enabled", true); // default true
// user_pref("privacy.trackingprotection.enabled", true); // default false
user_pref("privacy.trackingprotection.ui.enabled", true);
// user_pref("urlclassifier.trackingTable", "test-track-simple,base-track-digest256"); // basic
// user_pref("urlclassifier.trackingTable", "test-track-simple,base-track-digest256,content-track-digest256"); // strict
// user_pref("browser.safebrowsing.blockedURIs.enabled", false);
// user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "");
// user_pref("browser.safebrowsing.provider.mozilla.updateURL", "");

user_pref("experiments.enabled", false);
user_pref("experiments.manifest.uri", "");
user_pref("experiments.supported", false);
user_pref("experiments.activeExperiment", false);
user_pref("network.allow-experiments", false);
// user_pref("extensions.systemAddon.update.url", "");
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.shield-recipe-client.enabled", false);
user_pref("extensions.shield-recipe-client.api_url", "");
user_pref("browser.newtabpage.activity-stream.enabled", false);
// user_pref("extensions.screenshots.disabled", true);
user_pref("browser.onboarding.enabled", false);
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.experimental", false);
user_pref("extensions.formautofill.heuristics.enabled", false);
user_pref("extensions.webcompat-reporter.enabled", false);
user_pref("network.prefetch-next", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.predictor.enabled", false);
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("browser.send_pings", false);
user_pref("browser.send_pings.require_same_host", true);
user_pref("network.protocol-handler.external.ms-windows-store", false);
user_pref("network.predictor.enable-prefetch", false);


//user_pref("keyword.enabled", false);
user_pref("browser.fixup.alternate.enabled", false);
user_pref("browser.urlbar.trimURLs", false);
user_pref("browser.sessionhistory.max_entries", 10);
user_pref("layout.css.visited_links_enabled", false);
user_pref("browser.urlbar.filter.javascript", true);
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.userMadeSearchSuggestionsChoice", true);
user_pref("browser.urlbar.usepreloadedtopurls.enabled", false);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
// user_pref("browser.urlbar.autocomplete.enabled", false);
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.bookmark", false);
user_pref("browser.urlbar.suggest.openpage", false);
// user_pref("browser.urlbar.maxRichResults", 0);
user_pref("browser.urlbar.autoFill", false);
user_pref("browser.urlbar.autoFill.typed", false);
user_pref("browser.urlbar.oneOffSearches", false);
// user_pref("browser.formfill.enable", false);
// user_pref("places.history.enabled", false);
user_pref("browser.taskbar.lists.enabled", false);
user_pref("browser.taskbar.lists.frequent.enabled", false);
user_pref("browser.taskbar.lists.recent.enabled", false);
user_pref("browser.taskbar.lists.tasks.enabled", false);
user_pref("browser.taskbar.previews.enable", false);

// user_pref("signon.rememberSignons", false);
user_pref("security.ask_for_password", 2);
user_pref("security.password_lifetime", 5);
user_pref("signon.autofillForms", false);
user_pref("signon.storeWhenAutocompleteOff", true);
user_pref("security.insecure_password.ui.enabled", true);
user_pref("security.insecure_connection_icon.enabled", true);
user_pref("browser.fixup.hide_user_pass", true);
user_pref("signon.formlessCapture.enabled", false);
user_pref("signon.autofillForms.http", false);
user_pref("security.insecure_field_warning.contextual.enabled", true);


user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.disk.capacity", 0);
user_pref("browser.cache.disk.smart_size.enabled", false);
user_pref("browser.cache.disk.smart_size.first_run", false);
user_pref("browser.cache.disk_cache_ssl", false);

// user_pref("browser.cache.memory.enable", false);
// user_pref("browser.cache.memory.capacity", 0);
user_pref("browser.cache.offline.enable", false);
// user_pref("browser.sessionhistory.max_total_viewers", 0);
// user_pref("permissions.memory_only", true); // (hidden pref)
user_pref("browser.cache.frecency_experiment", -1);
// user_pref("network.dnsCacheEntries", 400);
// user_pref("network.dnsCacheExpiration", 60);
user_pref("browser.sessionstore.max_tabs_undo", 0);
user_pref("browser.sessionstore.max_windows_undo", 0);
user_pref("browser.sessionstore.privacy_level", 2);
user_pref("browser.sessionstore.resume_from_crash", false);
user_pref("browser.sessionstore.interval", 30000);
user_pref("browser.shell.shortcutFavicons", false);
// user_pref("browser.chrome.site_icons", false);
// user_pref("browser.chrome.favicons", false);
user_pref("alerts.showFavicons", false);


// user_pref("security.ssl.require_safe_negotiation", true);
user_pref("security.tls.version.min", 3);
user_pref("security.tls.version.fallback-limit", 3);
user_pref("security.tls.version.max", 4); // 4 = allow up to and including TLS 1.3
user_pref("security.ssl.disable_session_identifiers", true); // (hidden pref)
user_pref("security.ssl.errorReporting.automatic", false);
user_pref("security.ssl.errorReporting.enabled", false);
user_pref("security.ssl.errorReporting.url", "");
user_pref("security.ssl.enable_ocsp_stapling", true);
user_pref("security.OCSP.enabled", 1);
user_pref("security.OCSP.require", true);
user_pref("security.family_safety.mode", 0);
// user_pref("security.nocertdb", true); // (hidden pref)
user_pref("security.cert_pinning.enforcement_level", 2);
user_pref("network.stricttransportsecurity.preloadlist", true);
user_pref("security.mixed_content.block_active_content", true);
// user_pref("security.mixed_content.block_display_content", true);
user_pref("security.pki.sha1_enforcement_level", 1);
user_pref("security.ssl3.rsa_des_ede3_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_aes_128_sha", false);
user_pref("security.ssl3.ecdhe_rsa_aes_128_sha", false);
user_pref("security.ssl3.dhe_rsa_aes_128_sha", false);
user_pref("security.ssl3.dhe_rsa_aes_256_sha", false);
// user_pref("security.ssl3.rsa_aes_128_sha", false);
// user_pref("security.ssl3.rsa_aes_256_sha", false);
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
user_pref("browser.ssl_override_behavior", 1);
user_pref("browser.xul.error_pages.expert_bad_cert", true);


user_pref("browser.display.use_document_fonts", 0);
user_pref("gfx.downloadable_fonts.enabled", true);
user_pref("gfx.downloadable_fonts.woff2.enabled", false);
user_pref("layout.css.font-loading-api.enabled", false);
user_pref("font.blacklist.underline_offset", "");
user_pref("gfx.font_rendering.graphite.enabled", false);
// user_pref("font.system.whitelist", "");


// Ref
user_pref("network.http.sendRefererHeader", 2);
user_pref("network.http.referer.trimmingPolicy", 1);
user_pref("network.http.referer.XOriginPolicy", 2);
user_pref("network.http.referer.defaultPolicy", 3);
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);
user_pref("network.http.referer.spoofSource", true);
user_pref("network.http.referer.hideOnionSource", true);
user_pref("privacy.donottrackheader.enabled", false);


// user_pref("privacy.userContext.ui.enabled", true);
// user_pref("privacy.userContext.enabled", true);
// user_pref("privacy.usercontext.about_newtab_segregation.enabled", true);
// user_pref("privacy.userContext.longPressBehavior", 2);


user_pref("plugin.default.state", 0);
user_pref("permissions.default.shortcuts", 2);
user_pref("plugin.defaultXpi.state", 0);
user_pref("plugins.click_to_play", true);
user_pref("plugin.sessionPermissionNow.intervalInMinutes", 0);
// user_pref("plugin.state.flash", 0);
user_pref("plugin.scan.plid.all", false);
user_pref("media.gmp-provider.enabled", false);
user_pref("media.gmp.trial-create.enabled", false);
user_pref("media.gmp-widevinecdm.visible", false);
user_pref("media.gmp-widevinecdm.enabled", false);
user_pref("media.gmp-widevinecdm.autoupdate", false);
user_pref("media.eme.enabled", false);
user_pref("browser.eme.ui.enabled", false);
user_pref("media.gmp-gmpopenh264.enabled", false);
user_pref("media.gmp-gmpopenh264.autoupdate", false);



user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.use_document_iceservers", false);
user_pref("media.peerconnection.video.enabled", false);
user_pref("media.peerconnection.identity.enabled", false);
user_pref("media.peerconnection.identity.timeout", 1);
user_pref("media.peerconnection.turn.disable", true);
user_pref("media.peerconnection.ice.tcp", false);
user_pref("media.navigator.video.enabled", false);
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("media.peerconnection.ice.no_host", true);
user_pref("webgl.disabled", true);
user_pref("pdfjs.enableWebGL", false);
user_pref("webgl.min_capability_mode", true);
user_pref("webgl.disable-extensions", true);
user_pref("webgl.disable-fail-if-major-performance-caveat", true);
user_pref("webgl.enable-debug-renderer-info", false);
user_pref("webgl.dxgl.enabled", false);
user_pref("webgl.enable-webgl2", false);
user_pref("media.webspeech.recognition.enable", false);
user_pref("media.webspeech.synth.enabled", false);
user_pref("media.getusermedia.screensharing.enabled", false);
user_pref("media.getusermedia.browser.enabled", false);
user_pref("media.getusermedia.audiocapture.enabled", false);
user_pref("canvas.capturestream.enabled", false);
user_pref("dom.imagecapture.enabled", false);
user_pref("gfx.offscreencanvas.enabled", false);
user_pref("media.autoplay.enabled", false);
user_pref("media.block-autoplay-until-in-foreground", true);



// user_pref("dom.event.contextmenu.enabled", false);
user_pref("dom.disable_window_open_feature.location", true);
user_pref("dom.disable_window_open_feature.menubar", true);
user_pref("dom.disable_window_open_feature.resizable", true);
user_pref("dom.disable_window_open_feature.status", true);
user_pref("dom.disable_window_open_feature.toolbar", true);
user_pref("dom.disable_window_flip", true);
user_pref("dom.disable_window_move_resize", true);
user_pref("dom.disable_window_open_feature.close", true);
user_pref("dom.disable_window_open_feature.minimizable", true);
user_pref("dom.disable_window_open_feature.personalbar", true);
user_pref("dom.disable_window_open_feature.titlebar", true);
user_pref("dom.allow_scripts_to_close_windows", false);
user_pref("browser.link.open_newwindow.restriction", 0);

// DOM
user_pref("dom.workers.enabled", false);
user_pref("dom.serviceWorkers.enabled", false);
user_pref("dom.caches.enabled", false);
user_pref("dom.webnotifications.enabled", false);
user_pref("dom.webnotifications.serviceworker.enabled", false);
user_pref("dom.push.enabled", false);
user_pref("dom.push.connection.enabled", false);
user_pref("dom.push.serverURL", "");
user_pref("dom.push.userAgentID", "");
user_pref("dom.event.clipboardevents.enabled", false);
user_pref("dom.allow_cut_copy", false);
user_pref("dom.indexedDB.enabled", false);
user_pref("dom.enable_resource_timing", false);
//user_pref("dom.enable_performance", false);
user_pref("dom.vibrator.enabled", false);
user_pref("dom.popup_maximum", 3);
user_pref("dom.popup_allowed_events", "click dblclick");
//user_pref("full-screen-api.enabled", false);
user_pref("javascript.options.asmjs", false);
// user_pref("javascript.options.ion", false);
// user_pref("javascript.options.baselinejit", false);
user_pref("javascript.options.wasm", false);
user_pref("dom.IntersectionObserver.enabled", false);
user_pref("offline-apps.allow_by_default", false);
user_pref("browser.offline-apps.notify", true);
// user_pref("offline-apps.quota.warn", 51200);
//user_pref("dom.disable_beforeunload", true);
//user_pref("dom.w3c_pointer_events.enabled", false);


user_pref("dom.keyboardevent.code.enabled", false);
user_pref("dom.keyboardevent.dispatch_during_composition", false);
user_pref("dom.gamepad.enabled", false);
user_pref("dom.netinfo.enabled", false);
user_pref("dom.vr.enabled", false);
user_pref("media.navigator.enabled", false);
//user_pref("media.video_stats.enabled", false);
user_pref("gfx.direct2d.disabled", true);
user_pref("dom.w3c_touch_events.enabled", 0);
user_pref("dom.webaudio.enabled", false);
user_pref("media.ondevicechange.enabled", false);
user_pref("device.sensors.enabled", false);
user_pref("dom.presentation.enabled", false);
user_pref("dom.presentation.controller.enabled", false);
user_pref("dom.presentation.discoverable", false);
user_pref("dom.presentation.discovery.enabled", false);
user_pref("dom.presentation.receiver.enabled", false);
user_pref("dom.presentation.session_transport.data_channel.enable", false);
// user_pref("dom.maxHardwareConcurrency", 2);
user_pref("browser.zoom.siteSpecific", false);


user_pref("beacon.enabled", false);
user_pref("browser.download.folderList", 2);
user_pref("browser.download.useDownloadDir", false);
user_pref("browser.helperApps.deleteTempFileOnExit", true);
user_pref("browser.download.manager.addToRecentDocs", false);
user_pref("browser.download.hide_plugins_without_extensions", false);
user_pref("browser.pagethumbnails.capturing_disabled", true);
user_pref("network.jar.open-unsafe-types", false);
user_pref("browser.tabs.remote.allowLinkedWebInFileUriProcess", false);
user_pref("ui.use_standins_for_native_colors", true); // (hidden pref)
user_pref("devtools.webide.autoinstallADBHelper", false);
user_pref("devtools.debugger.remote-enabled", false);
user_pref("devtools.webide.enabled", false);
user_pref("network.http.spdy.enabled", false);
user_pref("network.http.spdy.enabled.deps", false);
user_pref("network.http.spdy.enabled.http2", false);
user_pref("pdfjs.disabled", false);
user_pref("network.http.redirection-limit", 10);
user_pref("middlemouse.contentLoadURL", false);
// user_pref("network.dns.disableIPv6", true);
// user_pref("network.http.fast-fallback-to-IPv4", true);

user_pref("security.dialog_enable_delay", 700);
user_pref("security.fileuri.strict_origin_policy", true);
user_pref("security.sri.enable", true);
//user_pref("network.dns.blockDotOnion", true);
user_pref("general.useragent.compatMode.firefox", false);
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.url", "");
user_pref("network.jar.block-remote-files", true);
user_pref("browser.download.forbid_open_with", true);
user_pref("device.storage.enabled", false);
user_pref("webchannel.allowObject.urlWhitelist", "");
user_pref("network.http.altsvc.oe", false);
user_pref("network.http.altsvc.enabled", false);
user_pref("devtools.chrome.enabled", false);
user_pref("extensions.enabledScopes", 1); // (hidden pref)
user_pref("extensions.autoDisableScopes", 15);
user_pref("network.proxy.autoconfig_url.include_path", false);
user_pref("security.block_script_with_wrong_mime", true);
// user_pref("svg.disabled", true);

user_pref("network.IDN_show_punycode", true);
user_pref("security.csp.enable", true);
user_pref("security.csp.experimentalEnabled", true);
user_pref("security.data_uri.block_toplevel_data_uri_navigations", true);
user_pref("security.csp.enable_violation_events", false);


user_pref("privacy.firstparty.isolate", true);
user_pref("privacy.firstparty.isolate.restrict_opener_access", true);
//user_pref("privacy.resistFingerprinting", true); // This add-on requires a newer version of Firefox (at least version 57.0). You are using Firefox 52.0.
// user_pref("privacy.window.maxInnerWidth", 1600);
// user_pref("privacy.window.maxInnerHeight", 900);


user_pref("network.cookie.cookieBehavior", 2);
user_pref("network.cookie.thirdparty.sessionOnly", true);
user_pref("network.cookie.thirdparty.nonsecureSessionOnly", true);
// user_pref("network.cookie.lifetimePolicy", 0);
// user_pref("network.cookie.lifetime.days", 90);
// user_pref("dom.storage.enabled", false);
user_pref("dom.storageManager.enabled", false);
user_pref("browser.storageManager.enabled", false);
user_pref("network.cookie.leave-secure-alone", true);


user_pref("privacy.sanitize.sanitizeOnShutdown", true);
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown.cookies", true);
user_pref("privacy.clearOnShutdown.downloads", true);
user_pref("privacy.clearOnShutdown.formdata", true);
user_pref("privacy.clearOnShutdown.history", true);
user_pref("privacy.clearOnShutdown.offlineApps", true);
user_pref("privacy.clearOnShutdown.sessions", true);
user_pref("privacy.clearOnShutdown.siteSettings", false);

user_pref("privacy.cpd.cache", true);
user_pref("privacy.cpd.cookies", false);
// user_pref("privacy.cpd.downloads", true);
user_pref("privacy.cpd.formdata", true);
user_pref("privacy.cpd.history", true);
user_pref("privacy.cpd.offlineApps", true);
user_pref("privacy.cpd.passwords", false);
user_pref("privacy.cpd.sessions", true);
user_pref("privacy.cpd.siteSettings", false);
// user_pref("privacy.clearOnShutdown.openWindows", true);
// user_pref("privacy.cpd.openWindows", true);
user_pref("privacy.sanitize.timeSpan", 0);


user_pref("general.warnOnAboutConfig", false);
user_pref("browser.tabs.warnOnClose", false);
user_pref("browser.tabs.warnOnCloseOtherTabs", false);
user_pref("browser.tabs.warnOnOpen", false);
// user_pref("full-screen-api.warning.delay", 0);
// user_pref("full-screen-api.warning.timeout", 0);
user_pref("browser.tabs.closeWindowWithLastTab", false);
user_pref("browser.backspace_action", 2);
// user_pref("xpinstall.signatures.required", false);
user_pref("browser.link.open_newwindow", 3);
//user_pref("browser.ctrlTab.previews", true);
user_pref("view_source.tab", false);
user_pref("layout.spellcheckDefault", 1);
user_pref("ui.submenuDelay", 150);
user_pref("browser.bookmarks.max_backups", 2);
user_pref("browser.bookmarks.restore_default_bookmarks", false);
//user_pref("browser.bookmarks.showMobileBookmarks", true);
user_pref("media.wmf.vp9.enabled", true);

// user_pref("reader.parse-on-load.enabled", false);
user_pref("browser.urlbar.decodeURLsOnCopy", true);
// user_pref("general.autoScroll", false);


user_pref("pageThumbs.enabled", false);
user_pref("dom.network.enabled", false);
user_pref("network.websocket.enabled", false);
// user_pref("privacy.donottrackheader.value", 1);
user_pref("camera.control.autofocus_moving_callback.enabled", false);
user_pref("plugins.enumerable_names", "");
// user_pref("browser.safebrowsing.gethashURL", "");
// user_pref("browser.safebrowsing.updateURL", "");
user_pref("browser.safebrowsing.malware.reportURL", "");
// user_pref("browser.trackingprotection.gethashURL", "");
// user_pref("browser.trackingprotection.updateURL", "");
user_pref("pfs.datasource.url", "");
// user_pref("browser.search.showOneOffButtons", false);

// Social 
user_pref("social.enabled", false);
//user_pref("social.whitelist", "");
user_pref("social.toast-notifications.enabled", false);
user_pref("social.shareDirectory", "");
user_pref("social.remote-install.enabled", false);
user_pref("social.share.activationPanelEnabled", false);

user_pref("browser.safebrowsing.provider.google.appRepURL", "");
user_pref("browser.safebrowsing.provider.google4.dataSharingURL", "");
user_pref("security.tls.insecure_fallback_hosts.use_static_list", false);
user_pref("dom.workers.sharedWorkers.enabled", false);
// user_pref("dom.disable_image_src_set", true);
user_pref("browser.sessionstore.privacy_level_deferred", 2);
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("datareporting.healthreport.documentServerURI", "");
user_pref("datareporting.policy.dataSubmissionEnabled.v2", false);
user_pref("browser.safebrowsing.appRepURL", "");
user_pref("browser.pocket.enabled", false);
user_pref("browser.pocket.api", "");
user_pref("browser.pocket.site", "");
user_pref("browser.pocket.oAuthConsumerKey", "");
user_pref("toolkit.telemetry.unifiedIsOptIn", true);
user_pref("toolkit.telemetry.hybridContent.enabled", false);
user_pref("browser.ping-centre.telemetry", false);
//user_pref("toolkit.cosmeticAnimations.enabled", false);
user_pref("browser.history.allowPopState", false);
user_pref("browser.history.allowPushState", false);
user_pref("browser.history.allowReplaceState", false);
user_pref("browser.urlbar.unifiedcomplete", false);


user_pref("loop.enabled", false);
user_pref("loop.server", "");
user_pref("loop.feedback.formURL", "");
user_pref("loop.feedback.manualFormURL", "");
user_pref("loop.facebook.appId", "");
user_pref("loop.facebook.enabled", false);
user_pref("loop.facebook.fallbackUrl", "");
user_pref("loop.facebook.shareUrl", "");
user_pref("loop.logDomains", false);
user_pref("dom.disable_window_open_feature.scrollbars", true);
user_pref("dom.push.udp.wakeupEnabled", false);


user_pref("browser.usedOnWindows10.introURL", "");
user_pref("plugins.update.notifyUser", false);
// user_pref("browser.safebrowsing.enabled", false);
user_pref("security.ssl3.ecdhe_ecdsa_rc4_128_sha", false);
user_pref("security.ssl3.ecdhe_rsa_rc4_128_sha", false);
user_pref("security.ssl3.rsa_rc4_128_md5", false);
user_pref("security.ssl3.rsa_rc4_128_sha", false);
user_pref("plugins.update.url", "");
user_pref("media.block-play-until-visible", true);
user_pref("dom.vr.oculus050.enabled", false);
user_pref("network.http.spdy.enabled.v3-1", false);
user_pref("network.http.sendSecureXSiteReferrer", false);
user_pref("network.http.spdy.enabled.http2draft", false);


user_pref("media.gmp-eme-adobe.enabled", false);
user_pref("media.gmp-eme-adobe.visible", false);
user_pref("media.gmp-eme-adobe.autoupdate", true);


user_pref("dom.telephony.enabled", false);
user_pref("dom.battery.enabled", false);
user_pref("security.tls.unrestricted_rc4_fallback", false);


user_pref("plugin.scan.Acrobat", "99999");
user_pref("plugin.scan.Quicktime", "99999");
user_pref("plugin.scan.WindowsMediaPlayer", "99999");
user_pref("media.getusermedia.screensharing.allow_on_old_platforms", false);
user_pref("dom.beforeAfterKeyboardEvent.enabled", false);
user_pref("browser.safebrowsing.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.reportPhishMistakeURL", "");
user_pref("media.eme.apiVisible", false);
user_pref("dom.archivereader.enabled", false);
