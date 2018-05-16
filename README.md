    [][][][][]  []  [][][][] [][][][][] [][][][][]  [][][][][]  []       []
    []              [][]  [] []         []          []      []    []   []
    [][][]      []  [][]  [] [][][]     [][][]      []      []      []
    []          []  []  []   []         []          []      []    []   []
    []          []  []    [] [][][][][] []          [][][][][]  []       [] about:config
     
    Firefox About:Config Tricks & Hardening (based on kb.mozillazine.org, 12bytes.org, user.js project)
    
    Speed up and harden your Mozilla Firefox Browser!
							==== Introduced by CHEF-KOCH ==== 
	
	
[![Twitter URL](https://img.shields.io/twitter/url/https/twitter.com/fold_left.svg?style=social&label=Follow%20%40CHEF-KOCH)](https://twitter.com/CKsTechNews)
[![Say Thanks!](https://img.shields.io/badge/Say%20Thanks-!-1EAEDB.svg)](https://saythanks.io/to/CHEF-KOCH)
[![Discord](https://discordapp.com/api/guilds/418256415874875402/widget.png)](https://discord.me/CHEF-KOCH)


### ToDo

* DOM is not evil, JavaScript is, the abuse may only affects several test pages - we need to mention and verify it. Global access != local ... 
* WebGL/OpenGL/D3D issue on Android/Windows - needs to be mentioned
* DNS / NTP needs to be mentioned -> Explanation? 
* [Several test pages](https://github.com/CHEF-KOCH/Online-Privacy-Test-Resource-List) needs to be added to verify the current 'security' status.- Most people prefer something visual over cmd/shell. 
* Find a way to pick changed FF configurations and compare them to easier find new about:config changes
* Certificate 'hardening' is not necessary, better disable internal stuff and let the OS handle it but show or give people a way to harden the OS own certificates. This is better because the OS handles more as the browser. especially an Windows/or in general server based OS'es we should filter stuff on the lowest level. I'm working on something for this. (not public)
* Remove obsolete stuff much faster to merge it with my addon (will automatically grab the user.js from here).
* Considering to remove WebPush? May breaks Telegram/WhatsApp WebServices
* Syntax check to avoid failures 
* Pull requests and Ideas are always welcome!
* Since I not use PaleMoon the topic about this can be found over [here](https://github.com/CHEF-KOCH/FFCK/issues/2)
* Requests, random talk [belongs into this thread](https://github.com/CHEF-KOCH/FFCK/issues/3)


### Research

* [Mozilla Security Center (Mozilla.com)](https://www.mozilla.org/en-US/security/)
* [Firefox security blog (blog.mozilla.com)](https://blog.mozilla.org/security/)
* [Browser hardening (Blog.torproject.org)](https://blog.torproject.org/blog/isec-partners-conducts-tor-browser-hardening-study)
