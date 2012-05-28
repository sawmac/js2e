#Tutorial Files for JavaScript & jQuery: The Missing Manual
The files here are for the book, JavaScript & jQuery: The Missing Manual, by David Sawyer McFarland, and published by O'Reilly Media, &copy; 2012. 
##Updates
* 5/28/2012: I've updated the tutorial files to include the jQuery version 1.7.2. When the book was originally published, jQuery 1.6.3 was the current version. To use the new version of the library, when you are asked in the tutorials to type **jquery-1.6.3.min.js**, use **jquery-1.7.2.min.js** instead. The completed versions of the tutorials include the 1.7.2 version of the library.
* 5/28/2012: The tutorial "Opening a Page Within a Page" on page 248 doesn't work as is. Since the publication of this book, some sites have started preventing their pages from appearing within iFrames. Google and Yahoo!, for example, are afraid of security problems related to putting their pages inside iFrames. A web server can send out what's called an X-Frame-Options HTTP response header which prevents the page from being displayed inside an iFrame. It's explained here:
https://developer.mozilla.org/en/The_X-FRAME-OPTIONS_response_header. In other words the original tutorial, which included both Google and Yahoo! links won't work. Many sites *don't* prevent their pages from appearing inside an iFrame, so you can still use this technique; just make sure to test it with the sites you link to. The tutorial instructions should be changed to:

>1. (Step 1 is the same)

>2. Locate the first link, and add *class="iframe"* so the code looks like this: &lt;a href="http://smashingmagazine.com/" class="iframe">Smashing Magazine&lt;/a>

>3. Add *title="Smashing Magazine"* to the link you edited in the last step so it looks like this: &lt;a href="http://smashingmagazine.com/" class="iframe" title="Smashing Magazine">Smashing Magazine&lt;/a>

>4. (The rest of the steps are the same.)