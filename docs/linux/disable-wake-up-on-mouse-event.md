<!-- # Disable Wake up on Mouse Event -->

```bash
# 1. List USB devices with wakeup enabled
grep . /sys/bus/usb/devices/*/power/wakeup | grep enabled
 
# 2. Find the mouse: unplug the USB receiver and rerun the command above
#    whichever entry disappears is the dongle (e.g. 1-8)
 
# 3. Temporarily disable wakeup (replace 1-8 with your device path)
echo disabled | sudo tee /sys/bus/usb/devices/1-8/power/wakeup
 
# 4. Identify vendor/product ID
udevadm info -a -p /sys/bus/usb/devices/1-8 | grep -E "idVendor|idProduct|ATTRS\{manufacturer\}|ATTRS\{product\}" | head -6
 
# 5. Create a udev rule (permanent fix)
sudo nano /etc/udev/rules.d/99-disable-mouse-wakeup.rules
# Paste (replace xxxx/yyyy with your actual IDs from step 4):
# ACTION=="add", SUBSYSTEM=="usb", ATTR{idVendor}=="xxxx", ATTR{idProduct}=="yyyy", ATTR{power/wakeup}="disabled"
 
# 6. Reload and apply the rule
sudo udevadm control --reload-rules && sudo udevadm trigger --action=add --subsystem-match=usb
 
# 7. Verify (unplug/replug the dongle or reboot, then run - should read "disabled")
cat /sys/bus/usb/devices/1-8/power/wakeup
```
 
