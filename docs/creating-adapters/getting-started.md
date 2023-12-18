# Creating Adapters

Adapters are implemented using the [Adapter Library](/creating-adapters/adapter-library), which is written in C.

### Language bindings

There are currently no bindings for the library.

### Testing your adapter

You can connect the browser extension to your adapter by clicking "Add custom adapter" in the [extension settings](/extension/settings).

### Submitting your adapter

**Requirements**

- Must be open-sourced on GitHub
- Executables, plugins or scripts must be published via GitHub releases
- GitHub releases must be tagged as "vmajor.minor.patch" or "major.minor.patch" where major should be the current library revision
- Must use a unique port, which cannot be changed after submitting your adapter.
- GitHub repository should be named "WebNowPlaying-name" e.g. "WebNowPlaying-Rainmeter".

If your adapter meets the requirements, open an issue [here](https://github.com/keifufu/WebNowPlaying/issues) using the following template:

```
Issue Title: Request: Add <Adapter Name>
---
Name: <Adapter Name>
GitHub: <GitHub Link>
Description: <Short description of what your adapter is used for and a justification for it to be listed in the extension>
```
