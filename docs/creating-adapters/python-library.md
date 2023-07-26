# Python Library

## Installing

- pip: `pip install pywnp`

## Usage

```py
from pywnp import WNPRedux
import time

# Custom logger, type can be 'Error', 'Debug' or 'Warning'
def logger(type, message):
  print(f'{type}: {message}')

# Start WNP, providing a port, version number and a logger
WNPRedux.start(1234, '1.0.0', logger)

# Write the current title to the console and
# pause/unpause the video every second for 30 seconds
for i in range(30):
  print(WNPRedux.media_info.title)
  # You don't need to check for `supports_play_pause`,
  # but it's good to know about.
  if WNPRedux.media_info.controls.supports_play_pause:
    WNPRedux.media_info.controls.try_toggle_play_pause()
  time.sleep(1)

# Stop WNP
WNPRedux.stop()
```

### `WNPRedux.Start()`

Starts WNP if it's not already started.

::: info Parameters

- `port`: The port number to be used by WNP. Avoid using ports already used by other adapters or conflicting with other programs.
- `version`: The version of your adapter, which should be in the format "major.minor.patch".
- `logger`: A function that handles logging, provided by the user.

:::

### `WNPRedux.is_started`

Indicates whether WNPRedux is currently started.

### `WNPRedux.is_using_native_apis`

Indicates whether WNPRedux is pulling information from native APIs. This setting is read-only and is toggled in the browser extensions settings panel. For more details, refer to this link.

### `WNPRedux.log(type, message)`

Logs a message using the provided logger function from WNPRedux.start().

### `WNPRedux.stop()`

Stops WNP if it's currently running.

### `WNPRedux.clients`

Returns the number of clients currently connected to WNP.

### `WNPRedux.media_info`

Provides information about the currently active media.

::: info Properties

- `controls`: An instance of MediaControls (refer to the table below for its details).
- `player_name`: The current player being used (e.g., YouTube, Spotify, etc.).
- `state`: The current state of the player (STOPPED, PLAYING, PAUSED).
- `title`: The title of the media.
- `artist`: The artist of the media.
- `album`: The album of the media.
- `cover_url`: The URL to the cover image.
- `duration`: The duration of the media in the format (hh:mm:ss).
- `duration_seconds`: The duration of the media in seconds.
- `position`: The current playback position of the media in the format (hh:mm:ss).
- `position_seconds`: The current playback position of the media in seconds.
- `position_percent`: The current playback position of the media as a percentage.
- `volume`: The volume level of the media (ranging from 1 to 100).
- `rating`: The rating of the media, if available (ranging from 0 to 5).
- `repeat_mode`: The current repeat mode of the player (NONE, ONE, ALL).
- `shuffle_active`: Indicates if shuffle mode is enabled.

:::

### `MediaControls`

Represents the available controls for media playback.

::: info Properties

- `supports_play_pause`: Indicates if the current player supports play/pause.
- `supports_skip_previous`: Indicates if the current player supports skipping to the previous media/section.
- `supports_skip_next`: Indicates if the current player supports skipping to the next media/section.
- `supports_set_position`: Indicates if the current player supports setting the media playback progress.
- `supports_set_volume`: Indicates if the current player supports setting the media volume.
- `supports_toggle_repeat_mode`: Indicates if the current player supports toggling through repeat modes.
- `supports_toggle_shuffle_active`: Indicates if the current player supports toggling shuffle mode.
- `supports_set_rating`: Indicates if the current player supports setting the media rating.
- `rating_system`: The current rating system, "NONE" or "LIKE_DISLIKE" or "LIKE" or "SCALE"

:::

::: info Methods

- `try_play()`: Attempts to play the current media.
- `try_pause()`: Attempts to pause the current media.
- `try_toggle_play_pause()`: Attempts to play/pause the current media.
- `try_skip_previous()`: Attempts to skip to the previous media/section.
- `try_skip_next()`: Attempts to skip to the next media/section.
- `try_set_position_seconds(seconds)`: Attempts to set the media playback progress in seconds.
- `try_revert_position_seconds(seconds)`: Attempts to revert the media playback progress by the specified seconds.
- `try_forward_position_seconds(seconds)`: Attempts to forward the media playback progress by the specified seconds.
- `try_set_position_percent(percent)`: Attempts to set the media playback progress as a percentage.
- `try_revert_position_percent(percent)`: Attempts to revert the media playback progress by the specified percentage.
- `try_forward_position_percent(percent)`: Attempts to forward the media playback progress by the specified percentage.
- `try_set_volume(volume)`: Attempts to set the media volume within the range of 1 to 100.
- `try_toggle_repeat_mode()`: Attempts to toggle through repeat modes.
- `try_toggle_shuffle_active()`: Attempts to toggle shuffle mode.
- `try_set_rating(rating)`: Attempts to set the media rating (some sites may support binary ratings).

:::
