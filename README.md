![Logo](admin/vis-2-shelly.png)

# ioBroker.vis-2-shelly

[![NPM version](https://img.shields.io/npm/v/iobroker.vis-2-shelly.svg)](https://www.npmjs.com/package/iobroker.vis-2-shelly)
[![Downloads](https://img.shields.io/npm/dm/iobroker.vis-2-shelly.svg)](https://www.npmjs.com/package/iobroker.vis-2-shelly)
![Number of Installations](https://iobroker.live/badges/vis-2-shelly-installed.svg)
![Current version in stable repository](https://iobroker.live/badges/vis-2-shelly-stable.svg)

[![NPM](https://nodei.co/npm/iobroker.vis-2-shelly.png?downloads=true)](https://nodei.co/npm/iobroker.vis-2-shelly/)

**Tests:** ![Test and Release](https://github.com/Kollos2k/ioBroker.vis-2-shelly/workflows/Test%20and%20Release/badge.svg)

## vis-2-shelly adapter for ioBroker

A widget to display Shelly devices in vis-2

## Information

<a href="doc/Documentation.md">Documentation</a>

With the help of this adapter it should be possible to easily display and control all Shelly devices in plain sight.<br/>

So far it is possible to display all Shelly devices or to divide the devices into rooms.<br/>
<img src="doc/images/PictureShellyReadme1.png">

<br/><br/>The project is still in its early stages and is not stable<br/><br/>

Devices supported so far

<div>
    Dimmer 2<br/>
    DoorWindow 2<br/>
    Motion 2<br/>
    PlugS<br/>
    PlugS Plus<br/>
    1PM Plus<br/>
    2PM Plus<br/>
    H&T Plus<br/>
    TRV
</div>

## TODO

-   Add more Devices
-   Add Dialog for all Devices
-   Add Device informations to Dialog (IP/Firmware/...)
-   Try Javascript Events/Triggers ....
-   Add Template Support

## Changelog
### 0.0.4 (2024-03-28)

-   New Device "Shelly Door/Window 2"
-   Config is now editable (see <a href="doc/ModifyDeviceConfig.md">Modify device config</a>)
-   Fixed some bugs
-   Updatet sourcecode by community rules

### 0.0.3 (2024-03-15)

-   Add Dialog support for Devices (Change Brightness,view History,....)
-   Add Main Dialog for SHDM-2
<!--
	Placeholder for the next version (at the beginning of the line):
	### **WORK IN PROGRESS**
-->

### 0.0.2 (2024-03-04)

-   (Kollos2k) initial release
-   Update VIS-Shelly to VIS-2-Shelly (React)
-   Add AllDevices Widget
-   Add RoomDevices Widget
-   Add CustomDeviceList Widget
-   Add CustomOverview Widget
-   Rebuild main.js

## License

MIT License

Copyright (c) 2024 Kollos2k <kollos@vorsicht-bissig.de>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
