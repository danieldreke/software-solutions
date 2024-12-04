<!-- # Disable Wake up on Mouse Event -->

1. List USB devices with waking up enabled
    - `grep . /sys/bus/usb/devices/*/power/wakeup | grep enabled`
1. Find mouse by removing USB receiver and reexecuting command
1. Disable wake up on mouse move
    - `sudo su`
    - `echo disabled > /sys/bus/usb/devices/1-3/power/wakeup`
      - replace `1-3` with listed number of grep command
1. Disable wake up on mouse move permanently
    - `sudo crontab -e`
    - Add `@reboot echo disabled > /sys/bus/usb/devices/1-3/power/wakeup`
      - replace `1-3` with listed number of grep command

## Sources

- [askubuntu.com ~ Wake up from suspend using wireless USB keyboard or mouse (for any Linux Distro)](https://askubuntu.com/a/848699)
- [glowing-tortoise.com ~ Turn off returning from suspend by the mouse](https://glowing-tortoise.com/en/archives/171)
