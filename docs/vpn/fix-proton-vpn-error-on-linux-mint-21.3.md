## Problem: Proton-VPN Does Not Start

```sh
protonvpn-app
Traceback (most recent call last):
...
  File "/usr/lib/python3/dist-packages/OpenSSL/crypto.py", line 1598, in X509StoreFlags
    NOTIFY_POLICY = _lib.X509_V_FLAG_NOTIFY_POLICY
AttributeError: module 'lib' has no attribute 'X509_V_FLAG_NOTIFY_POLICY'. Did you mean: 'X509_V_FLAG_EXPLICIT_POLICY'?
...
```

## Solution: Update pyOpenSSL

```sh
# Update pyOpenSSL
pip3 install --upgrade pyOpenSSL
```
