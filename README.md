This is a starter template for React+Typescript+NextJS projects.

## Installation

Required Linux packages for Cypress:

`apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb`

## Structure

Interesting folders:

- `/cypress/` holds testing code and some test results.
- `/public/` holds assets used at run-time, such as logos, images, favicon, etc.
- `/src/` is the source code for the app. React, NextJS.
  - `/src/components/` has the majority of source code for the app. These implement the page-level components.
  - `/src/pages/` mirrors the URL structure. For example, http://localhost:3000/posts/firstpost displays the default component in `/src/pages/posts/firstpost.tsx`
    - `/src/pages/_app.tsx` is a file which wraps the entire app. To define a webapp's typical header/footer/leftnav put it in here. URL Routing will change what "Component" is passed into it.
    - `/src/pages/index.tsx` is the default component displayed when there is no path in the URL, as in http://localhost:3000
  - `/src/styles/` has [SASS](https://sass-lang.com/) `.scss` files. SASS is a pre-processor for CSS with variables, imports, and exports to javascript.
  - `/src/utils@buildTime/` has javascript that runs on the build server, at build time. Despite looking like these functions look like they're being called from the app from `getStaticProps()` they never appear in the browser.

Hidden or ignored folders:

- `/.next/` is a working folder for NextJS. `.gitignore` it.
- `/.vscode/` holds standard config for the project for the VSCode IDE. Settings include: use Prettifier, organize imports & format on save, and UNIX line endings.
- `/node_modules/` holds the packages downloaded from NPM. It's huge. `.gitignore` it because `package.json` explains what goes there.
