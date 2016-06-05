Linux
========

Drop the hardened user.js file into your Firefox profile directory at <code>~/.mozilla/firefox/XXXXXXXX.your_profile_name</code> and verify that the settings are effective from about:support (check the "Important Modified Preferences" and "user.js Preferences" sections).

If you want to be able to keep your user.js up-to-date with this repository, you can clone the latter in the main Mozilla directory and create a link to the user.js file from your profile:

```bash
cd ~/.mozilla/firefox
git clone 'https://raw.githubusercontent.com/CHEF-KOCH/FFCK/master/user.js'
cd XXXXXXXX.your_profile_name
ln -s ../CHEF-KOCH/FFCK user.js
```


Android
========

On Firefox for Android (Fennec), you need to drop the file to <code>/data/data/org.mozilla.firefox/files/mozilla/XXXXXXXX.your_profile_name</code>. If you use Jolla and run Firefox through Alien Dalvik, the location needs to be prefixed with <code>/opt/alien</code>.


Windows
========

On Windows, you need to drop the user.js file to <code>%appdata%\Mozilla\Firefox\Profiles\XXXXXXXX.your_profile_name</code>.



My configuration doesn't load or FF not applies the new values - what can I do?
========

If you have one incorrect or outdated preference Firefox stops reading the user.js file at that error - none of the prefs beyond that point are read.


Resources
========

* https://support.mozilla.org/en-US/kb/profiles-where-firefox-stores-user-data
* https://support.mozilla.org/en-US/kb/profile-manager-create-and-remove-firefox-profiles
* http://forums.mozillazine.org/viewtopic.php?f=38&t=2477123
