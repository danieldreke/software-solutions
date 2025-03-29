# Install GrapheneOS on a Google Pixel Phone

!!! Warning
    1. Backup all data from your phone if it's not a brand new phone.<br>
    2. Installing GrapheneOS wipes/erases all data on your phone.<br>
    3. Locking your phone wipes/erases all data on your phone again.

1. Prepare Linux Laptop for Flashing Phone as Non-Root User [1]
    1. Check `fwupd` version
        ```
        apt-cache policy fwupd
        ```
    2. Stop `fwupd` if version earlier than 1.9.10 (service will start again on reboot)
        ```
        sudo systemctl stop fwupd.service
        ```
2. Enable OEM Unlocking on Pixel Phone [2]
    1. Go to `Settings > About phone`
    2. Unlock `Developer Options` by tapping 7x `Build number`
    3. Enable `OEM unlocking` in `Settings > System > Developer options`
        1. If greyed out, connect to internet until ungreyed, then disconnect
3. Unlock Bootloader [3]
    1. Power off Pixel Phone: Swipe down twice and tap power icon (bottom right)
    2. Press and hold both `Power` and `Volume Down` button
    3. Connect Pixel Phone with its USB cable to Linux Laptop
    4. Open Chromium-based browser on Linux Laptop
    5. Open [GrapheneOS Web Installer](https://grapheneos.org/install/web#unlocking-the-bootloader)
    6. Click Button `Unlock bootloader` and select Pixel Phone
    7. Press any volume key to change to `Unlock the bootloader` option, then press power key to confirm unlocking bootloader
    8. After automatic phone restart, device state should be `unlocked` (red)
4. Download and Install GrapheneOS (Wipes your Phone's Data!) [4]
    1. Download GrapheneOS by clicking button `Download release`
    2. Install GrapheneOS by clicking button `Flash release`
5. Lock Bootloader (Wipes your Phone's Data again!)
    1. Click `Lock bootloader`
    2. Press any volume key to change to `Lock the bootloader` option, then press power key to confirm locking bootloader
    3. After automatic phone restart, device state should be `locked` (green)
6. Verify Boot Key Hash
    1. Press power button to restart phone
    2. Press power button to pause boot
    3. Verify displayed boot key hash with [official Pixel Phone key](https://grapheneos.org/install/web#verified-boot-key-hash)
    4. Remove USB cable from phone and laptop
7. Disable OEM Unlocking
    1. Press power key to confirm/start GrapheneOS
    2. GrapheneOS logo should appear after Google logo
    3. At the end of GrapheneOS setup confirm `Disable OEM Unlocking`

## Sources

- [1] [Flashing as non-root ~ grapheneos.org](https://grapheneos.org/install/web#flashing-as-non-root)
- [2] [Enabling OEM unlocking ~ grapheneos.org](https://grapheneos.org/install/web#enabling-oem-unlocking)
- [3] [Web installer ~ grapheneos.org](https://grapheneos.org/install/web#web-install)
- [4] [Obtaining factory images ~ grapheneos.org](https://grapheneos.org/install/web#obtaining-factory-images)
- [5] [Verified boot key hash ~ grapheneos.org](https://grapheneos.org/install/web#verified-boot-key-hash)
