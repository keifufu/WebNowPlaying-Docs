# What is WebNowPlaying?

<div class="tip custom-block" style="padding-top: 8px">

Just want to try it out? Skip to the [Quickstart](/quickstart).

</div>

WebNowPlaying (also known as WebNowPlaying-Redux) is a browser extension that exposes information and controls for currently playing media in the browser.

Newer versions of official adapters can also interact with desktop players such as Spotify, Tidal, foobar2000 and others. Read more about it [here](/desktop-players).

## Adapters

These are programs, plugins or scripts that connect to the browser extension and utilize this data in various ways.

**Official Adapters**

- Rainmeter Plugin ([Docs](), [GitHub](https://github.com/keifufu/WebNowPlaying-Redux-Rainmeter))
- OBS Script ([Docs](), [GitHub](https://github.com/keifufu/WebNowPlaying-Redux-OBS))

**Third-party adapters**

- Macro Deck Plugin ([GitHub](https://github.com/jbcarreon123/WebNowPlaying-Redux-Macro-Deck))

Want to create or submit your own adapter? Click [here](/creating-adapters/getting-started)!

## History

**v0.x**

This version was created and maintained by [tjhrulz](https://github.com/tjhrulz).  
It consisted of a browser extension and a Rainmeter Plugin, intended as a drop-in replacement for Rainmeter's NowPlaying plugin.

**v1.x**

This version, also known as WebNowPlaying-Redux, started as a fork of the browser extension, but was completely rewritten.  
It fixed issues the original extension has and had a separate web store listing.  
Shortly after release, tjhrulz and I agreed to make WebNowPlaying-Redux the default by replacing the original web store listing.  
The browser extension was then extended to allow multiple adapters to be connected at once, and the Rainmeter plugin was also rewritten.

**v2.x**

Native support for Desktop Players was added, read more about it [here](/desktop-players).  
Adapters can now also read what functionality the current media supports, e.g., `canSkipNext`, `canSetRating`, etc.
