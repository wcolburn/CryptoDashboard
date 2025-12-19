# Crypto Dashboard

Author: Liam Colburn

# How to Run

## Install Dependencies
```bash
npm install
```

## Set up .env
At the root of the project, create a `.env` file that contains a `API_KEY` variable, or modify the existing `.env.example`.

A key can be easily obtained through https://freecryptoapi.com

## Start the App
```bash
npm run dev
```

# Notes

* I used Material UI, since it is the component library I am most familiar with, to help with the design of the website. Since the process of adding it to Remix is very involved, I opted to use MUI's official template for Remix. There is some initial bloat from MUI, both to the code in `/app` and the node modules. The repo can be found here:
https://github.com/mui/material-ui/tree/master/examples/material-ui-remix-ts

* There is a lot of latency while the server fetches from the public crypto API. Some of that is unavoidable, but there is room for optimization in `./helpers/fetchFromAPI.ts`. To improve on responsiveness, I moved the crypto dashboard proper behind a button that the user must click. This way, the initial page loads immediately and there is a spinner to let the user know the server is working on getting the crypto info.

* Running in Production does not work since Remix expects the site's host to handle the environment variables. If this app was moved to the web, the `API Key` would need to be configured in the host, but for the purposes of this project running in Development should be sufficient.