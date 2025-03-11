# Install GrapheneOS on a Google Pixel 7a

1. Prepare Linux (Mint) [1]
    1. Install Android Software Development Kit (SDK)
       ```
       sudo apt install android-sdk-platform-tools-common
       ```
    2. Check `fwupd` version
       ```
       apt-cache policy fwupd
       ```
    3. Stop `fwupd` if version older 1.9.10 (service will start again on reboot)
       ```
       sudo systemctl stop fwupd.service
       ```
2. Enable OEM Unlocking [2]
   1. (Optional?) Install all pending system and security updates
   2. Go to `Settings > About phone`
   3. Unlock `Developer Options` by tapping 7x `Build number`
   4. Enable `OEM unlocking` in `Settings > System > Developer options`
      1. If greyed out, connect to internet
3. Unlock Bootloader [3]
   1. Power off Pixel 7a: Swipe down twice and tap power icon (bottom right)
   2. Press and hold together buttons `Power` and `Volume Down`
   3. Connect device to laptop
   4. Open Brave/Chromium-based browser on Linux Mint/Supported OS
   5. Open [GrapheneOS Web Installer](https://grapheneos.org/install/web#unlocking-the-bootloader)
   6. Click Button `Unlock bootloader`
   7. Click volume key to select unlocking and power key to accept/confirm unlocking
   8. Press volume key to choose unlock option, then press power key to confirm/unlock
4. Download and Install GrapheneOS [4]
   1. Download GrapheneOS by clicking button `Download release`
   2. Install GrapheneOS by clicking button `Flash release`
5. Lock Bootloader
   1. Click `Lock bootloader`
   2. Press volume key to choose lock option, then press power key to confirm/lock bootloader
6. Disable OEM Unlocking
   1. Press power key to confirm/start GrapheneOS
   2. At the end of GrapheneOS setup confirm `Disable OEM Unlocking`

## Sources

- [1] [Flashing as non-root ~ grapheneos.org](https://grapheneos.org/install/web#flashing-as-non-root)
- [2] [Enabling OEM unlocking ~ grapheneos.org](https://grapheneos.org/install/web#enabling-oem-unlocking)
- [3] [Web installer ~ grapheneos.org](https://grapheneos.org/install/web#web-install)
- [4] [Obtaining factory images ~ grapheneos.org](https://grapheneos.org/install/web#obtaining-factory-images)
