```sh
. ~/.nix-profile/etc/profile.d/nix.sh
nix-shell -p signalbackup-tools
signalbackup-tools signal.backup <30-digits-passphrase>  --exporthtml dump-html/
```
