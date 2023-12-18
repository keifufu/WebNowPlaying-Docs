# Desktop Players

<div class="tip custom-block" style="padding-top: 8px">

**Note:** Support for Desktop Players is exclusive to Windows as of right now.

</div>

This allows adapters to read and interact with desktop players that integrate with the [Windows Media Session Transport Controls](https://learn.microsoft.com/en-us/windows/uwp/audio-video-camera/integrate-with-systemmediatransportcontrols).

Browsers are explicitly excluded from this to avoid interference with the browser extension.

## Caveats

- Volume and rating control is not supported, as the Windows API does not provide support for them.
- Some players might only support a subset of the API's features. They might report the title, artist, etc. correctly but may not expose functionality like pausing, setting position, etc.

## List of supported players

See [this list](https://github.com/ModernFlyouts-Community/ModernFlyouts/blob/main/docs/GSMTC-Support-And-Popular-Apps.md).

## Disabling or enabling

Support for Desktop Players is enabled by default.  
You can toggle it via the "Desktop Players" checkbox in the [extension settings](/extension/settings).
