# What is WebNowPlaying?

<div class="tip custom-block" style="padding-top: 8px">

Just want to try it out? Skip to the [Quickstart](/quickstart).

</div>

WebNowPlaying (or WebNowPlaying-Redux) enables programs to read and control media players.

- Browser extension - Provides support for browser-based players.
- Adapter library - Communicates with the browser extension and provides support for [Desktop Players](/desktop-players).

## Adapters

These are programs, plugins or scripts make use of WebNowPlaying.

**Official Adapters**

- Rainmeter Plugin ([Docs](/rainmeter/getting-started), [GitHub](https://github.com/keifufu/WebNowPlaying-Rainmeter))
- OBS Script ([Docs](/obs/getting-started), [GitHub](https://github.com/keifufu/WebNowPlaying-OBS))
- CLI ([Docs](/cli/getting-started), [GitHub](https://github.com/keifufu/WebNowPlaying-CLI))

**Third-party adapters**

- Macro Deck Plugin ([GitHub](https://github.com/jbcarreon123/WebNowPlaying-Macro-Deck))

Want to create or submit your own adapter? Click [here](/creating-adapters/getting-started)!

## History

A rough changelog of the major versions. For a more complete changelog, see:

- [Extension changelog](/extension/changelog)
- [Rainmeter Plugin changelog](/rainmeter/changelog)
- [OBS Script changelog](/obs/changelog)
- [CLI changelog](/cli/changelog)

**v0.x**

These versions were created by [@tjhrulz](https://github.com/tjhrulz).  
WebNowPlaying is a drop-in replacement for Rainmeter's [NowPlaying](https://docs.rainmeter.net/manual/measures/nowplaying/) plugin, the browser extension would connect to the plugin and let Rainmeter read/control browser media.  
It also allowed for additonl controls, such as the players volume.

**v1.x**

Versions from here on were created by [@keifufu](https://github.com/keifufu).  
The extension could now connect to multiple adapters.

**v2.x**

Support for Desktop Players was added, read more about it [here](/desktop-players).  
Adapters can now also read what functionality the current media supports, e.g., `canSkipNext`, `canSetRating`, etc.

**v3.x**

Adapters can read and send events to all/any player(s) instead of just the active one.  
Events return whether they succeeded or failed.  
Players report their available repeat modes.  
Shuffle and repeat modes can now be set instead of just toggled.
