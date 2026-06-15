# wunderbar-website

## Core Function

As a restaurant website, the following information is the most valuable ones:

- Menu
- Contact
  - address
  - Phone
  - Email
  - Social Network
- Open Hours / Holiday

After website out of MVP, the following Functions should be included:

- New / Event Table
- Cook Introduction
- Multi Lingua support

## Tech Detail

### Menu

It should be done in a structural way with each menu's meta data stored in own slot.

Let's try the `Astro DB / Turso` as Claud suggested. \
Out come: It's a no-er, because Astro DB is deprecating and we need zero write, but read only. Claude suggest more fitting way: 👇

> Content Collections (Astro's native, type-safe way to manage structured content) + Fuse.js for search.
