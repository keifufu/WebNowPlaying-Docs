# Getting Started

## Adding python to OBS

- Install Python 3.10 ([link](https://www.python.org/downloads/release/python-31010/)) and sure to check "Add python.exe to PATH".
- In OBS, go to Tools -> Scripts -> Python Settings, and add the path to your Python installation.  
  (On windows, run `where python` in cmd to find the installation location.)

## Installing the script

- Open the command prompt and run `python -m pip install pywnp`
- Download [wnp-obs.py](https://github.com/keifufu/WebNowPlaying-Redux-OBS/releases/latest/download/wnp-obs.py), then add it in the Scripts tab.
- Select a Widget or click "Create Sources" in the Scripts window.

## Updating

- Replace `wnp-obs.py` with the latest version from releases: [wnp-obs.py](https://github.com/keifufu/WebNowPlaying-Redux-OBS/releases/latest/download/wnp-obs.py).
- Open the command prompt and run `python -m pip install --upgrade pywnp`.

## Known Issues

- Reloading the script might cause it to spam errors or not work at all.
  If you need to reload it for some reason, restart OBS.
  If you have reloaded the script and it still doesn't work after restarting OBS, try restarting your computer.
