# Technical Explanation

## Adapter Libraries

Adapter Libraries house all the WebNowPlaying-specific logic and provide information about the currently active media and functions to control it.  
See: [C# Library](/creating-adapters/csharp-library), [Python Library](/creating-adapters/python-library)

They start a local WebSocket server on a unique port (per adapter) to allow multiple browser extensions to connect as clients. This enables multiple browsers to provide media info simultaneously.

The communication protocol between server and client is currently not documented, but it doesn't need to be. This protocol changes over time, and different adapters likely use different protocols. Each adapter can only understand the protocol version it was built with, making it not backwards or forwards compatible. To address this, when a client connects, the adapter sends its protocol revision, and the client handles the translation. This ensures older adapters continue to work while newer adapters can take advantage of new features from newer revisions.

Determining the currently active media is done the following way:

- Filter out media that is paused.
- Filter out media that is muted.
- Sort by the last updated time, where updates include changes in Title, Artist, etc.

## Adapters

Adapters use adapter libraries and provide a unique port for the WebSocket server to listen on. This port should be unused by popular programs and will always be the same.

Adapters then do whatever they like with this data. For example, the [Rainmeter Plugin](/rainmeter/getting-started) creates bindings for variables and functions between the adapter library and Rainmeter, allowing skins to read the title, artist, control volume, etc.

## Browser extension

The browser extension gathers media info from each tab in the browser. This is achieved with a mix of the [MediaSession API](https://developer.mozilla.org/en-US/docs/Web/API/MediaSession) and DOM selectors. It updates every 250ms.

The extension then uses the same method as adapter libraries to determine the currently active media and sends its info and capabilities to connected adapters.

When adapters send a command, e.g., `TRY_SET_STATE PLAYING`, it is executed on the currently active media.

## Updates

Adapters send their version number upon connecting. Since all listed adapters are required to be on GitHub and follow certain release guidelines, the browser extension can query the latest version of each adapter using the GitHub API. If an adapter is out of date it will notify the user.

## Desktop Players

WebNowPlaying adapters can read and interact with desktop players, such as Spotify Desktop, by using the [Windows Global System Media Transport Control Session API](https://learn.microsoft.com/en-us/uwp/api/windows.media.control.globalsystemmediatransportcontrolssession) (quite a name!). This API is only available on Windows 10 and newer.

The implementation of Desktop Players differs based on the adapter library used. The Python library has it built-in but the C# library currently does not.

It's the same API used by the Windows 10 volume flyout or the Windows 11 command center. If a player supports it, WebNowPlaying can read from it!

Note that certain players might only support a subset of this API's features. This means they might provide Title, Artist, Cover, etc. but NOT provide controls to pause, play, set the position, etc.

A general limitation of this API compared to the capabilities of the browser extension is volume and rating control.
