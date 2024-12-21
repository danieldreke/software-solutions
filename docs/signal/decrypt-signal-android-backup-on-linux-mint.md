```bash
# Install nix package manager for single user
sh <(curl -L https://nixos.org/nix/install) --no-daemon

# Source the Nix profile script to set up the Nix environment
. ~/.nix-profile/etc/profile.d/nix.sh

# Start a Nix shell with the signalbackup-tools package
nix-shell -p signalbackup-tools

# Create dir for html export
mkdir html-export

# Run signalbackup-tools to export Signal backup as HTML
signalbackup-tools signal.backup <passphrase> --exporthtml html-export/
```

## Sources

- [support.signal.org ~ Create Signal Backup on Android](https://support.signal.org/hc/en-us/articles/360007059752-Backup-and-Restore-Messages)
- [nix.dev ~ Nix Single User Installation](https://nix.dev/manual/nix/2.24/installation/installing-binary#single-user-installation)
- [github.com ~ signalbackup-tools - Export to HTML](https://github.com/bepaald/signalbackup-tools?tab=readme-ov-file#export-to-html)
