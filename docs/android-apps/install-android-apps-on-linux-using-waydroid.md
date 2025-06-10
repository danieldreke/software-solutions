# Install Android Apps on Linux Using Waydroid

## 1. Waydroid Installation Steps for Linux Mint

1. Open a terminal and run the following commands to install Waydroid:
    ```sh
    # Install pre-requisites
    sudo apt install curl ca-certificates -y
    # Add the official repository
    curl -s https://repo.waydro.id | sudo bash
    # Download and install Waydroid
    sudo apt install waydroid -y
    # Start container service (if not started automatically)
    sudo systemctl enable --now waydroid-container
    # Download Android image VANILLA (no Google) for Waydroid
    sudo waydroid init -s VANILLA
    ```
2. If you want or need to use Google Play Store, replace `VANILLA` with `GAPPS` in the command above:
    ```sh
    sudo waydroid init -s GAPPS
    ```
3. After installation you can start Waydroid by running:
    ```sh
    waydroid show-full-ui
    ```

## 2. Sources

- https://waydro.id/#install
- https://docs.waydro.id/usage/install-on-desktops#ubuntu-debian-and-derivatives