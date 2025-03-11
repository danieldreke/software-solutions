# Install GrapheneOS on a Google Pixel 7a

1. Prepare Laptop with Linux (Mint) [1]
    1. Check `fwupd` version
        ```
        apt-cache policy fwupd
        ```
    1. Stop `fwupd` if version older 1.9.10 (service will start again on reboot)
        ```
        sudo systemctl stop fwupd.service
        ```
    <!-- 1. Install Android Software Development Kit (SDK)
        ```
        sudo apt install android-sdk-platform-tools-common
        ```         -->
1. Enable OEM Unlocking on Pixel 7a [2]
    <!-- 1. (Optional?) Install all pending system and security updates -->
    1. Go to `Settings > About phone`
    1. Unlock `Developer Options` by tapping 7x `Build number`
    1. Enable `OEM unlocking` in `Settings > System > Developer options`
        1. If greyed out, connect to internet
1. Unlock Bootloader [3]
    1. Power off Pixel 7a: Swipe down twice and tap power icon (bottom right)
    1. Press and hold together buttons `Power` and `Volume Down`
    1. Connect Pixel 7a with its USB cable to laptop
    1. Open Brave/Chromium-based browser on Linux Mint/Supported OS
    1. Open [GrapheneOS Web Installer](https://grapheneos.org/install/web#unlocking-the-bootloader)
    1. Click Button `Unlock bootloader`
    1. Click volume key to select unlocking and power key to accept/confirm unlocking
    1. Press volume key to choose unlock option, then press power key to confirm/unlock
1. Download and Install GrapheneOS [4]
    1. Download GrapheneOS by clicking button `Download release`
    1. Install GrapheneOS by clicking button `Flash release`
1. Lock Bootloader
    1. Click `Lock bootloader`
    1. Press volume key to choose lock option, then press power key to confirm/lock bootloader
1. Disable OEM Unlocking
    1. Press power key to confirm/start GrapheneOS
    1. At the end of GrapheneOS setup confirm `Disable OEM Unlocking`
1. Verify Boot Key Hash
    1. Restart Pixel 7a and press power key to pause boot
    2. Verify displayed boot hash key with [official Pixel 7a key](https://grapheneos.org/install/web#verified-boot-key-hash)

## Sources

- [1] [Flashing as non-root ~ grapheneos.org](https://grapheneos.org/install/web#flashing-as-non-root)
- [2] [Enabling OEM unlocking ~ grapheneos.org](https://grapheneos.org/install/web#enabling-oem-unlocking)
- [3] [Web installer ~ grapheneos.org](https://grapheneos.org/install/web#web-install)
- [4] [Obtaining factory images ~ grapheneos.org](https://grapheneos.org/install/web#obtaining-factory-images)
- [5] [Verified boot key hash ~ grapheneos.org](https://grapheneos.org/install/web#verified-boot-key-hash)
