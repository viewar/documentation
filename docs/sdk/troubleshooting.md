---
id: troubleshooting
title: Trouble Shooting
---

## Installation

### EACCES: permission denied

if you see this error, try to fix the directory permissions with the following commands

```bash
# set directory to be readable by owner and system
sudo chmod -R 0775 /usr/local/lib/node_modules

# set the owner to your current user
USER=`whoami` sudo chown -R $USER /usr/local/lib/node_modules
```
