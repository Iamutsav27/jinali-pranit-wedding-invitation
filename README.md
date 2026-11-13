# Jinali & Pranit wedding invitation

A mobile-first, bilingual wedding invitation for 26 January 2027. Open `index.html` directly or visit the GitHub Pages site.

The five story scenes retain the Ganpati intro video, English/ગુજરાતી language choice, background music, and swipe navigation. The palace artwork uses independent transparent PNG layers with scroll parallax and idle drift. The sandstone gateway opens in direct proportion to scroll position.

The loading screen and Ganpati intro use the same cursive **JP** wordmark. Its script font is bundled in `assets/great-vibes.ttf` so the logo works in a directly opened HTML file; the font license is in `assets/OFL-Great-Vibes.txt`.

## Artwork slots

The named slots in `index.html` load these files from `assets/`:

- `palace-far.png`: distant palace skyline
- `palace-main.png`: lit facade and terrace
- `palace-front.png`: foreground flowers and stonework
- `couple-walking.png`: tiny animated bride and groom
- `mandap-garden.png`: closing garden scene

If a layer cannot load, the existing painted palace scene beneath it remains visible. Music begins when a visitor taps **Open invitation with music**, which satisfies mobile browser playback rules. The time and venue are placeholders until confirmed.
