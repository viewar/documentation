---
id: troubleshooting
title: Trouble Shooting
---

## EACCES: permission denied

if you see this error, try to fix the directory permissions with the following commands  
_(you can copy the whole block into your terminal)_

```bash
# set directory to be readable by owner and system \
chmod -R 0775 /usr/local/lib/node_modules && \
# set the owner to your current user \
sudo chown -R `whoami` /usr/local/lib/node_modules
```
