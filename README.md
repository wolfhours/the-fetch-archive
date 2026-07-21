# The Fetch — archive site

A small static site for showing your drawings. No build step, no
framework, no account required beyond GitHub. Three collections
("reels") — Cosmology, Gear, Other — each a responsive grid that
opens into a full-size lightbox view.

## Adding your art

1. Drop image files into the matching folder:
   - `images/cosmology/`
   - `images/gear/`
   - `images/other/`
2. Open `artworks.js` and add a line for each piece with its title
   and filename. The comments in that file show the exact format.
3. Save. That's the whole workflow — no rebuild step.

Keep images reasonably sized before uploading (long edge around
1600–2000px, exported as JPG at ~80% quality, or PNG if you need
transparency/sharp line work). Large phone-camera originals will
load slowly, especially on mobile.

## Putting it on the internet with GitHub Pages

You'll need a free GitHub account (github.com) if you don't have one.

1. **Create a new repository.**
   On github.com, click the `+` in the top right → New repository.
   Name it whatever you like (e.g. `fetch-archive`). Keep it Public.
   Don't initialize it with a README — you already have one.

2. **Upload the site.**
   Easiest path with no command line: on your new repo's page, click
   "uploading an existing file," then drag in every file and folder
   from this project (`index.html`, `style.css`, `script.js`,
   `artworks.js`, `README.md`, and the `images` folder with whatever
   you've put in it). Commit the upload.

   (If you'd rather use git from the terminal, it's the usual
   `git init`, `git add .`, `git commit -m "first version"`,
   `git remote add origin <your repo url>`, `git push -u origin main`.)

3. **Turn on Pages.**
   In the repo, go to Settings → Pages. Under "Build and deployment,"
   set Source to "Deploy from a branch," Branch to `main` and folder
   to `/ (root)`. Save.

4. **Wait about a minute**, then refresh that Pages settings screen.
   It'll show you the live URL — something like
   `https://yourusername.github.io/fetch-archive/`.

That URL is what you link to. Any time you push a change (new
images, edited `artworks.js`), the live site updates automatically
within a minute or two — no redeploy step.

## Using a custom domain (optional)

If you'd rather it live at your own domain instead of the
`github.io` one: buy a domain anywhere (Namecheap, Porkbun, etc,
usually $10–15/year), then in the same Settings → Pages screen enter
it under "Custom domain." GitHub will show you the DNS records to
add at your registrar. Propagation usually takes under an hour.

## Structure

```
index.html      the page skeleton — you likely won't need to touch this
style.css       all visual design: colors, type, layout, the scanline/
                timecode details
script.js       renders the reels from artworks.js, runs the lightbox
                and the corner timecode
artworks.js     <- the file you actually edit day to day
images/
  cosmology/
  gear/
  other/
```

To add a fourth collection entirely (say, a "Drawings" reel separate
from Cosmology), copy one of the blocks in `artworks.js`, give it a
new `id` and `folder`, make the matching folder in `images/`, and add
a link to it in the `<nav>` inside `index.html`.
