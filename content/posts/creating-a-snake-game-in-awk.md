---
title: "Creating a Snake Game in AWK"
slug: "creating-a-snake-game-in-awk"
description: "A quick guide on how to setup Ruby with RVM on Fedora Linux."
date: "2026-04-18"
author: "Dan McCarthy"
tags: ["AWK", "Bash", "Scripting"]
image: "/images/posts/setup-ruby-on-fedora.png"
---

With the service account created you can add an SPN using this command:

```
setspn -A <service>/<address>:<port> <domain>\<account>
```

```
setspn -A MSSQLSvc/sqlserver.mydomain.local:1433 kerberos.demo\Administrator
```

NOTE: you don't actually need a service running at this address, we just need it to get the hash

You can remove the SPN using the "setspn -d" option
