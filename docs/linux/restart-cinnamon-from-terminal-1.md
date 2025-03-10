## Restart Cinnamon Desktop in Terminal 1

!!! Warning
    Remember `CTRL-ALT-F7` to switch from `terminal 1` back to Desktop/GUI/`terminal 7` [2].

1. Switch to terminal 1 via `CTRL-ALT-F1` and execute following commands:
    ```sh
    # Terminate Cinnamon desktop (forcefully kill all processes named 'cinnamon')
    killall -9 cinnamon
    # Restart Cinnamon desktop environment
    export DISPLAY=:0.0 && cinnamon --replace &
    ```
2. Switch back to desktop via `CTRL-ALT-F7`

<!-- # Gently terminate Cinnamon desktop
pkill cinnamon -->

<!-- ## Restart Cinnamon Desktop

Open terminal and execute following command:
```sh
# Restart Cinnamon desktop environment
cinnamon --replace &
``` -->

## Sources

1. [Restart cinnamon from CLI ~ forums.linuxmint.com](https://forums.linuxmint.com/viewtopic.php?p=829721&sid=d0632c82a42429e89981142aabdc634d#p829721)
1. [What is terminal 7 | tty7 ~ perplexity.ai](https://www.perplexity.ai/search/what-is-tty7-QUXYL3UjSxq_NcgRPdNibQ)
