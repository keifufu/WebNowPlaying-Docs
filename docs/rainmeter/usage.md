# Usage

If you already know how to use NowPlaying, then WebNowPlaying is basically just a drop-in replacement. There are minor changes to some bangs and new measures listed below.

## Options

::: info PlayerType

Type of the measure value. Valid values are:

- `Status`: 0 for inactive (no connections) and 1 for active (1 or more connections).
- `Player`: Player Name (e.g: YouTube, Spotify).
- `Title`: Track title.
- `Artist`: Track artist.
- `Album`: Track album.
- `Cover`: Path to cover art.
- `CoverWebAddress`: URL for cover art.
- `Duration`: Total length of track in seconds.
- `Position`: Current position in track in seconds.
- `Remaining`: Remaining time of track in seconds.
- `Progress`: Percentage of track completed.
- `Volume`: From 0 to 100
- `State`: 0 for stopped, 1 for playing, and 2 for paused.
- `Rating`: Rating of current track (0 to 5).
- `Repeat`: 0 if repeat/loop track is off, 1 if repeating one track, 2 if repeating all.
- `Shuffle`: 0 if shuffle/random tracks is off, 1 if on.
- `SupportsPlayPause`: 0 or 1 if the current media supports !PlayPause.
- `SupportsSkipPrevious`: 0 or 1 if the current media supports !Previous.
- `SupportsSkipNext`: 0 or 1 if the current media supports !Next.
- `SupportsSetPosition`: 0 or 1 if the current media supports !SetPosition.
- `SupportsSetVolume`: 0 or 1 if the current media supports !SetVolume.
- `SupportsToggleRepeatMode`: 0 or 1 if the current media supports !Repeat.
- `SupportsToggleShuffleActive`: 0 or 1 if the current media supports !Shuffle.
- `SupportsSetRating`: 0 or 1 if the current media supports !SetRating.
- `RatingSystem`: 0 for None, 1 for Like, 2 for Like-Dislike, 3 for Scale (0-5).
- `IsUsingNativeAPIs`: 1 if the user has "Use Native APIs" enabled, 0 if not.

**Notes:**

With measures of type `Duration` or `Position`, the string value is in the `(HH)::MM::SS` and the number value is the actual number of seconds.

Measure of the type `Cover` have an additional option:

- `DefaultPath`, A system path to the image to show when there is nothing playing or when there is no cover available.

:::

## Bangs

::: info Bangs

WebNowPlaying measures can be controlled with the `!CommandMeasure` bang with the argument parameter being:

- `Play`: Play the current track.
- `Pause`: Pause the current track.
- `PlayPause`: Play (if stopped/paused) or pause (if playing) current track.
- `Next`: Change to next track.
- `Previous`: Change to previous track.
- `Repeat`: Toggle repeat mode.
- `Shuffle`: Toggle shuffle mode.
- `ToggleThumbsUp`: Sets rating to `5` or `0`.
- `ToggleThumbsDown`: Sets rating to `1` or `0`.
- `SetRating n`: where _n_ is a value between `0` (no rating) and `5` (maximum rating).
- `SetPosition n`: where _n_ is either an absolute value (`SetPosition 50` to jump 50% of the track) or a relative value (`SetPosition +5` to jump 5% forward or `SetPosition -10` to jump 10% backward).
- `SetVolume n`: where _n_ is either an absolute value (`SetVolume 50` to set volume to 50%) or a relative volume (`SetVolume +20` to increase volume by 20% or `SetVolume -40` to decrease volume by 40%).

:::

## Example

For a more complete example, check the [WebNowPlaying Example skin](https://github.com/keifufu/WebNowPlaying-Redux-Rainmeter/blob/main/ExampleSkin/Example.ini).

```ini
[Rainmeter]
Update=1000
BackgroundMode=2
SolidColor=0,0,0,255

[MeasureTitle]
Measure=Plugin
Plugin=WebNowPlaying
PlayerType=Title

[MeasureArtist]
Measure=Plugin
Plugin=WebNowPlaying
PlayerType=Artist

[MeasureAlbum]
Measure=Plugin
Plugin=WebNowPlaying
PlayerType=Album

[MeterPrev]
Meter=String
X=5
Y=5
FontColor=FFFF00
Text="Prev"
LeftMouseUpAction=[!CommandMeasure "MeasurePlayer" "Previous"]

[MeterNext]
Meter=String
X=20R
Y=5
FontColor=FFFF00
Text="Next"
LeftMouseUpAction=[!CommandMeasure "MeasurePlayer" "Next"]

[MeterTitle]
Meter=String
MeasureName=MeasureTitle
X=5
Y=35
W=400
H=20
FontColor=255,255,255,255
Text="Title: %1"

[MeterArtist]
Meter=String
MeasureName=MeasureArtist
X=5
Y=55
W=400
H=20
FontColor=255,255,255,255
Text="Artist: %1"

[MeterAlbum]
Meter=String
MeasureName=MeasureAlbum
X=5
Y=75
W=400
H=20
FontColor=255,255,255,255
Text="Album: %1"
```
