# Getting Started

I recommend reading the [Technical Explanation](/technical-explanation) before continuing.

There are adapter libraries available for C# and Python.

## C#

The C# Library works with .NET Framework 4.8, .NET Core and .NET 6 and newer.  
It does not have built-in support for [Desktop Players](/desktop-players). Please see the source of [WebNowPlaying-Redux-Rainmeter](https://github.com/keifufu/WebNowPlaying-Redux-Rainmeter/blob/main/src/WNPReduxAdapterLibraryExtensions/WNPReduxNative.cs) for it's implementation.

Refer to [C# Library](/creating-adapters/csharp-library) for usage.

## Python

The python library has built-in support for [Desktop Players](/desktop-players)

Refer to [Python Library](/creating-adapters/python-library) for usage.

## Other Languages

While it's possible to create adapters in other languages, you would have to implement the functionality of the adapter libraries yourself, which can be very error-prone.

## Testing your adapter

You can connect the browser extension to your adapter by clicking "Add custom adapter" in the extension [Settings](/extension/settings).

## Submitting your adapter

**Requirements**

- Must exclusively use one of the official adapter libraries for communication
- Must be open-sourced on GitHub
- Executables, plugins or scripts must be published via GitHub releases
- GitHub releases must be tagged as "vx.x.x" or "x.x.x"
- Must use a unique port, which cannot be changed after submitting your adapter.
- GitHub repository muts be named "WebNowPlaying-Redux-name" e.g., "WebNowPlaying-Redux-Rainmeter".

If your adapter meets the requirements, open an issue [here](https://github.com/keifufu/WebNowPlaying-Redux/issues) using the following template:

```
Issue Title: Request: Add <Adapter Name>
---
Name: <Adapter Name>
GitHub: <GitHub Link>
Description: <Short description of what your adapter is used for and a justification for it to be listed in the extension>
```
