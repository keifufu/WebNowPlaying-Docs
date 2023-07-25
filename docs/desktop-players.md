# Desktop Players

Also known as "Native APIs", this feature allows adapters to read and interact with any Desktop Player that reports to the Windows Media Session API.

Browsers are explicitly excluded from this to avoid interference with the browser extension.

## Caveats

- Volume and rating control is not supported, as the Windows API does not provide support for them.
- Some players might only support a subset of the API's features. They might report the title, artist, etc. correctly but may not expose functionality like pausing, setting position, etc.

## List of known Desktop Players

- Spotify (Full support)
- Tidal (missing position control)
- foobar2000 (Full support)
- Windows 11 Media Player (Not supported)

## Disabling or enabling

Support for Desktop Players is enabled by default.  
There are two ways to disable or enable it:

- By toggling "Use Native APIs" in the browser extensions [Settings](/extension/settings)
- By running the following commands in `Win + R`  
  To disable: `cmd /c "mkdir -p "%LocalAppData%/WebNowPlaying/disable_native_apis""`  
  To enable: `cmd /c "rmdir "%LocalAppData%/WebNowPlaying/disable_native_apis""`