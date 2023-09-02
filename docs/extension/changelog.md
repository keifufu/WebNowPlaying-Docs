# Changelog

<div class="tip custom-block" style="padding-top: 8px">

Changelogs for v0.x.x are only partly available, these versions are made by [tjhrulz](https://github.com/tjhrulz).

</div>

Full changelog available via [Github Commits](https://github.com/keifufu/WebNowPlaying-Redux/commits/main)

## v2.0.9

- Fixed Apple Music Duration

## v2.0.8

- Disabled reports as they are currently useless

## v2.0.7

- Fixed YouTube Music covers

## v2.0.6

- Updated links to new documentation
- Remove " - Topic" from artists

## v2.0.5

- Properly fix what should have been fixed in 2.0.3 and 2.0.4

## v2.0.4

- Fixed Spotify rating

## v2.0.3

- Now always skips to the previous song instead of the beginning of the song

## v2.0.2

- Added support for Kick

## v2.0.1

- Added support for Yandex Music

## v2.0.0

- Added controls for Native APIs
- Updated communication protocol to revision 2
- Minor bug fixes

## v1.3.1

- Better supports for Jellyfin covers
- "Unsupported Sites" can no longer run on disabled supported sites
- Fix some issues with the new Settings UI

## v1.3.0

- Updated the settings UI to allow for more control over the adapters connection state
- Added support for Jellyfin
- Added support for Invidious
- Added OBS adapter
- Fixed YouTube music cover not returning sometimes
- Fixed YouTube and Twitch volume being discarded after switching videos/streams
- Improved re-connection logic, especially on Firefox
- Switched to using local storage instead of synced storage. This means extension settings will not sync across browsers and they will have reset after updating to this version
- Sends media info right after connecting to a adapter, instead of once something updated

## v1.2.3

- Various small bug fixes

## v1.2.2

- Update settings UI
- Fix 'Unsupported Websites' returning a poorly formatted cover URL
- Other minor fixes

## v1.2.1

- Fixed generic site initializing more than once

## v1.2.0

- Added Netflix support
- Added chapter skipping on YouTube, (Settings UI -> Supported Sites -> YouTube -> Settings Icon) to enable
- Fixed YouTube Music volume not setting correctly
- Added button in settings UI to 'Apply and Reload'
- Minor bug fixes

## v1.1.0

- Added support for Navidrome
- Added support for Radio Addict
- Added support for YouTube Shorts
- Now opens one websocket per adapter instead of one per adapter per tab
- Enabled version checking
- Show authors next to adapter name
- Various other fixes

## v1.0.1

- Fixed a memory leak and various other bug fixes.

## v1.0.0

- Initial Redux Release

## v0.5.0

- Various fixes for different sites, now also has Qobuz support

## v0.4.8

- Fixes for various websites, should be back to fully functional on the major sites

## v0.4.7

- Fixed Spotify support

## v0.4.6

- Bug fixes with various websites

## v0.4.5

- Added support for Youtube Music!
- Also fixed several sites that were not working 100%
- Note: Deezer support is still not perfect due to issues with their site progress will be updated but can not be controlled.

## v0.4.2

- Fixed a bug where the new Youtube layout no longer got the artist

## v0.4.1

- Fixed where podcasts on Google Play Music did not work as expected and had no album art.
- Fixed where radio mode on Amazon Music would cause errors fetching shuffle and repeat status. Also added support for rating when in radio mode.
- Improved outdated Rainmeter plugin version checking.
- Added ability to click on icon to go to troubleshooting page if extension detects that connections to Rainmeter are failing.

## v0.4.0

- Generic support added, when enabled in the settings this will attempt to support unknown sites.
- Settings page so you can enable and tweak said generic support
- Version checking with Rainmeter to ensure you plugin is up to date.
- Various bug fixes

## v0.3.1

- Added support for Tidal and the old Youtube layout

## v0.3.0

- Adds support for new sites like Spotify and Pandora as well as several fixes for existing sites. Also adds support for setting the songs position and volume. To get all best out of this update I recommend updating you companion plugin to take full advantage of Spotify support and the volume and position setting.

## v0.2.6

- Added support for Pandora! Also fixes for the new Soundcloud layout.

## v0.2.5

- Updated to comply with not using Firefox branding.
- A few small bug fixes, removal of hacks to get progress on youtube, and added support for rating setting.
