# C# Library

## Installing

- [NuGet](https://www.nuget.org/packages/WNPRedux-Adapter-Library/)
- [GitHub Releases](https://github.com/keifufu/WNPRedux-Adapter-Library/releases/latest)

## Usage

```cs
using WNPReduxAdapterLibrary;
using System.Threading;
using System;

void Main() {
  // Custom logger
  void logger(WNPRedux.LogType type, string message) {
    Console.WriteLine($"{type}: {message}");
  }

  // Start WNP, providing a websocket port, version number and a logger
  WNPRedux.Start(1234, "1.0.0", logger);

  // Write the current title to the console and
  // pause/unpause the video every second for 30 seconds
  for (int i = 0; i < 30; i++) {
    Console.WriteLine(WNPRedux.MediaInfo.Title);
    // You don't need to check for `supportsPlayPause`,
    // but it's good to know about.
    if (WNPRedux.MediaInfo.Controls.supportsPlayPause) {
      WNPRedux.MediaInfo.Controls.TryTogglePlayPause();
    }
    Thread.Sleep(1000);
  }

  // Stop WNP
  WNPRedux.Stop();
}
```

### `WNPRedux.Start()`

Starts WNP if it's not already started.

::: info Parameters

- `port`: The port number to be used by WNP. Avoid using ports already used by other adapters or conflicting with other programs.
- `version`: The version of WNP, which should be in the format "x.x.x".
- `logger`: A function that handles logging, provided by the user.
- `throttleLogs` (optional): If set to true, prevents the same log message from being logged more than once per 30 seconds.

:::

### `WNPRedux.isStarted`

Indicates whether WNPRedux is currently started.

### `WNPRedux.isUsingNativeAPIs`

Indicates whether WNPRedux is pulling information from native APIs. This setting is read-only and is toggled in the browser extensions settings panel. For more details, refer to this link.

### `WNPRedux.Log(WNPRedux.LogType type, string message)`

Logs a message using the provided logger function from WNPRedux.Start(). If throttleLogs is set to true, it will limit similar log messages to one per 30 seconds.

### `WNPRedux.Stop()`

Stops WNP if it's currently running.

### `WNPRedux.clients`

Returns the number of clients currently connected to WNP.

### `WNPRedux.MediaInfo`

Provides information about the currently active media.

::: info Properties

- `Controls`: An instance of MediaControls (refer to the table below for its details).
- `PlayerName`: The current player being used (e.g., YouTube, Spotify, etc.).
- `State`: The current state of the player (STOPPED, PLAYING, PAUSED).
- `Title`: The title of the media.
- `Artist`: The artist of the media.
- `Album`: The album of the media.
- `CoverUrl`: The URL to the cover image.
- `Duration`: The duration of the media in the format (hh:mm:ss).
- `DurationSeconds`: The duration of the media in seconds.
- `Position`: The current playback position of the media in the format (hh:mm:ss).
- `PositionSeconds`: The current playback position of the media in seconds.
- `PositionPercent`: The current playback position of the media as a percentage.
- `Volume`: The volume level of the media (ranging from 1 to 100).
- `Rating`: The rating of the media, if available (ranging from 0 to 5).
- `RepeatMode`: The current repeat mode of the player (NONE, ONE, ALL).
- `ShuffleActive`: Indicates if shuffle mode is enabled.

:::

### `MediaControls`

Represents the available controls for media playback.

::: info Properties

- `supportsPlayPause`: Indicates if the current player supports play/pause.
- `supportsSkipPrevious`: Indicates if the current player supports skipping to the previous media/section.
- `supportsSkipNext`: Indicates if the current player supports skipping to the next media/section.
- `supportsSetPosition`: Indicates if the current player supports setting the media playback progress.
- `supportsSetVolume`: Indicates if the current player supports setting the media volume.
- `supportsToggleRepeatMode`: Indicates if the current player supports toggling through repeat modes.
- `supportsToggleShuffleActive`: Indicates if the current player supports toggling shuffle mode.
- `supportsSetRating`: Indicates if the current player supports setting the media rating.
- `RatingSystem`: The current rating system, "NONE" or "LIKE_DISLIKE" or "LIKE" or "SCALE"

:::

::: info Methods

- `TryPlay()`: Attempts to play the current media.
- `TryPause()`: Attempts to pause the current media.
- `TryTogglePlayPause()`: Attempts to play/pause the current media.
- `TrySkipPrevious()`: Attempts to skip to the previous media/section.
- `TrySkipNext()`: Attempts to skip to the next media/section.
- `TrySetPositionSeconds(int seconds)`: Attempts to set the media playback progress in seconds.
- `TryRevertPositionSeconds(int seconds)`: Attempts to revert the media playback progress by the specified seconds.
- `TryForwardPositionSeconds(int seconds)`: Attempts to forward the media playback progress by the specified seconds.
- `TrySetPositionPercent(double percent)`: Attempts to set the media playback progress as a percentage.
- `TryRevertPositionPercent(double percent)`: Attempts to revert the media playback progress by the specified percentage.
- `TryForwardPositionPercent(double percent)`: Attempts to forward the media playback progress by the specified percentage.
- `TrySetVolume(int volume)`: Attempts to set the media volume within the range of 1 to 100.
- `TryToggleRepeatMode()`: Attempts to toggle through repeat modes.
- `TryToggleShuffleActive()`: Attempts to toggle shuffle mode.
- `TrySetRating(int rating)`: Attempts to set the media rating (some sites may support binary ratings).

:::
