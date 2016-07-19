///////////////////////////////////
//// === PaleMoon SPECIFIC === ////
//////////////////////////////////

/*
    Full list maintained by Moonchild: https://forum.palemoon.org/viewtopic.php?f=24&t=3357
    If you have issues or questions about any of these, please use the PaleMoon forums !!
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
   // 3204: (v25.6+) Controls whether to completely ignore "autocomplete=off" on login fields
   // user_pref("signon.ignoreAutocomplete", false);
// 3205: (v26.0+) read Moonchild's description on the PaleMoon forum thread linked above
   // user_pref("dom.disable_beforeunload", true);
   
user_pref("media.autoplay.allowscripted", false)          // [boolean] disables HTML5 autoloading on videos 