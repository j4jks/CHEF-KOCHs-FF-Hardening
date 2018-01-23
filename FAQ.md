#1 Why is NoScript configured to allow JavaScript by default in Tor Browser? Isn't that unsafe?
================================

We configure NoScript to allow JavaScript by default in Tor Browser because many websites will not work with JavaScript disabled. Most users would give up on Tor entirely if a website they want to use requires JavaScript, because they would not know how to allow a website to use JavaScript (or that enabling JavaScript might make a website work).

There's a tradeoff here. On the one hand, we should leave JavaScript enabled by default so websites work the way users expect. On the other hand, we should disable JavaScript by default to better protect against browser vulnerabilities ( not just a theoretical concern!). But there's a third issue: websites can easily determine whether you have allowed JavaScript for them, and if you disable JavaScript by default but then allow a few websites to run scripts (the way most people use NoScript), then your choice of whitelisted websites acts as a sort of cookie that makes you recognizable (and distinguishable), thus harming your anonymity.

Ultimately, we want the default Tor bundles to use a combination of firewalls (like the iptables rules in Tails) and sandboxes to make JavaScript not so scary. In the shorter term, TBB 3.0 will hopefully allow users to choose their JavaScript settings more easily — but the partitioning concern will remain.

Until we get there, feel free to leave JavaScript on or off depending on your security, anonymity, and usability priorities.

Source:
* https://www.torproject.org/docs/faq.html.en#TBBJavaScriptEnabled



#2 Wont fix
================================


I not waste my and anyone's time trying to fix something which is protocol related and needs to be fixed within the source. Disabling it makes less sense because a) not every site use it b) not directly compromise your security setup c) not every page is exploitable or abuse this (since there is less benefit from doing it) d) I believe in layer security and not software 'security'.


* WebRTC
* Entirely disabling JS (see also ^^ #1)
* OpenGL/Vulkan
* Stuff which breaks functionally such as 'xyz' API
* [Plugin](https://www.fxsitecompat.com/en-CA/docs/2015/plug-in-support-will-be-dropped-by-the-end-of-2016-except-flash/) related questions or things



#3
================================

Does any of these tweaks really increase my security and how can I check it?

There bunch of websites which testing specific API's, but it's questionable if you need the tweaks, I do believe that critical security things need to be fixed in the source code and not via any 'tweaks'. That said when you never enable JavaScript or visit pages which abusing privileges or such API's you're secure and do not need any tweaks.


#4 What is Telemetry?
================================
Telemetry is an automated communications process by which measurements and other data are collected at remote or inaccessible points and transmitted to receiving equipment for monitoring. The word is derived from Greek roots: tele = remote, and metron = measure. 
Please note and consider to leave telemetry enabled, this helps Mozilla to secure the browser,it's not about tracking or spying the thing is that no one wants to send manually the needed information and at the end mostly such reports doesn't help at all cause something is missing and it consumes overall more time. 