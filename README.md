# Jinali & Pranit — Wedding Invitation

A mobile-first, swipe-controlled invitation for Tuesday, 26 January 2027.

## Open it

Visit the [live invitation](https://iamutsav27.github.io/jinali-pranit-wedding-invitation/) or keep all files together and open `index.html` locally. The first tap unlocks music on phones. Swipe up or down, drag with a mouse, use the mouse wheel, or press the arrow keys.

## Edit it

All invitation copy, names, date, venue, optional event lines, music path and language strings live in the `CONFIG` block at the top of `script.js`. The opening fallback text and Open Graph metadata in `index.html` should also be updated if the couple or date changes.

The empty Mehndi, Sangeet and Pheras entries in `CONFIG.events` are ready for later times and venues. Add a time or venue to show an event line.

## Replace the artwork

Keep these filenames or change their paths in `CONFIG.assets`:

- `assets/palace-layer-1.png` — cover and families palace
- `assets/palace-layer-2.png` — gateway and golden path
- `assets/palace-layer-3.png` — ceremony courtyard and chandeliers
- `assets/mandap-garden.png` — closing floral mandap
- `assets/jp-monogram.svg` — J & P emblem
- `assets/wedding-song.m4a` — soundtrack, started after the opening tap

The Ganesh drawing is an original inline SVG in `index.html`. Its white paths use `stroke-dashoffset` to draw on entry. Replace that SVG with a licensed `ganpati-intro.mp4` if you later prefer a video.

The illustration files are 9:16 portrait assets. The code is plain HTML, CSS and JavaScript, with no build step.
