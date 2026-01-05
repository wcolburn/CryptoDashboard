# Crypto Dashboard

Author: Liam Colburn

# How to Run

## Install Dependencies
```bash
npm install
```

## Set up .env
* At the root of the project, create a `.env` file, or simply rename `.env.example` to it.

* Visit https://freecryptoapi.com and follow the directions to get an API key. Once you sign up for an account, it will take you to your Dashboard. Underneath "Your API Key" will be the key. Add it to your clipboard.

* Return to your `.env` file and ensure there is a variable named `API_KEY`. Set the value by pasting the API key from your clipboard.
  
The `.env` file should look like this (with the x's replaced with the actual key):
  
API_KEY: xxxxxxxxxxxxxxxxxxxx

Be sure to save the file.


## Start the App
```bash
npm run dev
```

Finally, follow the terminal's instructions and open the website in your browser.

# Notes

* The most significant design decision I made is placing a button on the homepage which the user must click to view the crypto info. Ideally there would be no button since it acts as a barrier to the purpose of the site. However, I made this decision to improve the user experience. There is a large amount of latency while the server fetches from the public crypto API, and the page blocks until it's retrieved. If I displayed the information on the very first page, the entire site would take several seconds to load, which is clearly unacceptable. By having the initial page simply include a title and a button, there is no latency on the initial load. Instead, the latency begins once the user clicks the button, which is then replaced with a spinner so that the user knows the website isn't stuck but instead working in the background. This greatly enhances the user experience.

* For the visual design of the app, I used Material UI (nicknamed MUI), a popular components library. I chose to use a library instead of raw css because it quickly speeds up development and ultimately creates cleaner code that is easier to maintain, which is well worth the bloat and dependencies that come from it. One downside to MUI is that it very messily integrates into a Remix app. `entry.client.tsx`, `entry.server.tsx`, and `root.tsx` are almost all dedicated to setting it up. Since the natural inclination when reading the code of an app for the first time is to look in one of those three places, it can distract people unfamiliar with the code base from where the part of the app we care about truly begins -- `_index.tsx`. The solution to this would be investigating other components libraries, such as Tailwind, to see which best integrates with Remix. However, since this is a quick project with the purpose of demonstrating my design and clone code abilities, I chose to continue with MUI since my familiarity with it created a better overall product.
  
Source: https://github.com/mui/material-ui/tree/master/examples/material-ui-remix-ts
