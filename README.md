# deepdevapps.github.io
An indie developer from Russia who developing 2D simulators for mobile and other devices. We believe that our games can entertain you!

## Static page routes

Public pages use directory URLs, for example `/banksim/` and `/ru/banksim/`.
Edit the corresponding `index.html` inside that directory. Root `index.html`
and `ru/index.html` remain the homepages. Previous `*.html` addresses contain
redirects that preserve query parameters and fragments. Keep root `404.html`
as a full error document for GitHub Pages.

Developer Simulator's game and privacy routes redirect to `/403/` (or
`/ru/403/`). Its roadmap links using either `id` or `game` redirect there too.
These are static redirects to an error page, not HTTP 403 responses.
