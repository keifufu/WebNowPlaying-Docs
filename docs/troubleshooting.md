# Troubleshooting

## Adapter not connecting

There can be multiple reasons for this.

**Adapter is not running**

Start it.

**You're using an adblocker**

Some adblockers block requests to localhost, which prevents the extension to connect to your adapters.  
To fix this, add the following to your adblocker's filter list:
`@@||localhost`
Here's where to find your filter list:

- Brave: `brave://settings/shields/filters`
- Ublock Origin
  - Open the extension settings
  - Go to the "My Filters" tab

**Windows Firewall**

The first time you run any adapter it will give you a firewall popup.  
If you deny it, you will have to allow the app manually.  
Search for "Allow an app through the Windows Firewall" and open the program.  
Press "Change settings" on the top right of the window and search for or add the program you want to allow; you'll want to allow both private and pubic networks.  
Example: for Rainmeter, it would look like this:  
![rainmeter firewall settings](/rainmeter-firewall-settings.jpg)

## Ask for help

If none of the above solutions worked, or you are experiencing crashes, ask for help.

- [Browser Extension GitHub Issues](https://github.com/keifufu/WebNowPlaying-Redux/issues)
- [Rainmeter Plugin GitHub Issues](https://github.com/keifufu/WebNowPlaying-Redux-Rainmeter/issues)
- [OBS Script GitHub Issues](https://github.com/keifufu/WebNowPlaying-Redux-OBS/issues)
- [Rainmeter Discord](https://discord.gg/rainmeter) (ask in #help or ping @keifufu there)
