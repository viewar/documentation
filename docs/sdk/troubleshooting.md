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

### no root permissions at all

if you are working on a machine, where you don't have root permissions,  
you can try to use the CLI via [NPX](https://www.npmjs.com/package/npx)
_(already included in your NodeJS installation)_

for example: `npx @viewar/cli init`
