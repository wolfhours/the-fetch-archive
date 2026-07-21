/**
 * ARTWORKS
 * ---------
 * This is the only file you need to touch to add, remove, or reorder pieces.
 *
 * Each collection is a "reel." Each reel holds a list of pieces.
 * For every piece, set:
 *   title - shown under the image
 *   file  - the image filename, sitting inside images/<reel-folder>/
 *
 * To add a new piece:
 *   1. Drop the image file into the matching images/ folder
 *      (images/cosmology, images/gear, or images/other)
 *   2. Add a line below with its title and filename
 *
 * To add a whole new collection, copy one of the reel blocks below,
 * give it a new id/label, and make a matching folder in images/.
 * Then add a link to it in the nav in index.html.
 */

const REELS = [
  {
    id: "sights",
    number: "01",
    label: "Sights",
    folder: "images/cosmology/",
    pieces: [
      {title: "Ghosts II", file: "ghosts-II.jpg"},
      {title: "Bennings' Last Breath", file: "bennings-last-breath-2.jpg"},
      {title: "CTAЛKEP", file: "STALKER.jpg"},
      {title: "Ghosts III", file: "ghosts-III.jpg"},
      {title: "The King of New York", file: "king-of-new-york.jpg"},
      {title: "'In the Hands of an Angry GOD'", file: "whole-world.jpg"},
      {title: "Red Bloom", file: "red-bloom.jpg"},
      {title: "Portrait with Death and a Screen", file: "portrait-with-death.jpg"},
      {title: "A Quiet Moment", file: "a-quiet-moment.jpg"},
      {title: "Marla", file: "marla.jpg"},
      {title: "Secret Of The Rats", file: "rats-secret.jpg"},
      {title: "Senator (R-MA)", file: "rep-from-innsmouth.jpg"},
      {title: "The Long Hunger", file: "long-hunger.jpg"},
      {title: "GIANT ASTEROID 2026", file: "2026.jpg"},

      // Example — replace with your own:
      // { title: "The Long Hunger", file: "long-hunger.jpg" },
      // { title: "Emanation of Chaos", file: "chaos-emanation.jpg" },
    ]
  },
  {
    id: "sounds",
    number: "02",
    label: "Sounds",
    folder: "images/sounds/",
    pieces: [
      // {title: "Drone Warfare", file: "Drone-Warfare.mp3"},
    ]
  },  

];
